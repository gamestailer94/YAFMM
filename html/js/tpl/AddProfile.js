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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AddProfile = (_dec = (0, _mobxReact.inject)('profiles'), _dec(_class = class AddProfile extends _react2.default.Component {
    addProfile() {
        let nextProfileId = this.props.profiles.nextProfileId;
        let profile = new _Profile2.default();
        profile.id = nextProfileId;
        profile.name = 'new Profile';
        this.props.profiles.addProfile(profile);
    }

    render() {
        return _react2.default.createElement(
            'button',
            { className: 'btn btn-success btn-block mb-1', onClick: this.addProfile.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-plus fa-lg fa-fw' })
        );
    }

}) || _class);
exports.default = AddProfile;
//# sourceMappingURL=AddProfile.js.map
