'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = { 'working': props.working };
        this.handleClick = this.handleClick.bind(this);
    }

    getClassName() {
        return "btn btn-" + this.props.type;
    }

    getIconName() {
        let prefix = "fa fa-lg fa-fw fa-";
        if (this.state.working) {
            return prefix + "circle-o-notch fa-spin";
        } else {
            return prefix + this.props.icon;
        }
    }

    handleClick() {
        if (typeof this.props.click === "function") {
            this.props.click(this);
        }
    }

    render() {
        return _react2.default.createElement(
            'button',
            { className: this.getClassName(), onClick: this.handleClick,
                'data-toggle': 'tooltip', 'data-placement': 'bottom', title: this.props.tooltip },
            _react2.default.createElement('i', { className: this.getIconName() })
        );
    }
}
exports.default = Button;
//# sourceMappingURL=button.js.map
