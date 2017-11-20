'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _electron = require('electron');

var _Fa = require('./Fa');

var _Fa2 = _interopRequireDefault(_Fa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ConfigEdit = (_dec = (0, _mobxReact.inject)('config'), _dec2 = (0, _mobxReact.inject)('state'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = class ConfigEdit extends _react2.default.Component {
    openFactorioLogin() {
        this.props.state.prevPage = 'config';
        this.props.state.page = 'factorioLogin';
    }

    makeGoogleOAuth() {
        this.props.state.prevPage = 'config';
        this.props.state.page = 'googleOAuth';
    }

    removeGoogleOAuth() {
        this.props.config.GoogleAccessToken = '';
        this.props.config.GoogleRefreshToken = '';
        this.props.config.GoogleTokenValidTill = '';
    }

    removeDropboxOAuth() {
        this.props.config.DropboxAccessToken = '';
    }

    makeDropboxOAuth() {
        this.props.state.prevPage = 'config';
        this.props.state.page = 'dropboxOAuth';
    }

    googleState() {
        return this.props.config.GoogleRefreshToken !== '';
    }

    dropboxState() {
        return this.props.config.DropboxAccessToken !== '';
    }

    getGoogleBtn() {
        if (this.googleState()) {
            return _react2.default.createElement(
                'button',
                { className: 'btn btn-outline-danger', onClick: this.removeGoogleOAuth.bind(this) },
                _react2.default.createElement(_Fa2.default, { icon: 'google' }),
                'Disconnect'
            );
        }
        return _react2.default.createElement(
            'button',
            { className: 'btn btn-outline-primary', onClick: this.makeGoogleOAuth.bind(this) },
            _react2.default.createElement(_Fa2.default, { icon: 'google' }),
            'Connect'
        );
    }

    getDropboxBtn() {
        if (this.dropboxState()) {
            return _react2.default.createElement(
                'button',
                { className: 'btn btn-outline-danger', onClick: this.removeDropboxOAuth.bind(this) },
                _react2.default.createElement(_Fa2.default, { icon: 'dropbox' }),
                'Disconnect'
            );
        }
        return _react2.default.createElement(
            'button',
            { className: 'btn btn-outline-primary', onClick: this.makeDropboxOAuth.bind(this) },
            _react2.default.createElement(_Fa2.default, { icon: 'dropbox' }),
            'Connect'
        );
    }

    changeAutoUpload(e) {
        this.props.config.autoUpload = e.target.checked;
    }

    getAutoUploadDestination() {
        return this.props.config.autoUploadDestination === 'google' ? 'G-Drive' : 'Dropbox';
    }

    setAutoUploadToGoogle() {
        this.props.config.autoUploadDestination = 'google';
    }
    setAutoUploadToDropbox() {
        this.props.config.autoUploadDestination = 'dropbox';
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'G-Drive: ',
                            this.googleState() ? "Connected" : "Not Connected"
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        this.getGoogleBtn()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Dropbox: ',
                            this.dropboxState() ? "Conntected" : "Not Connected"
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        this.getDropboxBtn()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Factorio Account: ',
                            this.props.config.factorioUsername
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-success', onClick: this.openFactorioLogin.bind(this) },
                            'Change Login Data'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb.2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Auto Cloud upload:'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'label',
                            { className: 'custom-checkbox custom-control' },
                            _react2.default.createElement('input', { type: 'checkbox', className: 'custom-control-input', onChange: this.changeAutoUpload.bind(this),
                                checked: this.props.config.autoUpload }),
                            _react2.default.createElement('span', { className: 'custom-control-indicator' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        'Auto upload to:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-secondary dropdown-toggle', 'data-toggle': 'dropdown' },
                            this.getAutoUploadDestination()
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dropdown-menu' },
                            _react2.default.createElement(
                                'button',
                                { className: 'dropdown-item', onClick: this.setAutoUploadToGoogle.bind(this) },
                                'G-Drive'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'dropdown-item', onClick: this.setAutoUploadToDropbox.bind(this) },
                                'Dropbox'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        'YAFMM Version:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _electron.remote.app.getVersion()
                    )
                )
            )
        );
    }
}) || _class) || _class) || _class);
exports.default = ConfigEdit;
//# sourceMappingURL=ConfigEdit.js.map
