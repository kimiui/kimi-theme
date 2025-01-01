export type UseCopyToClipboardReturn = {
    copy: CopyFn;
    copiedText: CopiedValue;
};
export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;
export declare function useCopyToClipboard(): UseCopyToClipboardReturn;
