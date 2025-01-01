"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFormat = fileFormat;
exports.fileThumb = fileThumb;
exports.fileTypeByUrl = fileTypeByUrl;
exports.fileNameByUrl = fileNameByUrl;
exports.fileData = fileData;
// ----------------------------------------------------------------------
// Define more types here
var FORMAT_PDF = ["pdf"];
var FORMAT_TEXT = ["txt"];
var FORMAT_PHOTOSHOP = ["psd"];
var FORMAT_WORD = ["doc", "docx"];
var FORMAT_EXCEL = ["xls", "xlsx"];
var FORMAT_ZIP = ["zip", "rar", "iso"];
var FORMAT_ILLUSTRATOR = ["ai", "esp"];
var FORMAT_POWERPOINT = ["ppt", "pptx"];
var FORMAT_AUDIO = ["wav", "aif", "mp3", "aac"];
var FORMAT_IMG = ["jpg", "jpeg", "gif", "bmp", "png", "svg", "webp"];
var FORMAT_VIDEO = ["m4v", "avi", "mpg", "mp4", "webm"];
var iconUrl = function (icon) { return "/assets/icons/files/".concat(icon, ".svg"); };
// ----------------------------------------------------------------------
function fileFormat(fileUrl) {
    var format;
    var fileByUrl = fileTypeByUrl(fileUrl);
    switch (fileUrl.includes(fileByUrl)) {
        case FORMAT_TEXT.includes(fileByUrl):
            format = "txt";
            break;
        case FORMAT_ZIP.includes(fileByUrl):
            format = "zip";
            break;
        case FORMAT_AUDIO.includes(fileByUrl):
            format = "audio";
            break;
        case FORMAT_IMG.includes(fileByUrl):
            format = "image";
            break;
        case FORMAT_VIDEO.includes(fileByUrl):
            format = "video";
            break;
        case FORMAT_WORD.includes(fileByUrl):
            format = "word";
            break;
        case FORMAT_EXCEL.includes(fileByUrl):
            format = "excel";
            break;
        case FORMAT_POWERPOINT.includes(fileByUrl):
            format = "powerpoint";
            break;
        case FORMAT_PDF.includes(fileByUrl):
            format = "pdf";
            break;
        case FORMAT_PHOTOSHOP.includes(fileByUrl):
            format = "photoshop";
            break;
        case FORMAT_ILLUSTRATOR.includes(fileByUrl):
            format = "illustrator";
            break;
        default:
            format = fileTypeByUrl(fileUrl);
    }
    return format;
}
// ----------------------------------------------------------------------
function fileThumb(fileUrl) {
    var thumb;
    switch (fileFormat(fileUrl)) {
        case "folder":
            thumb = iconUrl("ic-folder");
            break;
        case "txt":
            thumb = iconUrl("ic-txt");
            break;
        case "zip":
            thumb = iconUrl("ic-zip");
            break;
        case "audio":
            thumb = iconUrl("ic-audio");
            break;
        case "video":
            thumb = iconUrl("ic-video");
            break;
        case "word":
            thumb = iconUrl("ic-word");
            break;
        case "excel":
            thumb = iconUrl("ic-excel");
            break;
        case "powerpoint":
            thumb = iconUrl("ic-power_point");
            break;
        case "pdf":
            thumb = iconUrl("ic-pdf");
            break;
        case "photoshop":
            thumb = iconUrl("ic-pts");
            break;
        case "illustrator":
            thumb = iconUrl("ic-ai");
            break;
        case "image":
            thumb = iconUrl("ic-img");
            break;
        default:
            thumb = iconUrl("ic-file");
    }
    return thumb;
}
// ----------------------------------------------------------------------
function fileTypeByUrl(fileUrl) {
    return (fileUrl && fileUrl.split(".").pop()) || "";
}
// ----------------------------------------------------------------------
function fileNameByUrl(fileUrl) {
    return fileUrl.split("/").pop();
}
// ----------------------------------------------------------------------
function fileData(file) {
    // From url
    if (typeof file === "string") {
        return {
            preview: file,
            name: fileNameByUrl(file),
            type: fileTypeByUrl(file),
            size: undefined,
            path: file,
            lastModified: undefined,
            lastModifiedDate: undefined,
        };
    }
    // From file
    return {
        name: file.name,
        size: file.size,
        path: file.path,
        type: file.type,
        preview: file.preview,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
    };
}
