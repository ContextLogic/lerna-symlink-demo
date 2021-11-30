import React from "react";
import { Button } from "react-bootstrap";
var WPSButton = function (_a) {
    var text = _a.text;
    return (React.createElement(Button, { onClick: function () {
            window.open("http://parcel.wish.com");
        } }, text));
};
export default WPSButton;
