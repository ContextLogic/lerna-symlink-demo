"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var WPSButton = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement("button", { id: "original", onClick: function () {
            window.open("http://parcel.wish.com");
        } }, text));
};
exports.default = WPSButton;
