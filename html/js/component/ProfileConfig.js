'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProfileList = require('./ProfileList');

var _ProfileList2 = _interopRequireDefault(_ProfileList);

var _AddProfile = require('./AddProfile');

var _AddProfile2 = _interopRequireDefault(_AddProfile);

var _ProfileEditPanel = require('./ProfileEditPanel');

var _ProfileEditPanel2 = _interopRequireDefault(_ProfileEditPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProfileConfig = class ProfileConfig extends _react2.default.Component {
    render() {
        return _react2.default.createElement(
            'div',
            { className: 'row mt-1' },
            _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(_AddProfile2.default, null),
                _react2.default.createElement(_ProfileList2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(_ProfileEditPanel2.default, null)
            )
        );
    }
};
exports.default = ProfileConfig;
//# sourceMappingURL=ProfileConfig.js.map
