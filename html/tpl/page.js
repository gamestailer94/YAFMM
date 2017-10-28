'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('./menu.js');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Page extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            page: 'main'
        };
        this.buttonList = {
            'group1': {
                'add': {
                    'id': "add",
                    'group': 'group1',
                    'working': false,
                    'type': 'primary',
                    'tooltip': 'Add',
                    'icon': 'plus',
                    'click': this.handleClick
                },
                'update': {
                    'id': "update",
                    'group': 'group1',
                    'working': false,
                    'type': 'outline-success',
                    'tooltip': 'Update',
                    'icon': 'download',
                    'click': this.handleClick
                },
                'upload': {
                    'id': "upload",
                    'group': 'group1',
                    'working': false,
                    'type': 'outline-success',
                    'tooltip': 'Upload Modlist',
                    'icon': 'cloud-upload',
                    'click': this.handleClick
                }
            },
            'group2': {
                'config': {
                    'id': "config",
                    'group': 'group2',
                    'working': false,
                    'type': 'secondary',
                    'tooltip': 'config',
                    'icon': 'wrench',
                    'click': this.handleClick
                }
            },
            'group3': {
                'play': {
                    'id': "start",
                    'group': 'group3',
                    'working': false,
                    'type': 'success',
                    'tooltip': 'start game',
                    'icon': 'play',
                    'click': this.handleClick
                }
            }
        };
    }

    handleClick(buttonEl) {
        if (buttonEl.props.id === 'config') {
            $('');
            this.setState({ page: 'config' });
        }
        buttonEl.setState({ working: !buttonEl.state.working });
    }

    render() {
        let page;
        if (this.state.page === 'main') {
            page = _react2.default.createElement(_menu2.default, { buttons: this.buttonList });
        } else {
            page = _react2.default.createElement('div', { className: 'bg-primary h-100 w-100' });
        }
        return _react2.default.createElement(
            'div',
            null,
            page
        );
    }
}
exports.default = Page;
//# sourceMappingURL=page.js.map
