"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var head_1 = require("next/head");
require("tailwindcss/tailwind.css");
var theme = material_1.createTheme({
    palette: {
        primary: {
            main: '#556cd6'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: colors_1.red.A400
        }
    }
});
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(material_1.ThemeProvider, { theme: theme },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Stepup Quiz"),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("meta", { name: "description", content: "is a tool that lets you receive email notifications about Willys Plus products from categories of your choice.`}" }),
            React.createElement("meta", { property: "og:description", content: "is a tool that lets you receive email notifications about Willys Plus products from categories of your choice.`}" }),
            React.createElement("meta", { property: "og:image", content: "https://i.imgur.com/TO3DegM.png" }),
            React.createElement("meta", { property: "og:image:width", content: "1200" }),
            React.createElement("meta", { property: "og:image:height", content: "630" }),
            React.createElement("meta", { property: "og:url", content: "https://willys-plus-notifier.netlify.app/" }),
            React.createElement("meta", { content: "willys, plus, notifier", name: "keywords" })),
        React.createElement(Component, __assign({}, pageProps))));
}
exports["default"] = MyApp;
