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
            { className: "position-fixed w-100 bg-dark menu h-10 mt-0" },
            _react2.default.createElement("div", { className: "row" })
        );
    }
}
exports.default = Menu;
//# sourceMappingURL=menu.js.map
