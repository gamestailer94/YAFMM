'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _mobxReact = require('mobx-react');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _dropbox = require('dropbox');

var _dropbox2 = _interopRequireDefault(_dropbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DropboxOAuth = (_dec = (0, _mobxReact.inject)('config'), _dec2 = (0, _mobxReact.inject)('state'), _dec(_class = _dec2(_class = class DropboxOAuth extends _react2.default.Component {

    componentDidMount() {
        this.props.state.displayMenu = false;
        let port = 8088;

        let dropbox = new _dropbox2.default({ clientId: this.props.config.DropboxClientId });
        let durl = dropbox.getAuthenticationUrl('http://localhost:' + port);
        _electron.ipcRenderer.send('openOAuthPanel', durl);

        let server = _http2.default.createServer();
        server.listen(port);

        let onRequest = (request, response) => {
            if (request.url === '/') {
                response.end('<html><head><script type="application/javascript">' + 'window.location = "http://"+window.location.host+"/"+window.location.hash.replace("#","?")' + '</script></head></html>');
            } else {
                response.end('<html><head><script>window.close();</script></head></html>');
                server.close();

                let queryData = _url2.default.parse(request.url, true);
                if (queryData.query.error) {
                    window.logger.error(queryData.query.error);
                    this.pageBack();
                } else {
                    this.props.config.DropboxAccessToken = queryData.query.access_token;
                    this.pageBack();
                }
            }
        };

        server.on('request', onRequest);
    }

    pageBack() {
        this.props.state.displayMenu = true;
        let prevPage = this.props.state.prevPage;
        this.props.state.prevPage = '';
        this.props.state.page = prevPage;
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                    'h1',
                    { className: 'text-center' },
                    'Waiting for Dropbox Login'
                )
            )
        );
    }
}) || _class) || _class);
exports.default = DropboxOAuth;
//# sourceMappingURL=DropboxOAuth.js.map
