'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Loader = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = (0, _mobxReact.observer)(_class = class Loader extends _react2.default.Component {

    getLoader() {
        if (this.props.config.working) {
            return _react2.default.createElement('div', { className: 'progress-bar progress-bar-striped progress-bar-animated bg-sucess w-100' });
        }
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'progress sub-menu-loader' },
            this.getLoader()
        );
    }
}) || _class) || _class);
exports.default = Loader;
//# sourceMappingURL=Loader.js.map
