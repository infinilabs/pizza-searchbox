import { PizzaWasm } from "./PizzaWasm";
import { Accessor, createMemo } from "solid-js";
import version from "./version";

export function useSearchClient({
  // host,
  // username,
  // password,
  clientAgents = [],
}: {
  // host: string;
  // username: string;
  // password: string;
  clientAgents?: string[];
}): Accessor<PizzaWasm> {
  return createMemo(
    () =>
      new PizzaWasm({
        // host,
        // username,
        // password,
        clientAgents: clientAgents.concat(
          `infini docs-searchbar.js (v${version}`,
        ),
      }),
  );
}
