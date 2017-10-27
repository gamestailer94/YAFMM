'use strict';
//required for bootstrap

var _templates = require('./res/tpl/templates.js');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const $ = require('jquery');
const Popper = require('popper.js');
require('./res/js/bootstrap.js');

const React = require('react');
const ReactDOM = require('react-dom');
const fs = require('fs');
const path = require('path');
const DomRoot = document.getElementById('root');


ReactDOM.render(React.createElement(_templates2.default, null), DomRoot);
//# sourceMappingURL=main.js.map
