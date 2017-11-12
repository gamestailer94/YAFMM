'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MainMenu = require('./MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _BackMenu = require('./BackMenu');

var _BackMenu2 = _interopRequireDefault(_BackMenu);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Menu = (_dec = (0, _mobxReact.inject)(['state']), _dec(_class = (0, _mobxReact.observer)(_class = class Menu extends _react2.default.Component {
    componentDidMount() {
        $('#menu [data-toggle="tooltip"]').tooltip();
    }
    componentWillUnmount() {
        $('#menu [data-toggle="tooltip"]').tooltip('dispose');
    }
    componentWillUpdate() {
        $('#menu [data-toggle="tooltip"]').tooltip('dispose');
    }
    componentDidUpdate() {
        $('#menu [data-toggle="tooltip"]').tooltip();
    }

    getMenu() {
        if (this.props.state.dislpayMenu) {
            if (this.props.state.page === 'main') {
                return _react2.default.createElement(_MainMenu2.default, null);
            } else {
                return _react2.default.createElement(_BackMenu2.default, null);
            }
        } else {
            return _react2.default.createElement('div', { className: 'row mt-1' });
        }
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'position-fixed bg-dark w-100 menu mt-0 t-0' },
            _react2.default.createElement(
                'div',
                { className: 'container', id: 'menu' },
                this.getMenu()
            )
        );
    }
}) || _class) || _class);
exports.default = Menu;
//# sourceMappingURL=Menu.js.map
