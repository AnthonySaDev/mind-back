"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesToMegas = exports.formatTextToFileName = exports.formatTextDefault = void 0;
const formatTextDefault = (text) => text.replace(/ /g, "-").toLowerCase().trim();
exports.formatTextDefault = formatTextDefault;
const formatTextToFileName = (text) => `${Date.now()}-${(0, exports.formatTextDefault)(text)}`;
exports.formatTextToFileName = formatTextToFileName;
const bytesToMegas = (size) => (size / (1024 * 1024)).toFixed(2);
exports.bytesToMegas = bytesToMegas;
//# sourceMappingURL=formatText.js.map