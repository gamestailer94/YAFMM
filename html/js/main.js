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

var _Page = require('./js/tpl/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Config = require('./js/model/Config');

var _Config2 = _interopRequireDefault(_Config);

var _State = require('./js/model/State');

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { app } = require('electron').remote;


window.storage = require('electron-storage');
const loggerConfig = {
    transports: [new _winston2.default.transports.File({
        filename: _path2.default.join(app.getPath('userData'), 'app.log'),
        maxsize: 2048,
        json: false,
        maxFiles: 5,
        tailable: true,
        zippedArchive: true,
        label: "Render"
    })],
    exitOnError: false
};

if (process.env.NODE_ENV === 'production') {
    loggerConfig.transports[0].humanReadableUnhandledException = true;
    loggerConfig.transports[0].handleExceptions = true;
}

_winston2.default.Logger(loggerConfig);
window.logger = _winston2.default;
window.logger.oldError = window.logger.error;

window.logger.error = err => {
    console.log(err);
    window.logger.oldError(err);
};

let state = new _State2.default();
let config = window.config = (0, _mobx.observable)(new _Config2.default());

config.loadProfiles().then(() => {
    (0, _mobx.autorunAsync)(() => {
        window.storage.set('config', config).catch(window.logger.error);
    }, 500);
}).then(() => {
    _reactDom2.default.render(_react2.default.createElement(
        _mobxReact.Provider,
        { config: config, state: state },
        _react2.default.createElement(_Page2.default, null)
    ), document.getElementById('root'));
});
//# sourceMappingURL=main.js.map
