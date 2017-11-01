'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _ProfileList = require('./ProfileList');

var _ProfileList2 = _interopRequireDefault(_ProfileList);

var _AddProfile = require('./AddProfile');

var _AddProfile2 = _interopRequireDefault(_AddProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProfileConfig = (_dec = (0, _mobxReact.inject)('profiles'), _dec(_class = (0, _mobxReact.observer)(_class = class ProfileConfig extends _react2.default.Component {
    changeProfileName(e) {
        this.props.profiles.activeProfile.name = e.target.value;
    }

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
                _react2.default.createElement(
                    'div',
                    { className: 'alert alert-secondary' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Profile Name:'
                        ),
                        _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.props.profiles.activeProfile.name, onChange: this.changeProfileName.bind(this) })
                    )
                )
            )
        );
    }
}) || _class) || _class);
exports.default = ProfileConfig;
//# sourceMappingURL=ProfileConfig.js.map
