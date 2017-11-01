'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = require('mobx-react');

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mobx = require('mobx');

var _page = require('./js/tpl/page');

var _page2 = _interopRequireDefault(_page);

var _Profiles = require('./js/model/Profiles');

var _Profiles2 = _interopRequireDefault(_Profiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { app } = require('electron').remote;


window.storage = require('electron-storage');
const loggerConfig = {
    transports: [new _winston2.default.transports.File({
        filename: _path2.default.join(app.getAppPath(), 'app.log'),
        maxsize: 2048,
        json: false,
        maxFiles: 5,
        tailable: true,
        zippedArchive: true,
        label: "Render"
        // humanReadableUnhandledException: true,
        // handleExceptions: true
    })],
    exitOnError: false
};

_winston2.default.Logger(loggerConfig);
window.logger = _winston2.default;
window.logger.oldError = window.logger.error;

window.logger.error = err => {
    console.log(err);
    window.logger.oldError(err);
};

let profiles = (0, _mobx.observable)(new _Profiles2.default());

profiles.loadProfiles().then(() => {
    (0, _mobx.autorunAsync)(() => {
        window.storage.set('profiles', profiles).catch(window.logger.error);
    }, 500);
}).then(() => {
    _reactDom2.default.render(_react2.default.createElement(
        _mobxReact.Provider,
        { profile: profiles.activeProfile, profiles: profiles },
        _react2.default.createElement(_page2.default, null)
    ), document.getElementById('root'));
});
//# sourceMappingURL=main.js.map
