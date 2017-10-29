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
        if (this.props.active) return 'fa fa-lg fa-check.square-o';else return 'fa fa-lg fa-square-o';
    }

    render() {
        return _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            _react2.default.createElement('i', { className: this.getIconClassName() }),
            ' ',
            this.props.name
        );
    }
}) || _class;

exports.default = ModEntry;
//# sourceMappingURL=ModEntry.js.map
