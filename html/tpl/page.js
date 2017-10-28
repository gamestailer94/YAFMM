'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _ModList = require('./ModList');

var _ModList2 = _interopRequireDefault(_ModList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Page extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.closeConfig = this.closeConfig.bind(this);
        this.state = {
            page: 'main'
        };
    }

    handleClick(buttonEl) {
        if (buttonEl.props.id === 'add') {
            this.setState({ page: 'config' });
        }
        buttonEl.setState({ working: !buttonEl.state.working });
    }

    closeConfig() {
        this.setState({ page: 'main' });
    }

    render() {
        let header, content;
        if (this.state.page === 'main') {
            header = _react2.default.createElement(_menu2.default, { buttons: this.buttonList, click: this.handleClick });
            content = _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_ModList2.default, null)
            );
        } else {
            header = _react2.default.createElement(
                'div',
                { className: 'bg-dark w-100' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row py-1' },
                        _react2.default.createElement(_button2.default, { type: 'secondary', icon: 'arrow-left', click: this.closeConfig })
                    )
                )
            );
        }
        return _react2.default.createElement(
            'div',
            null,
            header,
            content
        );
    }
}
exports.default = Page;
//# sourceMappingURL=page.js.map
