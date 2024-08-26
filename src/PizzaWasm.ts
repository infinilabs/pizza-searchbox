import { Pizza } from "pizza-wasm";
import { memory } from "pizza-wasm/pizza_wasm_bg";
import { convertHitsToFormattedHits } from "./DocSearchModal";

class PizzaWasm {
  private pizzaEngine: Pizza;
  constructor({}) {
    console.log("new pizza");
    this.pizzaEngine = Pizza.new();
  }

  async load(url: string): Promise<void> {
    try {
      // Fetch the file from the URL
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch file from ${url}: ${response.statusText}`,
        );
      }

      // Read the file content as text
      const fileContent = await response.text();

      // Load and index the file content using the Wasm engine
      const isLoaded = this.pizzaEngine.load(fileContent);

      if (isLoaded) {
        console.log(`${url} loaded and indexed successfully.`);
      } else {
        console.error(`Failed to load ${url}`);
      }
    } catch (error) {
      console.error(`Error loading ${url}:`, error);
    }
  }

  // index(indexUid) {
  //   this.indexUid = indexUid;
  //   return this; // Return `this` to allow chaining
  // }

  async search(query: string, options = {}) {
    console.log(query);

    // Use the Wasm pizzaEngine to perform the search
    const searchResultsJsValue = this.pizzaEngine.search_by_query_string(query);

    // Convert JsValue to a JavaScript object
    const searchResults =
      searchResultsJsValue && searchResultsJsValue !== undefined
        ? searchResultsJsValue
        : undefined;

    console.log(searchResults);

    // const formattedHits = convertHitsToFormattedHits(searchResults.hits);

    return searchResults;
    //
    // return {
    //   ok: true,
    //   hits: [
    //     {
    //       hierarchy_radio_lvl0: null,
    //       hierarchy_radio_lvl1: null,
    //       hierarchy_radio_lvl2: null,
    //       hierarchy_radio_lvl3: "hierarchy_radio_lvl3",
    //       hierarchy_radio_lvl4: null,
    //       hierarchy_radio_lvl5: null,
    //       hierarchy_lvl0: "hierarchy_lvl0",
    //       hierarchy_lvl1: "hierarchy_lvl1",
    //       hierarchy_lvl2: "hierarchy_lvl2",
    //       hierarchy_lvl3: "hierarchy_lvl3",
    //       hierarchy_lvl4: null,
    //       hierarchy_lvl5: null,
    //       hierarchy_lvl6: null,
    //       content: null,
    //       objectID: "9ea8da8630fcce924271dac8e48f43782791a238",
    //       anchor: "opening-devtools-programmatically",
    //       url: "https://tauri.app/it/v1/guides/debugging/application/#opening-devtools-programmatically",
    //       _formatted: {
    //         hierarchy_radio_lvl0: null,
    //         hierarchy_radio_lvl1: null,
    //         hierarchy_radio_lvl2: null,
    //         hierarchy_radio_lvl3: "_formatted:hierarchy_radio_lvl3",
    //         hierarchy_radio_lvl4: null,
    //         hierarchy_radio_lvl5: null,
    //         hierarchy_lvl0: "_formatted:hierarchy_lvl0",
    //         hierarchy_lvl1: "_formatted:hierarchy_lvl1",
    //         hierarchy_lvl2: "_formatted:hierarchy_lvl2 ",
    //         hierarchy_lvl3: "_formatted:<em>hierarchy_lvl3</em>",
    //         hierarchy_lvl4: null,
    //         hierarchy_lvl5: null,
    //         hierarchy_lvl6: null,
    //         content: null,
    //         objectID: "9ea8da8630fcce924271dac8e48f43782791a238",
    //         anchor: "<em>anchor</em>g-anchor",
    //         url: "https://tauri.app/it/v1/guides/debugging/application/#<em>openin</em>g-devtools-programmatically",
    //       },
    //     },
    //     {
    //       hierarchy_radio_lvl0: null,
    //       hierarchy_radio_lvl1: null,
    //       hierarchy_radio_lvl2: null,
    //       hierarchy_radio_lvl3: null,
    //       hierarchy_radio_lvl4: null,
    //       hierarchy_radio_lvl5: "directory ​",
    //       hierarchy_lvl0: "JS API",
    //       hierarchy_lvl1: "dialog",
    //       hierarchy_lvl2: "Interfaces ​",
    //       hierarchy_lvl3: "OpenDialogOptions ​",
    //       hierarchy_lvl4: "Properties ​",
    //       hierarchy_lvl5: "directory ​",
    //       hierarchy_lvl6: null,
    //       content: null,
    //       objectID: "5beb749fb42cbe2d46ed744a2d748cf5120e21f2",
    //       anchor: "directory",
    //       url: "https://tauri.app/v1/api/js/dialog/#directory",
    //       _formatted: {
    //         hierarchy_radio_lvl0: null,
    //         hierarchy_radio_lvl1: null,
    //         hierarchy_radio_lvl2: null,
    //         hierarchy_radio_lvl3: null,
    //         hierarchy_radio_lvl4: null,
    //         hierarchy_radio_lvl5: "directory ​",
    //         hierarchy_lvl0: "JS API",
    //         hierarchy_lvl1: "dialog",
    //         hierarchy_lvl2: "Interfaces ​",
    //         hierarchy_lvl3: "<em>OpenDi</em>alogOptions ​",
    //         hierarchy_lvl4: "Properties ​",
    //         hierarchy_lvl5: "directory ​",
    //         hierarchy_lvl6: null,
    //         content: null,
    //         objectID: "5beb749fb42cbe2d46ed744a2d748cf5120e21f2",
    //         anchor: "directory",
    //         url: "https://tauri.app/v1/api/js/dialog/#directory",
    //       },
    //     },
    //   ],
    // };
  }
}

export { PizzaWasm };
