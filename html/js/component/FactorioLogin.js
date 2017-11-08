'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FactorioLogin = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = (0, _mobxReact.observer)(_class = class FactorioLogin extends _react2.default.Component {

    componentDidMount() {
        $('div.content [data-toggle="tooltip"]').tooltip();
    }
    componentWillUnmount() {
        $('div.content[data-toggle="tooltip"]').tooltip('dispose');
    }

    render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col text-center' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'To download Mods and update Factorio to the latest version'
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        'this App needs your Login Data for Factorio'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-6 m-auto' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Username'
                        ),
                        _react2.default.createElement('input', { className: 'form-control', type: 'text', value: this.props.config.factorioUsername, placeholder: 'Username' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Password'
                        ),
                        _react2.default.createElement('input', { className: 'form-control', type: 'password', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-check' },
                        _react2.default.createElement(
                            'label',
                            { className: 'custom-checkbox custom-control' },
                            _react2.default.createElement('input', { type: 'checkbox', className: 'custom-control-input' }),
                            _react2.default.createElement('span', { className: 'custom-control-indicator' }),
                            _react2.default.createElement(
                                'span',
                                { className: 'custom-control-description' },
                                'Save Password',
                                _react2.default.createElement('i', { className: 'fa fa-lg fa-fw fa-question-circle-o', 'data-toggle': 'tooltip', 'data-placement': 'right',
                                    title: 'Your Password will be Encrypted' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-primary' },
                            'Save'
                        )
                    )
                )
            )
        );
    }
}) || _class) || _class);
exports.default = FactorioLogin;
//# sourceMappingURL=FactorioLogin.js.map
