"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Loader = class Loader extends _react2.default.Component {
    render() {
        return _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                    "div",
                    { className: "mx-auto h-25 w-25 loader" },
                    _react2.default.createElement(
                        "svg",
                        { version: "1.1", id: "L7", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px",
                            viewBox: "0 0 100 100", "enable-background": "new 0 50 100 100", xmlSpace: "preserve" },
                        _react2.default.createElement(
                            "path",
                            { d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\r c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z" },
                            _react2.default.createElement("animateTransform", {
                                attributeName: "transform",
                                attributeType: "XML",
                                type: "rotate",
                                dur: "4s",
                                from: "0 50 50",
                                to: "360 50 50",
                                repeatCount: "indefinite" })
                        ),
                        _react2.default.createElement(
                            "path",
                            { d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\r L82,35.7z" },
                            _react2.default.createElement("animateTransform", {
                                attributeName: "transform",
                                attributeType: "XML",
                                type: "rotate",
                                dur: "2s",
                                from: "0 50 50",
                                to: "360 50 50",
                                repeatCount: "indefinite" })
                        ),
                        _react2.default.createElement(
                            "path",
                            { d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\r c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z" },
                            _react2.default.createElement("animateTransform", {
                                attributeName: "transform",
                                attributeType: "XML",
                                type: "rotate",
                                dur: "1s",
                                from: "0 50 50",
                                to: "-360 50 50",
                                repeatCount: "indefinite" })
                        )
                    )
                )
            )
        );
    }
};
exports.default = Loader;
//# sourceMappingURL=loader.js.map
