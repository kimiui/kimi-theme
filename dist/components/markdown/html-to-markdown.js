"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToMarkdown = htmlToMarkdown;
exports.isMarkdownContent = isMarkdownContent;
var turndown_1 = __importDefault(require("turndown"));
var html_tags_1 = require("./html-tags");
var excludeTags = ['pre', 'code'];
var turndownService = new turndown_1.default({ codeBlockStyle: 'fenced', fence: '```' });
var filterTags = html_tags_1.htmlTags.filter(function (item) { return !excludeTags.includes(item); });
/**
 * Custom rule
 * https://github.com/mixmark-io/turndown/issues/241#issuecomment-400591362
 */
turndownService.addRule('keep', {
    filter: filterTags,
    replacement: function (content, node) {
        var _a = node, isBlock = _a.isBlock, outerHTML = _a.outerHTML;
        return node && isBlock ? "\n\n".concat(outerHTML, "\n\n") : outerHTML;
    },
});
// ----------------------------------------------------------------------
function htmlToMarkdown(html) {
    return turndownService.turndown(html);
}
// ----------------------------------------------------------------------
function isMarkdownContent(content) {
    // Checking if the content contains Markdown-specific patterns
    var markdownPatterns = [
        /* Heading */
        /^#+\s/,
        /* List item */
        /^(\*|-|\d+\.)\s/,
        /* Code block */
        /^```/,
        /* Table */
        /^\|/,
        /* Unordered list */
        /^(\s*)[*+-] [^\r\n]+/,
        /* Ordered list */
        /^(\s*)\d+\. [^\r\n]+/,
        /* Image */
        /!\[.*?\]\(.*?\)/,
        /* Link */
        /\[.*?\]\(.*?\)/,
    ];
    // Checking if any of the patterns match
    return markdownPatterns.some(function (pattern) { return pattern.test(content); });
}
