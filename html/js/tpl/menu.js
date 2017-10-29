'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Menu = class Menu extends _react2.default.Component {
    componentDidMount() {
        $('menu [data-toggle="tooltip"]').tooltip();
    }
    componentWillUnmount() {
        $('menu [data-toggle="tooltip"]').tooltip('dispose');
    }

    render() {
        return _react2.default.createElement(
            'menu',
            { className: 'position-fixed bg-dark w-100 menu mt-0 t-0' },
            _react2.default.createElement(
                'div',
                { className: 'row my-1' },
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_button2.default, { type: 'primary', tooltip: 'Add', icon: 'plus', id: 'add', click: this.props.click }),
                    _react2.default.createElement(_button2.default, { type: 'outline-success', tooltip: 'Update', icon: 'download', id: 'update', click: this.props.click }),
                    _react2.default.createElement(_button2.default, { type: 'outline-success', tooltip: 'Upload to Cloud', icon: 'cloud-upload', id: 'upload', click: this.props.click })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_button2.default, { type: 'secondary', tooltip: 'Config', icon: 'wrench', id: 'config', click: this.props.click })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_button2.default, { type: 'success', tooltip: 'Start Game', icon: 'play', id: 'start', click: this.props.click })
                )
            )
        );
    }
};
exports.default = Menu;
//# sourceMappingURL=menu.js.map
