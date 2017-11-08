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
        this.props.state.page = 'factorioLogin';
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
                    { className: 'row mb-1' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'G-Drive: not Connected'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-primary' },
                            _react2.default.createElement(_Fa2.default, { icon: 'google' }),
                            'Connect'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-1' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Dropbox: not Connected'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-primary' },
                            _react2.default.createElement(_Fa2.default, { icon: 'dropbox' }),
                            'Connect'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row mb-1' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Factorio Account: ',
                            this.props.config.factorioUsername
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Username: '
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
                'YAFMM Version: ',
                _electron.remote.app.getVersion()
            )
        );
    }
}) || _class) || _class) || _class);
exports.default = ConfigEdit;
//# sourceMappingURL=ConfigEdit.js.map