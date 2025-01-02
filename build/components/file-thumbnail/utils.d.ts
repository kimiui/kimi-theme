export declare function fileFormat(fileUrl: string): string;
export declare function fileThumb(fileUrl: string): string;
export declare function fileTypeByUrl(fileUrl: string): string;
export declare function fileNameByUrl(fileUrl: string): string | undefined;
export declare function fileData(file: File | string): {
    preview: string;
    name: string | undefined;
    type: string;
    size: undefined;
    path: string;
    lastModified: undefined;
    lastModifiedDate: undefined;
} | {
    name: string;
    size: number;
    path: string | undefined;
    type: string;
    preview: string | undefined;
    lastModified: number;
    lastModifiedDate: Date | undefined;
};
