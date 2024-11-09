# pizza-searchbox

A quick search UI component for pizza, forked from [here](https://github.com/tauri-apps/meilisearch-docsearch).

Pizza-searchbox is part of the [Pizza](https://github.com/infinilabs/pizza) search engine project, visit [Pizza's site](http://pizza.rs) for more details.

# Features

- Lightweight and fast, ~300KB after gzipped, powered by [INFINI Pizza for WebAssembly](https://github.com/infinilabs/pizza-wasm)
- Support full featured query, compatible with [Lucene's Query Syntax](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html),  eg: `foo bar -baz "qux"`,  `(title: concept OR title: index) OR (NOT collection)`, etc.

# Screenshot

![light](https://github.com/infinilabs/pizza-docsearch/blob/main/example/screenshot-2024-08-28-20.24.19.gif?raw=true)

# Integrate with Hugo

Checkout this [tutorial](https://www.reddit.com/r/infinilabs/comments/1f3rqsp/adding_search_functionality_to_a_hugo_static_site/) to learn how to integrate with Hugo.

# Acknowledgement

This project is inspired by [`algolia/docsearch`](https://github.com/algolia/docsearch/) and [`meilisearch/docs-searchbar`](https://github.com/meilisearch/docs-searchbar.js/)

# LICENSE

MIT or MIT/Apache 2.0 where applicable.
