'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ImportFromProfile = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = (0, _mobxReact.observer)(_class = class ImportFromProfile extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.importMods = this.importMods.bind(this);
        this.importSaves = this.importSaves.bind(this);
        this.updateFromProfile = this.updateFromProfile.bind(this);
        this.state = { fromProfile: 0 };
    }

    importMods() {
        let id = this.props.config.profiles[this.state.fromProfile].id;
        this.props.config.importModFromProfile(id);
    }

    importSaves() {}

    updateFromProfile(e) {
        let index = $(e.target).data('index');
        this.setState({ fromProfile: index });
    }

    render() {
        let importDisabled = this.props.config.profiles[this.state.fromProfile].id === this.props.config.activeProfile.id;
        return _react2.default.createElement(
            'div',
            { className: 'mt-1' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    'Import from: '
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'btn btn-default dropdown-toggle', 'data-toggle': 'dropdown' },
                    this.props.config.profiles[this.state.fromProfile].name
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dropdown-menu' },
                    this.props.config.profiles.map((profile, index) => {
                        return _react2.default.createElement(
                            'button',
                            { key: profile.id, 'data-index': index, onClick: this.updateFromProfile,
                                className: 'dropdown-item' },
                            profile.name
                        );
                    })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'btn-group mt-1' },
                _react2.default.createElement(
                    'button',
                    { className: 'btn btn-outline-primary', disabled: importDisabled, onClick: this.importMods },
                    'Import Mods'
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'btn btn-outline-secondary', disabled: importDisabled, onClick: this.importSaves },
                    'Import Saves'
                )
            )
        );
    }
}) || _class) || _class);
exports.default = ImportFromProfile;
//# sourceMappingURL=ImportFromProfile.js.map
