'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Fa = require('./Fa');

var _Fa2 = _interopRequireDefault(_Fa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Button = (_dec = (0, _mobxReact.inject)('state'), _dec(_class = (0, _mobxReact.observer)(_class = class Button extends _react2.default.Component {

    constructor(props) {
        super(props);
        if (typeof props.state.btn[props.id] === 'undefined') {
            props.state.addButton(props.id);
        }
    }

    getClassName() {
        return "btn btn-" + this.props.type;
    }

    handleClick() {
        this.props.click(this);
    }

    render() {
        return _react2.default.createElement(
            'button',
            { className: this.getClassName(), onClick: this.handleClick.bind(this),
                'data-toggle': 'tooltip', 'data-placement': 'bottom', title: this.props.tooltip },
            _react2.default.createElement(_Fa2.default, { icon: this.props.icon, spin: this.props.state.btn[this.props.id].working })
        );
    }
}) || _class) || _class);
exports.default = Button;
//# sourceMappingURL=Button.js.map
