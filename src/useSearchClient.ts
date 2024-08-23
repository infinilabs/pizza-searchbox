import { SearchClient } from "./searchClient";
import { Accessor, createMemo } from "solid-js";
import version from "./version";

export function useSearchClient({
  host,
  username,
  password,
  clientAgents = [],
}: {
  host: string;
  username: string;
  password: string;
  clientAgents?: string[];
}): Accessor<SearchClient> {
  return createMemo(
    () =>
      new SearchClient({
        host,
        username,
        password,
        clientAgents: clientAgents.concat(
          `infini docs-searchbar.js (v${version}`,
        ),
      }),
  );
}
