'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FactorioLogin = (_dec = (0, _mobxReact.inject)('config'), _dec2 = (0, _mobxReact.inject)('state'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = class FactorioLogin extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            'username': this.props.config.factorioUsername,
            'password': this.props.config.factorioPassword,
            'savePw': this.props.config.factorioSavePw
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

    onSave() {
        this.props.config.factorioUsername = this.state.username;
        this.props.config.factorioPassword = this.state.password;
        this.props.config.factorioSavePw = this.state.savePw;
        let prevPage = this.props.state.prevPage;
        this.props.state.prevPage = '';
        this.props.state.page = prevPage;
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
                            { className: 'btn btn-outline-primary', onClick: this.onSave.bind(this) },
                            'Save'
                        )
                    )
                )
            )
        );
    }
}) || _class) || _class) || _class);
exports.default = FactorioLogin;
//# sourceMappingURL=FactorioLogin.js.map
