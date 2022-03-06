"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var document_1 = require("next/document");
var create_instance_1 = require("@emotion/server/create-instance");
var createEmotionCache_1 = require("../src/Utils/createEmotionCache");
var MyDocument = /** @class */ (function (_super) {
    __extends(MyDocument, _super);
    function MyDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDocument.prototype.render = function () {
        return (React.createElement(document_1.Html, null,
            React.createElement(document_1.Head, null,
                React.createElement("meta", { name: "robots", content: "index, follow" }),
                React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
                React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: 'true' }),
                React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap", rel: "stylesheet" }),
                this.props.emotionStyleTags),
            React.createElement("body", null,
                React.createElement(document_1.Main, null),
                React.createElement(document_1.NextScript, null))));
    };
    return MyDocument;
}(document_1["default"]));
exports["default"] = MyDocument;
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var originalRenderPage, cache, extractCriticalToChunks, initialProps, emotionStyles, emotionStyleTags;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                originalRenderPage = ctx.renderPage;
                cache = createEmotionCache_1["default"]();
                extractCriticalToChunks = create_instance_1["default"](cache).extractCriticalToChunks;
                ctx.renderPage = function () {
                    return originalRenderPage({
                        enhanceApp: function (App) {
                            return function EnhanceApp(props) {
                                return React.createElement(App, __assign({ emotionCache: cache }, props));
                            };
                        }
                    });
                };
                return [4 /*yield*/, document_1["default"].getInitialProps(ctx)];
            case 1:
                initialProps = _a.sent();
                emotionStyles = extractCriticalToChunks(initialProps.html);
                emotionStyleTags = emotionStyles.styles.map(function (style) { return (React.createElement("style", { "data-emotion": style.key + " " + style.ids.join(' '), key: style.key, 
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML: { __html: style.css } })); });
                return [2 /*return*/, __assign(__assign({}, initialProps), { emotionStyleTags: emotionStyleTags })];
        }
    });
}); };
