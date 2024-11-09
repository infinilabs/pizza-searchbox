import { Pizza } from "pizza-wasm";
import { memory } from "pizza-wasm/pizza_wasm_bg";
import { convertHitsToFormattedHits } from "./DocSearchModal";
import { DocSearchProps } from "./DocSearch";

class PizzaWasm {
  private pizzaEngine: Pizza;
  props: DocSearchProps;

  constructor({}, props: DocSearchProps) {
    console.log("Init Pizza Engine.");
    this.pizzaEngine = Pizza.new();
    this.props = props;
  }

  async load(url: string): Promise<void> {
    try {
      // Fetch the file from the URL
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch file from ${url}: ${response.statusText}`
        );
      }

      // Read the file content as text
      const fileContent = await response.text();


      //TODO, process fileContent to each object, and send to this.pizzaEngine.load

      // Load and index the file content using the Wasm engine
      const isLoaded = this.pizzaEngine.load_json_objects_array(fileContent);

      if (isLoaded) {
        console.log(`Load ${url} and indexed successfully.`);
      } else {
        console.error(`Failed to load ${url}`);
      }
    } catch (error) {
      console.error(`Error loading ${url}:`, error);
    }
  }

  async search(query: string, options = {}) {

    // Use the Wasm pizzaEngine to perform the search
    const searchResultsJsValue = this.pizzaEngine.advanced_search_by_query_string(this?.props?.default_field??"*",
      query, this?.props?.default_operator ?? "OR", 0, this?.props?.number_of_results ?? 10, false);
    return searchResultsJsValue;
  }
}

export { PizzaWasm };
