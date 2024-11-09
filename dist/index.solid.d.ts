import { Accessor, ComponentProps, Component } from 'solid-js';

type DocSearchHotKeys = string[] | false;
declare function useDocSearchHotKeys({ isOpen, onOpen, onClose, onInput, hotKeys, }: {
    isOpen: Accessor<boolean>;
    onOpen: () => void;
    onClose: () => void;
    onInput: (query: string) => void;
    hotKeys: DocSearchHotKeys;
}): void;

type ButtonTranslations = Partial<{
    buttonText: string;
    buttonAriaLabel: string;
}>;
type DocSearchButtonProps = ComponentProps<"button"> & {
    hotKeys: DocSearchHotKeys;
    translations?: ButtonTranslations;
};
declare const DocSearchButton: Component<DocSearchButtonProps>;

type FooterTranslations = Partial<{
    selectText: string;
    selectKeyAriaLabel: string;
    navigateText: string;
    navigateUpKeyAriaLabel: string;
    navigateDownKeyAriaLabel: string;
    closeText: string;
    closeKeyAriaLabel: string;
    poweredByText: string;
}>;

type SearchBoxTranslations = Partial<{
    searchDocsPlaceHolder: string;
    resetButtonTitle: string;
    resetButtonAriaLabel: string;
    cancelButtonText: string;
    cancelButtonAriaLabel: string;
}>;

type ModalTranslations = Partial<{
    linkToTheResultAriaLabel: string;
}> & FooterTranslations & SearchBoxTranslations;
type DocSearchModalProps = DocSearchProps & {
    translations?: ModalTranslations;
    onClose?: () => void;
    initialQuery?: string;
    searchClient?: () => any;
};
type FormattedHit = {
    index: number;
    category: string | null;
    subcategory: string | null;
    title: string | null;
    content: string | null;
    url: string | null;
};
declare function convertHitsToFormattedHits(hits: any[]): [FormattedHit[], string[]];
declare const DocSearchModal: Component<DocSearchModalProps>;

interface DocSearchProps {
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
type DocSearchTranslations = Partial<{
    button: ButtonTranslations;
    modal: ModalTranslations;
}>;
declare const DocSearch: Component<DocSearchProps>;

export { type ButtonTranslations, DocSearch, DocSearchButton, type DocSearchButtonProps, type DocSearchHotKeys, DocSearchModal, type DocSearchModalProps, type DocSearchProps, type DocSearchTranslations, type ModalTranslations, convertHitsToFormattedHits, useDocSearchHotKeys };
