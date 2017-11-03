'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _GameVersion = require('../model/GameVersion');

var _GameVersion2 = _interopRequireDefault(_GameVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProfileEditPanel = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = (0, _mobxReact.observer)(_class = class ProfileEditPanel extends _react2.default.Component {
    changeProfileName(e) {
        this.props.config.activeProfile.name = e.target.value;
    }

    changeGameVersion(e) {
        this.props.config.activeProfile.gameVersion = $(e.target).data('version');
    }

    updateGameVersions() {
        let gameVersion = new _GameVersion2.default();
        gameVersion.version = "1.2." + Math.floor(Math.random() * (50 - 1) + 1);
        this.props.config.addGameVersion(gameVersion);
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
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.props.config.activeProfile.name,
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
                            this.props.config.activeProfile.gameVersion
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dropdown-menu' },
                            this.props.config.gameVersions.map(gameVersion => {
                                let className = 'dropdown-item';
                                className += this.props.config.activeProfile.gameVersion === gameVersion.version ? ' active' : '';
                                return _react2.default.createElement(
                                    'button',
                                    { key: gameVersion.version, 'data-version': gameVersion.version,
                                        className: className, onClick: this.changeGameVersion.bind(this) },
                                    gameVersion.version
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', onClick: this.updateGameVersions.bind(this) },
                        _react2.default.createElement('i', { className: 'fa fa-lg fa-fw fa-refresh' })
                    )
                )
            )
        );
    }
}) || _class) || _class);
exports.default = ProfileEditPanel;
//# sourceMappingURL=ProfileEditPanel.js.map
