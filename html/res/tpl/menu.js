"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Menu extends _react2.default.Component {
    render() {
        return _react2.default.createElement(
            "menu",
            { className: "position-fixed w-100 bg-dark mt-0 h-5-r" },
            _react2.default.createElement("div", { className: "row" })
        );
    }
}
exports.default = Menu;
//# sourceMappingURL=menu.js.map
