import { docsearch } from "pizza-docsearch";
import "pizza-docsearch/css";

docsearch({
  container: "#docsearch",
  default_operator: "AND",
  number_of_results: 10,
  default_field: "*",//use `*` to search all fields, or specify a field name, like `title`.
});
