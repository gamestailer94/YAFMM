'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _ModList = require('./ModList');

var _ModList2 = _interopRequireDefault(_ModList);

var _mobxReact = require('mobx-react');

var _ProfileConfig = require('./ProfileConfig');

var _ProfileConfig2 = _interopRequireDefault(_ProfileConfig);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _ConfigEdit = require('./ConfigEdit');

var _ConfigEdit2 = _interopRequireDefault(_ConfigEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Page = (_dec = (0, _mobxReact.inject)(['state']), _dec(_class = (0, _mobxReact.observer)(_class = class Page extends _react2.default.Component {
    render() {
        let content;
        switch (this.props.state.page) {
            case 'editProfile':
                content = _react2.default.createElement(_ProfileConfig2.default, null);
                break;
            case 'config':
                content = _react2.default.createElement(_ConfigEdit2.default, null);
                break;
            case 'main':
            default:
                content = _react2.default.createElement(_ModList2.default, null);
                break;
        }
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Menu2.default, null),
            _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(_Loader2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    content
                )
            )
        );
    }
}) || _class) || _class);
exports.default = Page;
//# sourceMappingURL=Page.js.map
