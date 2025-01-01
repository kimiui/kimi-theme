export declare function fileFormat(fileUrl: string): any;
export declare function fileThumb(fileUrl: string): any;
export declare function fileTypeByUrl(fileUrl: string): string;
export declare function fileNameByUrl(fileUrl: string): string;
export declare function fileData(file: File | string): {
    name: string;
    size: number;
    path: string;
    type: string;
    preview: string;
    lastModified: number;
    lastModifiedDate: Date;
};
