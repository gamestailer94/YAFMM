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

var _googleapis = require('googleapis');

var _googleapis2 = _interopRequireDefault(_googleapis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let GoogleOAuth = (_dec = (0, _mobxReact.inject)('config'), _dec2 = (0, _mobxReact.inject)('state'), _dec(_class = _dec2(_class = class GoogleOAuth extends _react2.default.Component {

    componentDidMount() {
        this.props.state.displayMenu = false;
        let port = Math.floor(Math.random() * (65535 - 49152) + 49152);

        let OAuthClient = new _googleapis2.default.auth.OAuth2(this.props.config.GoogleClientId, this.props.config.GoogleClientSecret, "http://127.0.0.1:" + port);

        let gurl = OAuthClient.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/drive.file'
        });
        _electron.ipcRenderer.send('openOAuthPanel', gurl);

        let server = _http2.default.createServer();
        server.listen(port);

        let onRequest = (request, response) => {
            response.end('<html><head><script>window.close();</script></head></html>');
            server.close();

            let queryData = _url2.default.parse(request.url, true);
            if (queryData.query.error) {
                window.logger.error(queryData.query.error);
                this.pageBack();
            } else {
                let code = queryData.query.code;

                OAuthClient.getToken(code, (err, tokens) => {
                    if (err) {
                        window.logger.error(err);
                        this.props.state.error = 'oAuthError';
                        this.pageBack();
                    } else {
                        this.props.config.GoogleAccessToken = tokens.access_token;
                        this.props.config.GoogleRefreshToken = tokens.refresh_token;
                        this.props.config.GoogleTokenValidTill = tokens.expiry_date;
                        this.pageBack();
                    }
                });
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
                    'Waiting for Google Login'
                )
            )
        );
    }
}) || _class) || _class);
exports.default = GoogleOAuth;
//# sourceMappingURL=GoogleOAuth.js.map
