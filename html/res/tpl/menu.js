'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Menu extends _react2.default.Component {

    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    render() {
        return _react2.default.createElement(
            'menu',
            { className: 'position-fixed w-100 bg-dark mt-0 h-5-r' },
            _react2.default.createElement(
                'div',
                { className: 'row mt-3' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-1' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-success', 'data-toggle': 'tooltip', 'data-placement': 'bottom', title: 'Start' },
                        _react2.default.createElement('i', { className: 'fa fa-play fa-lg' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-1' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', 'data-toggle': 'tooltip', 'data-placement': 'bottom', title: 'Start' },
                        _react2.default.createElement('i', { className: 'fa fa-wrench fa-lg' })
                    )
                )
            )
        );
    }
}
exports.default = Menu;
//# sourceMappingURL=menu.js.map
