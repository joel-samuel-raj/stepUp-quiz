"use strict";
exports.__esModule = true;
var cache_1 = require("@emotion/cache");
// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    return cache_1["default"]({ key: 'css', prepend: true });
}
exports["default"] = createEmotionCache;
