'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Fa = (0, _mobxReact.observer)(_class = class Fa extends _react2.default.Component {

    className() {
        let prefix = 'fa fa-lg fa-fw fa-';
        let spin = this.props.spin ? ' fa-spin' : '';
        return prefix + this.props.icon + spin + ' ' + this.props.extraClass;
    }

    render() {
        return _react2.default.createElement('i', _extends({ className: this.className(), onClick: this.props.click }, this.props.data));
    }
}) || _class;

exports.default = Fa;
//# sourceMappingURL=Fa.js.map
