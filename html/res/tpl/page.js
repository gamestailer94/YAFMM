'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('./menu.js');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Page extends _react2.default.Component {
    render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_menu2.default, null),
            _react2.default.createElement('div', { className: 'container' })
        );
    }
}
exports.default = Page;
//# sourceMappingURL=page.js.map
