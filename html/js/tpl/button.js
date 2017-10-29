"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react);class Button extends _react2.default.Component{constructor(t){super(t),this.state={working:!1},this.handleClick=this.handleClick.bind(this)}getClassName(){return"btn btn-"+this.props.type}getIconName(){return this.state.working?"fa fa-lg fa-fw fa-circle-o-notch fa-spin":"fa fa-lg fa-fw fa-"+this.props.icon}handleClick(){"function"==typeof this.props.click&&this.props.click(this)}render(){return _react2.default.createElement("button",{className:this.getClassName(),onClick:this.handleClick,"data-toggle":"tooltip","data-placement":"bottom",title:this.props.tooltip},_react2.default.createElement("i",{className:this.getIconName()}))}}exports.default=Button;
//# sourceMappingURL=button.js.map