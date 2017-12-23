'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _FactorioLoginController = require('../controller/FactorioLoginController');

var _FactorioLoginController2 = _interopRequireDefault(_FactorioLoginController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FactorioLogin = (_dec = (0, _mobxReact.inject)('config'), _dec2 = (0, _mobxReact.inject)('state'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = class FactorioLogin extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            'username': this.props.config.factorioUsername,
            'password': this.props.config.factorioPassword,
            'savePw': this.props.config.factorioSavePw,
            'saveDisabled': false,
            'errorText': ''
        };
    }

    componentDidMount() {
        $('div.content [data-toggle="tooltip"]').tooltip();
    }
    componentWillUnmount() {
        $('div.content[data-toggle="tooltip"]').tooltip('dispose');
    }

    changeUsername(e) {
        this.setState({ 'username': e.target.value });
    }

    changePassword(e) {
        this.setState({ 'password': e.target.value });
    }

    changeSavePw(e) {
        this.setState({ 'savePw': e.target.checked });
    }

    onSave(e) {
        e.preventDefault();
        this.setState({ saveDisabled: true });
        this.props.config.factorioUsername = this.state.username;
        this.props.config.factorioSavePw = this.state.savePw;
        if (this.state.savePw) {
            this.props.config.factorioPassword = this.state.password;
        } else {
            this.props.config.factorioPassword = '';
            this.props.state.factorioPassword = this.state.password;
        }
        let loginController = new _FactorioLoginController2.default();
        loginController.getAuthToken(this.state.username, this.state.password).then(token => {
            this.props.config.factorioAuthToken = token;
            let prevPage = this.props.state.prevPage;
            this.props.state.prevPage = '';
            this.props.state.page = prevPage;
        }).catch(error => {
            if (error.message === 'Unauthorized') {
                this.setState({
                    errorText: 'Username and password don\'t match.'
                });
            } else {
                this.setState({
                    errorText: 'Something went wrong, please check your internet connection.'
                });
            }
            this.setState({ saveDisabled: false });
        });
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
                    { className: 'col-6 m-auto' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'text-center' },
                        'To download Mods and update Factorio to the latest version YAFMM needs your Login Data for Factorio'
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
                        'p',
                        { className: 'text-danger text-center' },
                        this.state.errorText
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
                        'form',
                        { onSubmit: this.onSave.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                null,
                                'Username'
                            ),
                            _react2.default.createElement('input', { className: 'form-control', type: 'text', value: this.state.username, onChange: this.changeUsername.bind(this), placeholder: 'Username' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                null,
                                'Password'
                            ),
                            _react2.default.createElement('input', { className: 'form-control', type: 'password', value: this.state.password, onChange: this.changePassword.bind(this), placeholder: 'Password' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-check' },
                            _react2.default.createElement(
                                'label',
                                { className: 'custom-checkbox custom-control' },
                                _react2.default.createElement('input', { type: 'checkbox', className: 'custom-control-input', onChange: this.changeSavePw.bind(this),
                                    checked: this.state.savePw }),
                                _react2.default.createElement('span', { className: 'custom-control-indicator' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'custom-control-description' },
                                    'Save Password',
                                    _react2.default.createElement('i', { className: 'fa fa-lg fa-fw fa-question-circle-o', 'data-toggle': 'tooltip', 'data-placement': 'right',
                                        title: 'Your Password will only be stored locally' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'button',
                                { type: 'submit', className: 'btn btn-outline-primary', disabled: this.state.saveDisabled },
                                'Save'
                            )
                        )
                    )
                )
            )
        );
    }
}) || _class) || _class) || _class);
exports.default = FactorioLogin;
//# sourceMappingURL=FactorioLogin.js.map
