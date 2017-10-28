'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Menu extends _react2.default.Component {
    componentDidMount() {
        $('menu [data-toggle="tooltip"]').tooltip();
    }
    componentWillUnmount() {
        $('menu [data-toggle="tooltip"]').tooltip('dispose');
    }

    createButtons() {
        let ButtonGroupList = [];
        _underscore2.default.each(this.props.buttons, function (value, key, list) {
            let ButtonList = [];
            _underscore2.default.each(value, function (button, key, list) {
                ButtonList.push(_react2.default.createElement(_button2.default, _extends({ key: key }, button)));
            });
            ButtonGroupList.push(_react2.default.createElement(
                'div',
                { key: key, className: 'mr-1 btn-group' },
                ButtonList
            ));
        });
        return ButtonGroupList;
    }

    render() {
        return _react2.default.createElement(
            'menu',
            { className: 'position-fixed bg-dark w-100 menu mt-0' },
            _react2.default.createElement(
                'div',
                { className: 'row my-1' },
                this.createButtons()
            )
        );
    }
}
exports.default = Menu;
//# sourceMappingURL=menu.js.map
