'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModEntry = require('./ModEntry');

var _ModEntry2 = _interopRequireDefault(_ModEntry);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ModList = (_dec = (0, _mobxReact.inject)(['profile']), _dec(_class = (0, _mobxReact.observer)(_class = class ModList extends _react2.default.Component {

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'mod-list w-100 my-1 row' },
            _react2.default.createElement(
                'div',
                { className: 'col-12' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list-group' },
                    this.props.profile.mods.map(mod => {
                        return _react2.default.createElement(_ModEntry2.default, { key: mod.id, mod: mod });
                    })
                )
            )
        );
    }
}) || _class) || _class);
exports.default = ModList;
//# sourceMappingURL=ModList.js.map
