type DocSearchHotKeys = string[] | false;

type ButtonTranslations = Partial<{
    buttonText: string;
    buttonAriaLabel: string;
}>;

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

interface DocSearchOptions extends DocSearchProps {
    container: HTMLElement | string;
    number_of_results?: number;
    default_operator?: string;
}
/**
 * Adds a search button to the specified container and setups necessary hotkeys to open the search modal.
 *
 * @returns a function to destroy and remove the search button and the hotkeys listeners.
 */
declare function docsearch(props: DocSearchOptions): () => void;

export { type DocSearchOptions, docsearch as default, docsearch };
