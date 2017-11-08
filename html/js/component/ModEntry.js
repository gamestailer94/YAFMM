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

let ModEntry = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = (0, _mobxReact.observer)(_class = class ModEntry extends _react2.default.Component {

    constructor(props) {
        super(props);
    }

    getIconName() {
        if (this.props.mod.active) return 'check-square';else return 'square-o';
    }

    changeActive() {
        let mod = this.props.mod;
        mod.active = !this.props.mod.active;
    }

    remove() {
        let id = this.props.mod.id;
        this.props.config.activeProfile.removeMod(id);
    }

    render() {
        return _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            _react2.default.createElement(_Fa2.default, { icon: this.getIconName(), click: this.changeActive.bind(this) }),
            ' ',
            this.props.mod.name,
            _react2.default.createElement(
                'div',
                { className: 'float-right' },
                _react2.default.createElement(_Fa2.default, { icon: 'trash-o', extraClass: 'text-danger', click: this.remove.bind(this) })
            )
        );
    }
}) || _class) || _class);
exports.default = ModEntry;
//# sourceMappingURL=ModEntry.js.map
