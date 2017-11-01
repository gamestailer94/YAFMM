'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _ModList = require('./ModList');

var _ModList2 = _interopRequireDefault(_ModList);

var _Mod = require('../model/Mod');

var _Mod2 = _interopRequireDefault(_Mod);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Page = (_dec = (0, _mobxReact.inject)(['profile']), _dec(_class = class Page extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resetPage = this.resetPage.bind(this);
        this.state = { page: 'main' };
    }

    handleClick(buttonEl) {
        switch (buttonEl.props.id) {
            case 'config':
                this.setState({ page: 'config' });
                break;
            case 'add':
                let mod = new _Mod2.default();
                mod.loadDetails('test');
                this.props.profile.addMod(mod);
                break;
            default:
                buttonEl.setState({ working: !buttonEl.state.working });
                break;
        }
    }

    resetPage() {
        this.setState({ page: 'main' });
    }

    backButton() {
        return _react2.default.createElement(_button2.default, { type: 'secondary', icon: 'arrow-left', click: this.resetPage });
    }

    render() {
        let header, content;
        if (this.state.page === 'main') {
            header = _react2.default.createElement(_menu2.default, { click: this.handleClick });
            content = _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_ModList2.default, { click: this.handleClick })
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
                        this.backButton()
                    )
                )
            );
        }
        return _react2.default.createElement(
            'div',
            null,
            header,
            _react2.default.createElement(
                'div',
                { className: 'content' },
                content
            )
        );
    }

}) || _class);
exports.default = Page;
//# sourceMappingURL=page.js.map
