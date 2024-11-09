import { Component, createSignal } from "solid-js";
import { ButtonTranslations, DocSearchButton } from "./DocSearchButton";
import {
  useDocSearchHotKeys as useHotKeys,
  DocSearchHotKeys,
} from "./useDocSearchHotKeys";
import { DocSearchModal, ModalTranslations } from "./DocSearchModal";
import { Portal } from "solid-js/web";
import { useSearchClient } from "./useSearchClient";

export interface DocSearchProps {
  // host: string;
  // username: string;
  // password: string;
  // indexUid: string;
  number_of_results?: number;
  default_operator?: string;
  clientAgents?: string[];
  /**
   * An array of hotkeys to trigger the search modal.
   * Can be either a single character, for example `s` or `/`,
   * or a combination of modifiers and key, for example `ctrl+k`.
   *
   * Default keys are `['ctrl+k', 's', '/']`
   *
   * Set to `false` to disable default keys.
   */
  hotKeys?: DocSearchHotKeys;
  translations?: DocSearchTranslations;
  environment?: typeof window;
}

export type DocSearchTranslations = Partial<{
  button: ButtonTranslations;
  modal: ModalTranslations;
}>;

const DEFAULT_HOTKEYS = ["ctrl+k", "s", "/"];

export const DocSearch: Component<DocSearchProps> = (props) => {
  const { environment = window, hotKeys = DEFAULT_HOTKEYS } = props;

  const [isOpen, setIsOpen] = createSignal(false);
  const [initialQuery, setInitialQuery] = createSignal<string | undefined>();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onInput = (query: string) => setInitialQuery(query);
  const onClick = () => {
    const selectedText = window.getSelection();
    if (selectedText) setInitialQuery(selectedText.toString());
    setIsOpen(true);
  };
  const searchClient = useSearchClient({ clientAgents:[] },props);

  useHotKeys({
    isOpen,
    onOpen,
    onClose,
    onInput,
    hotKeys,
  });

  return (
    <>
      <DocSearchButton
        translations={props?.translations?.button}
        hotKeys={hotKeys}
        onClick={onClick}
      />
      {isOpen() && (
        <Portal mount={environment.document.body}>
          <DocSearchModal
            {...props}
            searchClient={searchClient}
            initialQuery={initialQuery()}
            onClose={onClose}
            translations={props?.translations?.modal}
          />
        </Portal>
      )}
    </>
  );
};
