'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _mobxReact = require('mobx-react');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _fetch = require('fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let GoogleOAuth = (_dec = (0, _mobxReact.inject)('config'), _dec(_class = class GoogleOAuth extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = { status: 'waiting' };
    }

    componentDidMount() {
        let port = Math.floor(Math.random() * (65535 - 49152) + 49152);
        let gurl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + this.props.config.GoogleClientId;
        gurl += "&response_type=code";
        gurl += "&scope=" + encodeURIComponent('https://www.googleapis.com/auth/drive.file');
        gurl += "&redirect_uri=http://127.0.0.1:" + port;
        _electron.ipcRenderer.send('openOAuthPanel', gurl);

        let server = _http2.default.createServer();
        server.listen(port);

        let onRequest = (request, response) => {
            response.end('<html><head><script>window.close();</script></head></html>');

            let queryData = _url2.default.parse(request.url, true);
            server.close();
            if (queryData.query.error) {
                window.logger.error('OAuth Failed');
                this.setState({ 'status': 'failed' });
            } else {
                let code = queryData.query.code;

                gurl = 'https://www.googleapis.com/oauth2/v4/token';

                let body = {
                    code: code,
                    client_id: this.props.config.GoogleClientId,
                    client_secret: this.props.config.GoogleClientSecret,
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost'
                };

                console.log(_querystring2.default.stringify(body));
                _fetch2.default.fetchUrl(gurl, { payload: _querystring2.default.stringify(body) }, (error, meta, body) => {
                    console.log(meta);
                    console.log(body.toString());
                    let result = JSON.parse(body.toString());
                    this.props.config.GoogleAccessToken = result.access_token;
                    this.props.config.GoogleRefreshToken = refresh_token;
                    this.props.config.GoogleTokenValidTill = Date.now() + result.expires_in;
                    console.log(result);
                });
            }
        };

        server.on('request', onRequest);
    }

    failedAuth() {
        return _react2.default.createElement(
            'h1',
            { className: 'text-center' },
            'Google Auth Failed, please try again.'
        );
    }

    waitingForAuth() {
        return _react2.default.createElement(
            'h1',
            { className: 'text-center' },
            'Please Complete Google Login'
        );
    }

    getContent() {
        if (this.state.status === 'waiting') {
            return this.waitingForAuth();
        }
        return this.failedAuth();
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'div',
                { className: 'col' },
                this.getContent()
            )
        );
    }
}) || _class);
exports.default = GoogleOAuth;
//# sourceMappingURL=GoogleOAuth.js.map
