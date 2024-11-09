import { docsearch } from "pizza-docsearch";
import "pizza-docsearch/css";

docsearch({
  container: "#docsearch",
  default_operator: "OR",
  number_of_results: 10,
});
