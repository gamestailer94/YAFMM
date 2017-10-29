"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_menu=require("./menu"),_menu2=_interopRequireDefault(_menu),_button=require("./button"),_button2=_interopRequireDefault(_button),_ModList=require("./ModList"),_ModList2=_interopRequireDefault(_ModList);class Page extends _react2.default.Component{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.resetPage=this.resetPage.bind(this),this.state={page:"main"}}handleClick(e){"config"===e.props.id&&this.setState({page:"config"}),e.setState({working:!e.state.working})}resetPage(){this.setState({page:"main"})}backButton(){return _react2.default.createElement(_button2.default,{type:"secondary",icon:"arrow-left",click:this.resetPage})}render(){let e,t;return"main"===this.state.page?(e=_react2.default.createElement(_menu2.default,{click:this.handleClick}),t=_react2.default.createElement("div",{className:"container"},_react2.default.createElement(_ModList2.default,{click:this.handleClick}))):e=_react2.default.createElement("div",{className:"bg-dark w-100"},_react2.default.createElement("div",{className:"container"},_react2.default.createElement("div",{className:"row py-1"},this.backButton()))),_react2.default.createElement("div",null,e,t)}}exports.default=Page;
//# sourceMappingURL=page.js.map
