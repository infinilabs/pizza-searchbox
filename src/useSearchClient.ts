import { PizzaWasm } from "./PizzaWasm";
import { Accessor, createMemo } from "solid-js";
import version from "./version";

export function useSearchClient({
  clientAgents = [],
}: {
  clientAgents?: string[];
}): Accessor<PizzaWasm> {
  const pizzaWasm = new PizzaWasm({
    clientAgents: clientAgents.concat(`infini docs-searchbar.js (v${version})`),
  });

  // Load the file asynchronously
  pizzaWasm
    .load("/index.json")
    .then(() => {
      console.log("Index loaded and indexed successfully.");
    })
    .catch((error) => {
      console.error("Failed to load index:", error);
    });

  // Return a reactive accessor using createMemo
  return createMemo(() => pizzaWasm);
}
