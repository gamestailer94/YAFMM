'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = require('mobx-react');

var _page = require('./js/tpl/page');

var _page2 = _interopRequireDefault(_page);

var _Profile = require('./js/model/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Mod = require('./js/model/Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.storage = require('electron-storage');

let mod = new _Mod2.default();
let profile = new _Profile2.default();

for (let i = 1; i < 10; i++) {
    let delay = Math.random() * (8000 - 20000) + 8000;
    setTimeout(() => {
        mod = new _Mod2.default();
        mod.loadDetails();
        profile.addMod(mod);
    }, delay);
}

_reactDom2.default.render(_react2.default.createElement(
    _mobxReact.Provider,
    { profile: profile },
    _react2.default.createElement(_page2.default, null)
), document.getElementById('root'));
//# sourceMappingURL=main.js.map
