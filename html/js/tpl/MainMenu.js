'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button.js');

var _Button2 = _interopRequireDefault(_Button);

var _Mod = require('../model/Mod');

var _Mod2 = _interopRequireDefault(_Mod);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MainMenu = (_dec = (0, _mobxReact.inject)('profiles'), _dec2 = (0, _mobxReact.inject)('config'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = class MainMenu extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(target) {
        switch (target.props.id) {
            case 'add':
                let mod = new _Mod2.default();
                mod.loadDetails('test');
                this.props.profiles.activeProfile.addMod(mod);
                break;
            case 'editProfile':
                this.props.config.page = 'editProfile';
                break;
            case 'config':
                this.props.config.page = 'config';
                break;
            default:
                break;
        }
    }

    changeProfile(e) {
        this.props.profiles.lastProfileId = parseInt(e.target.value);
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'row my-1' },
            _react2.default.createElement(
                'div',
                { className: 'col-5' },
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_Button2.default, { type: 'primary', tooltip: 'Add', icon: 'plus', id: 'add', click: this.handleClick }),
                    _react2.default.createElement(_Button2.default, { type: 'outline-success', tooltip: 'Update', icon: 'arrow-up', id: 'update', click: this.handleClick }),
                    _react2.default.createElement(_Button2.default, { type: 'outline-success', tooltip: 'Upload to Cloud', icon: 'cloud-upload', id: 'upload', click: this.handleClick }),
                    _react2.default.createElement(_Button2.default, { type: 'outline-success', tooltip: 'Download from Cloud', icon: 'cloud-download', id: 'upload', click: this.handleClick })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_Button2.default, { type: 'secondary', tooltip: 'Config', icon: 'wrench', id: 'config', click: this.handleClick })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 btn-group' },
                    _react2.default.createElement(_Button2.default, { type: 'success', tooltip: 'Start Game', icon: 'play', id: 'start', click: this.handleClick })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default', disabled: true },
                        'Game Version: ',
                        this.props.profiles.activeProfile.gameVersion
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-4' },
                _react2.default.createElement(
                    'div',
                    { className: 'mr-1 input-group' },
                    _react2.default.createElement(
                        'select',
                        { className: 'form-control', value: this.props.profiles.lastProfileId, onChange: this.changeProfile.bind(this) },
                        this.props.profiles.profiles.map(profile => {
                            return _react2.default.createElement(
                                'option',
                                { key: profile.id, value: profile.id },
                                profile.name
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'input-group-btn' },
                        _react2.default.createElement(_Button2.default, { type: 'default', tooltip: 'Edit Profile', icon: 'cog', id: 'editProfile', click: this.handleClick })
                    )
                )
            )
        );
    }
}) || _class) || _class) || _class);
exports.default = MainMenu;
//# sourceMappingURL=MainMenu.js.map
