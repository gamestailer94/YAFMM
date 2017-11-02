'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let BackMenu = (_dec = (0, _mobxReact.inject)(['state']), _dec(_class = (0, _mobxReact.observer)(_class = class BackMenu extends _react2.default.Component {
    handleClick() {
        this.props.state.page = 'main';
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'row my-1' },
            _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_Button2.default, { type: 'secondary', tooltip: 'back', icon: 'arrow-left', id: 'back', click: this.handleClick.bind(this) })
                )
            )
        );
    }
}) || _class) || _class);
exports.default = BackMenu;
//# sourceMappingURL=BackMenu.js.map
