'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModEntry = require('./ModEntry');

var _ModEntry2 = _interopRequireDefault(_ModEntry);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ModList = (_dec = (0, _mobxReact.inject)(['modList']), _dec(_class = (0, _mobxReact.observer)(_class = class ModList extends _react2.default.Component {

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'mod-list w-100 my-1 row' },
            _react2.default.createElement(
                'ul',
                { className: 'list-group' },
                this.props.modList.mods.map(mod => {
                    return _react2.default.createElement(_ModEntry2.default, _extends({ key: mod.id }, mod));
                })
            )
        );
    }
}) || _class) || _class);
exports.default = ModList;
//# sourceMappingURL=ModList.js.map
