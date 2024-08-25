# pizza-docsearch

A quick search component for pizza, inspired by algolia/docsearch.

# Screenshots

| light                                                                                              | dark                                                                                             |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![light](https://github.com/tauri-apps/pizza-docsearch/raw/dev/.github/screenshot-light.png) | ![dark](https://github.com/tauri-apps/pizza-docsearch/raw/dev/.github/screenshot-dark.png) |

# Usage through NPM (Recommended)

### Installation

```sh
yarn add pizza-docsearch
# or
npm install pizza-docsearch
# or
pnpm add pizza-docsearch
```

### Javascript

To get started, you need a container for your `DocSearch` component to go in. If you don’t have one already, you can insert one into your markup:

```html
<div id="docsearch"></div>
```

Then, insert `DocSearch` into it by calling the `docsearch` function and providing the container. It can be a [CSS selector](https://developer.mozilla.org/en-US/docs/web/css/css_selectors) or an [Element](https://developer.mozilla.org/en-us/docs/web/api/htmlelement).

Make sure to provide a `container` (for example, a `div`), not an `input`. `DocSearch` generates a fully accessible search box for you.

```js
import { docsearch } from "pizza-docsearch";
import "pizza-docsearch/css";

docsearch({
  container: "#docsearch",
  host: "YOUR_HOST_URL",
  username: "YOUR_SEARCH_USERNAME",
  password: "YOUR_SEARCH_PASSWORD",
  indexUid: "YOUR_INDEX_UID",
});
```

### Styling

All styles are included in the package as:

- One big file:
  - ```js
    import "pizza-docsearch/css";
    ```
- Individual small files:
  - ```js
    import "pizza-docsearch/css/variables";
    ```
  - ```js
    import "pizza-docsearch/css/button";
    ```
  - ```js
    import "pizza-docsearch/css/modal";
    ```

## SolidJS

If you are using `solid-js`, you can import `DocSearch` component directely which generates a fully accessible search box for you.

```js
import { DocSearch } from "pizza-docsearch/solid";
import "pizza-docsearch/css";

function App() {
  return (
    <DocSearch
      host="YOUR_HOST_URL",
      username="YOUR_SEARCH_USERNAME",
      password="YOUR_SEARCH_PASSWORD",
      indexUid="YOUR_INDEX_UID"
    />
  );
}

export default App;
```

# Usage through CDN

The package also contains a browser bundle and the necessary styles that could be pulled through a CDN like unpkg.com:

1. add a container

   ```html
   <div id="docsearch"></div>
   ```

2. import the js borwser bundle and initialize the component

   ```html
   <script src="https://unpkg.com/pizza-docsearch@latest/dist/index.global.js"></script>
   <script>
     const { docsearch } = window.__docsearch_infini__;
     docsearch({
       container: "#docsearch",
       host: "YOUR_HOST_URL",
       username: "YOUR_SEARCH_USERNAME",
       password: "YOUR_SEARCH_PASSWORD",
       indexUid: "YOUR_INDEX_UID",
     });
   </script>
   ```

3. import styles

   ```html
   <link
     rel="stylesheet"
     href="https://unpkg.com/pizza-docsearch@latest/dist/index.css"
   />
   ```

# Acknowledgement

This project is inspired by [`algolia/docsearch`](https://github.com/algolia/docsearch/) and [`infini/docs-searchbar.js`](https://github.com/infini/docs-searchbar.js/)

# LICENSE

MIT or MIT/Apache 2.0 where applicable.
