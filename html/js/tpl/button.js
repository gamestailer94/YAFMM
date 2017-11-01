'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Button = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = (0, _mobxReact.observer)(_class = class Button extends _react2.default.Component {

    constructor(props) {
        super(props);
        if (typeof props.config.btn[props.id] === 'undefined') {
            props.config.addButton(props.id);
        }
    }

    getClassName() {
        return "btn btn-" + this.props.type;
    }

    getIconName() {
        let prefix = "fa fa-lg fa-fw fa-";
        if (this.props.config.btn[this.props.id].working) {
            return prefix + "circle-o-notch fa-spin";
        } else {
            return prefix + this.props.icon;
        }
    }

    handleClick() {
        this.props.click(this);
    }

    render() {
        return _react2.default.createElement(
            'button',
            { className: this.getClassName(), onClick: this.handleClick.bind(this),
                'data-toggle': 'tooltip', 'data-placement': 'bottom', title: this.props.tooltip },
            _react2.default.createElement('i', { className: this.getIconName() })
        );
    }
}) || _class) || _class);
exports.default = Button;
//# sourceMappingURL=Button.js.map
