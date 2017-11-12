'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Fa = require('./Fa');

var _Fa2 = _interopRequireDefault(_Fa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FirstRunWizard = (_dec = (0, _mobxReact.inject)('config'), _dec2 = (0, _mobxReact.inject)('state'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = class FirstRunWizard extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.onContinue = this.onContinue.bind(this);
    }

    componentDidMount() {
        this.props.state.displayMenu = false;
        if (this.props.config.firstRun) {
            this.props.state.page = 'firstRun';
            this.props.config.firstRun = false;
        }
    }

    onContinue() {
        if (this.props.config.factorioUsername === '') {
            this.props.state.prevPage = 'firstRun';
            this.props.state.page = 'factorioLogin';
        } else {
            this.props.state.displayMenu = true;
            this.props.state.prevPage = '';
            this.props.state.page = 'main';
        }
    }

    makeGoogleAuth() {
        this.props.state.prevPage = 'firstRun';
        this.props.state.page = 'googleOAuth';
    }

    removeGoogleOAuth() {
        this.props.config.GoogleAccessToken = '';
        this.props.config.GoogleRefreshToken = '';
        this.props.config.GoogleTokenValidTill = '';
    }

    makeDropBoxAuth() {
        this.props.state.prevPage = 'firstRun';
        this.props.state.page = 'dropboxOAuth';
    }

    removeDropboxOAuth() {
        this.props.config.DropboxAccessToken = '';
    }

    googleButton() {
        if (this.props.config.GoogleRefreshToken === '') {
            return _react2.default.createElement(
                'button',
                { className: 'btn btn-block btn-outline-primary', onClick: this.makeGoogleAuth.bind(this) },
                _react2.default.createElement(_Fa2.default, { icon: 'google' }),
                'Connect Google'
            );
        }
        return _react2.default.createElement(
            'button',
            { className: 'btn btn-block btn-outline-danger', onClick: this.removeGoogleOAuth.bind(this) },
            _react2.default.createElement(_Fa2.default, { icon: 'google' }),
            'Disconnect Google'
        );
    }

    dropboxButton() {
        if (this.props.config.DropboxAccessToken === '') {
            return _react2.default.createElement(
                'button',
                { className: 'btn btn-block btn-outline-primary', onClick: this.makeDropBoxAuth.bind(this) },
                _react2.default.createElement(_Fa2.default, { icon: 'dropbox' }),
                'Connect Dropbox'
            );
        }
        return _react2.default.createElement(
            'button',
            { className: 'btn btn-block btn-outline-danger', onClick: this.removeDropboxOAuth.bind(this) },
            _react2.default.createElement(_Fa2.default, { icon: 'dropbox' }),
            'Disconnect Dropbox'
        );
    }

    render() {
        if (this.props.config.factorioUsername === '') {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-6 m-auto' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'text-center' },
                        'Hello'
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'text-center' },
                        'To use YAFMM you need to enter your Factorio login Data.'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'mt-2 btn btn-outline-success btn-block', onClick: this.onContinue },
                        'Continue'
                    )
                )
            );
        } else {
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
                            'h1',
                            { className: 'text-center' },
                            'You can now enable cloud support.'
                        ),
                        _react2.default.createElement(
                            'h4',
                            { className: 'text-center' },
                            'If you have used YAFMM before it will automatically download your profiles.'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text-muted' },
                            'You can always change this in the config menu.'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            { className: 'text-muted' },
                            'This step is optional.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row my-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-6 m-auto ' },
                        this.googleButton()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-6 m-auto' },
                        this.dropboxButton()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-6 m-auto' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-block btn-outline-success', onClick: this.onContinue },
                            'Continue'
                        )
                    )
                )
            );
        }
    }
}) || _class) || _class) || _class);
exports.default = FirstRunWizard;
//# sourceMappingURL=FirstRunWizard.js.map
