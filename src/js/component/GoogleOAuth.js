import React from 'react';
import {ipcRenderer} from 'electron';
import {inject} from 'mobx-react';
import http from 'http';
import url from 'url';
import fetch from 'fetch';
import querystring from 'querystring';

@inject('config')
class GoogleOAuth extends React.Component {

    constructor(props){
        super(props);
        this.state = {status: 'waiting'};
    }

    componentDidMount(){
        let port = Math.floor(Math.random() * (65535-49152)+49152);
        let gurl = "https://accounts.google.com/o/oauth2/v2/auth?client_id="+this.props.config.GoogleClientId;
        gurl += "&response_type=code";
        gurl += "&scope="+encodeURIComponent('https://www.googleapis.com/auth/drive.file');
        gurl += "&redirect_uri=http://127.0.0.1:"+port;
        ipcRenderer.send('openOAuthPanel',gurl);

        let server = http.createServer();
        server.listen(port);

        let onRequest = (request,response)=>{
            response.end('<html><head><script>window.close();</script></head></html>');

            let queryData = url.parse(request.url, true);
            server.close();
            if(queryData.query.error){
                window.logger.error('OAuth Failed');
                this.setState({'status': 'failed'});
            }else {
                let code = queryData.query.code;

                gurl = 'https://www.googleapis.com/oauth2/v4/token';

                let body = {
                    code: code,
                    client_id: this.props.config.GoogleClientId,
                    client_secret: this.props.config.GoogleClientSecret,
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost'
                };

                console.log(querystring.stringify(body));
                fetch.fetchUrl(gurl, {payload: querystring.stringify(body)}, (error, meta, body) => {
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

        server.on('request',onRequest);
    }

    failedAuth(){
        return <h1 className="text-center">Google Auth Failed, please try again.</h1>
    }

    waitingForAuth(){
        return <h1 className="text-center">Please Complete Google Login</h1>
    }

    getContent(){
        if(this.state.status === 'waiting'){
            return this.waitingForAuth();
        }
        return this.failedAuth();
    }

    render(){
        return <div className="row">
            <div className="col">
                {this.getContent()}
            </div>
        </div>
    }
}

export default GoogleOAuth