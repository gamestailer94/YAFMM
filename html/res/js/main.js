'use strict';

var _page = require('./res/tpl/page.js');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('[data-toggle="tooltip"]').tooltip();

const React = require('react');
const ReactDOM = require('react-dom');
const DomRoot = document.getElementById('root');


ReactDOM.render(React.createElement(_page2.default, null), DomRoot);
//# sourceMappingURL=main.js.map
