import React from 'react';
import {ipcRenderer} from 'electron';
import {inject} from 'mobx-react';
import http from 'http';
import url from 'url';
import google from 'googleapis';

@inject('config') @inject('state')
class GoogleOAuth extends React.Component {

    componentDidMount(){
        this.props.state.displayMenu = false;
        let port = Math.floor(Math.random() * (65535-49152)+49152);

        let OAuthClient = new google.auth.OAuth2(
            this.props.config.GoogleClientId,
            this.props.config.GoogleClientSecret,
            "http://127.0.0.1:"+port
        );

        let gurl = OAuthClient.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/drive.file',
        });
        ipcRenderer.send('openOAuthPanel',gurl);

        let server = http.createServer();
        server.listen(port);

        let onRequest = (request,response)=>{
            response.end('<html><head><script>window.close();</script></head></html>');
            server.close();

            let queryData = url.parse(request.url, true);
            if(queryData.query.error){
                window.logger.error(queryData.query.error);
                this.pageBack();
            }else {
                let code = queryData.query.code;

                OAuthClient.getToken(code,(err, tokens) =>{
                    if(err){
                        window.logger.error(err);
                        this.props.state.error = 'oAuthError';
                        this.pageBack();
                    }else{
                        this.props.config.GoogleAccessToken = tokens.access_token;
                        this.props.config.GoogleRefreshToken = tokens.refresh_token;
                        this.props.config.GoogleTokenValidTill = tokens.expiry_date;
                        this.pageBack();
                    }
                })
            }
        };

        server.on('request',onRequest);
    }

    pageBack(){
        this.props.state.displayMenu = true;
        let prevPage = this.props.state.prevPage;
        this.props.state.prevPage = '';
        this.props.state.page = prevPage;
    }

    render(){
        return <div className="row">
            <div className="col">
                <h1 className="text-center">Waiting for Google Login</h1>
            </div>
        </div>
    }
}

export default GoogleOAuth