import { docsearch } from "infini-docsearch";
import "infini-docsearch/css";

docsearch({
  host: "http://127.0.0.1:9200",
  username: "admin",
  password: "admin",
  indexUid: "docs-v1",
  container: "#docsearch",
});
