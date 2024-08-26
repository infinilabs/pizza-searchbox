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
    .load("recipe_names.csv")
    .then(() => {
      console.log("recipe_names.csv loaded and indexed successfully.");
    })
    .catch((error) => {
      console.error("Failed to load recipe_names.csv:", error);
    });

  // Return a reactive accessor using createMemo
  return createMemo(() => pizzaWasm);
}
