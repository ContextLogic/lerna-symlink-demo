import React from "react";
var WPSButton = function (_a) {
    var text = _a.text;
    return (React.createElement("button", { id: "original", onClick: function () {
            window.open("http://parcel.wish.com");
        } }, text));
};
export default WPSButton;
