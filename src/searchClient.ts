class SearchClient {
  constructor({ host, username, password }) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  index(indexUid) {
    this.indexUid = indexUid;
    return this; // Return `this` to allow chaining
  }

  async search(query, options = {}) {
    return {
      ok: true,
      hits: [
        {
            "hierarchy_radio_lvl0": null,
            "hierarchy_radio_lvl1": null,
            "hierarchy_radio_lvl2": null,
            "hierarchy_radio_lvl3": "Opening Devtools Programmatically ​",
            "hierarchy_radio_lvl4": null,
            "hierarchy_radio_lvl5": null,
            "hierarchy_lvl0": "Documentation",
            "hierarchy_lvl1": "Application Debugging",
            "hierarchy_lvl2": "WebView Console ​",
            "hierarchy_lvl3": "Opening Devtools Programmatically ​",
            "hierarchy_lvl4": null,
            "hierarchy_lvl5": null,
            "hierarchy_lvl6": null,
            "content": null,
            "objectID": "9ea8da8630fcce924271dac8e48f43782791a238",
            "anchor": "opening-devtools-programmatically",
            "url": "https://tauri.app/it/v1/guides/debugging/application/#opening-devtools-programmatically",
            "_formatted": {
                "hierarchy_radio_lvl0": null,
                "hierarchy_radio_lvl1": null,
                "hierarchy_radio_lvl2": null,
                "hierarchy_radio_lvl3": "<em>Openin</em>g Devtools Programmatically ​",
                "hierarchy_radio_lvl4": null,
                "hierarchy_radio_lvl5": null,
                "hierarchy_lvl0": "Documentation",
                "hierarchy_lvl1": "Application Debugging",
                "hierarchy_lvl2": "WebView Console ​",
                "hierarchy_lvl3": "<em>Openin</em>g Devtools Programmatically ​",
                "hierarchy_lvl4": null,
                "hierarchy_lvl5": null,
                "hierarchy_lvl6": null,
                "content": null,
                "objectID": "9ea8da8630fcce924271dac8e48f43782791a238",
                "anchor": "<em>openin</em>g-devtools-programmatically",
                "url": "https://tauri.app/it/v1/guides/debugging/application/#<em>openin</em>g-devtools-programmatically"
            }
        },
        {
            "hierarchy_radio_lvl0": null,
            "hierarchy_radio_lvl1": null,
            "hierarchy_radio_lvl2": null,
            "hierarchy_radio_lvl3": null,
            "hierarchy_radio_lvl4": null,
            "hierarchy_radio_lvl5": "directory ​",
            "hierarchy_lvl0": "JS API",
            "hierarchy_lvl1": "dialog",
            "hierarchy_lvl2": "Interfaces ​",
            "hierarchy_lvl3": "OpenDialogOptions ​",
            "hierarchy_lvl4": "Properties ​",
            "hierarchy_lvl5": "directory ​",
            "hierarchy_lvl6": null,
            "content": null,
            "objectID": "5beb749fb42cbe2d46ed744a2d748cf5120e21f2",
            "anchor": "directory",
            "url": "https://tauri.app/v1/api/js/dialog/#directory",
            "_formatted": {
                "hierarchy_radio_lvl0": null,
                "hierarchy_radio_lvl1": null,
                "hierarchy_radio_lvl2": null,
                "hierarchy_radio_lvl3": null,
                "hierarchy_radio_lvl4": null,
                "hierarchy_radio_lvl5": "directory ​",
                "hierarchy_lvl0": "JS API",
                "hierarchy_lvl1": "dialog",
                "hierarchy_lvl2": "Interfaces ​",
                "hierarchy_lvl3": "<em>OpenDi</em>alogOptions ​",
                "hierarchy_lvl4": "Properties ​",
                "hierarchy_lvl5": "directory ​",
                "hierarchy_lvl6": null,
                "content": null,
                "objectID": "5beb749fb42cbe2d46ed744a2d748cf5120e21f2",
                "anchor": "directory",
                "url": "https://tauri.app/v1/api/js/dialog/#directory"
            }
        }
    ]
    };
  }

  async search1(query, options = {}) {
    const encodedCredentials = btoa(`${this.username}:${this.password}`);
    const headers = {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/json",
    };

    const url = `${this.host}/${this.indexUid}/_search`; // Use this.indexUid
    const body = JSON.stringify({ query: { ...options.query } }); // Add other options as needed

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
      rejectUnauthorized: false,
    });

    if (!response.ok) {
      throw new Error(`Search request failed with status ${response.status}`);
    }

    return await response.json();
  }
}

export { SearchClient };
