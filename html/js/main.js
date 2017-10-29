'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _page = require('./js/tpl/page');

var _page2 = _interopRequireDefault(_page);

var _mobxReact = require('mobx-react');

var _ModList = require('./js/model/ModList');

var _ModList2 = _interopRequireDefault(_ModList);

var _Mod = require('./js/model/Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mod = new _Mod2.default();
let modList = new _ModList2.default();

mod.loadDetails();
modList.addMod(mod);
modList.addMod(mod);

_reactDom2.default.render(_react2.default.createElement(
    _mobxReact.Provider,
    { modList: modList },
    _react2.default.createElement(_page2.default, null)
), document.getElementById('root'));
//# sourceMappingURL=main.js.map
