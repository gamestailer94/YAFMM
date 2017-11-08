'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Profile = require('../model/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Fa = require('./Fa');

var _Fa2 = _interopRequireDefault(_Fa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AddProfile = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = class AddProfile extends _react2.default.Component {
    addProfile() {
        let nextProfileId = this.props.config.nextProfileId;
        let profile = new _Profile2.default();
        profile.id = nextProfileId;
        profile.name = 'new Profile';
        this.props.config.addProfile(profile);
    }

    render() {
        return _react2.default.createElement(
            'button',
            { className: 'btn btn-success btn-block mb-1', onClick: this.addProfile.bind(this) },
            _react2.default.createElement(_Fa2.default, { icon: 'plus' })
        );
    }

}) || _class);
exports.default = AddProfile;
//# sourceMappingURL=AddProfile.js.map
