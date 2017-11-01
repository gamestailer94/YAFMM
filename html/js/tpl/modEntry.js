'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ModEntry = (0, _mobxReact.observer)(_class = class ModEntry extends _react2.default.Component {

    constructor(props) {
        super(props);
    }

    getIconClassName() {
        if (this.props.mod.active) return 'fa fa-fw fa-lg fa-check-square';else return 'fa fa-fw fa-lg fa-square-o';
    }

    handleClick() {
        let mod = this.props.mod;
        mod.active = !this.props.mod.active;
    }

    render() {
        return _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            _react2.default.createElement('i', { onClick: this.handleClick.bind(this), className: this.getIconClassName() }),
            ' ',
            this.props.mod.name
        );
    }
}) || _class;

exports.default = ModEntry;
//# sourceMappingURL=ModEntry.js.map
