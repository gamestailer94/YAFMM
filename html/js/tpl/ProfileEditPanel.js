'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProfileEditPanel = (_dec = (0, _mobxReact.inject)('profiles'), _dec(_class = (0, _mobxReact.observer)(_class = class ProfileEditPanel extends _react2.default.Component {
    changeProfileName(e) {
        this.props.profiles.activeProfile.name = e.target.value;
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'alert alert-secondary' },
            _react2.default.createElement(
                'div',
                { className: 'mt-1' },
                _react2.default.createElement(
                    'div',
                    { className: 'form-inline' },
                    _react2.default.createElement(
                        'label',
                        { className: 'mr-1' },
                        'Profile Name:'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.props.profiles.activeProfile.name,
                        onChange: this.changeProfileName.bind(this) })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'mt-1' },
                _react2.default.createElement(
                    'label',
                    { className: 'mr-1' },
                    'Game Version:'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group' },
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-secondary dropdown-toggle', 'data-toggle': 'dropdown' },
                            '1.0.0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dropdown-menu' },
                            _react2.default.createElement(
                                'button',
                                { className: 'dropdown-item' },
                                '2.0.0'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'dropdown-item' },
                                '3.0.0'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success' },
                        _react2.default.createElement('i', { className: 'fa fa-lg fa-fw fa-refresh' })
                    )
                )
            )
        );
    }
}) || _class) || _class);
exports.default = ProfileEditPanel;
//# sourceMappingURL=ProfileEditPanel.js.map
