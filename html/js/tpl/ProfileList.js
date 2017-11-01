'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProfileList = (_dec = (0, _mobxReact.inject)('profiles'), _dec(_class = (0, _mobxReact.observer)(_class = class ProfileList extends _react2.default.Component {
    handleClick(id, e) {
        let target = $(e.target);
        if (target.data('remove')) {
            this.removeProfile(id);
        } else {
            this.props.profiles.lastProfileId = id;
        }
    }

    removeProfile(id) {
        this.props.profiles.removeProfile(id);
    }

    getTrash(id) {
        if (this.props.profiles.lastProfileId !== id) {
            return _react2.default.createElement(
                'div',
                { className: 'float-right' },
                _react2.default.createElement('i', { 'data-remove': true, className: 'fa fa-trash-o fa-fw text-danger' })
            );
        }
    }

    render() {
        return _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            this.props.profiles.profiles.map(profile => {
                let className = 'list-group-item list.group-item-action';
                className += this.props.profiles.lastProfileId === profile.id ? ' list-group-item-secondary' : '';
                return _react2.default.createElement(
                    'li',
                    { key: profile.id, className: className, onClick: this.handleClick.bind(this, profile.id) },
                    profile.name,
                    this.getTrash(profile.id)
                );
            })
        );
    }
}) || _class) || _class);
exports.default = ProfileList;
//# sourceMappingURL=ProfileList.js.map
