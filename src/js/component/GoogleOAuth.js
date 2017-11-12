import React from 'react';
import {ipcRenderer} from 'electron';
import {inject} from 'mobx-react';
import http from 'http';
import url from 'url';
import google from 'googleapis';

@inject('config') @inject('state')
class GoogleOAuth extends React.Component {

    constructor(props){
        super(props);
        this.state = {status: 'waiting'};
    }

    componentDidMount(){
        this.props.state.dislpayMenu = false;
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

            let queryData = url.parse(request.url, true);
            server.close();
            if(queryData.query.error){
                window.logger.error('OAuth Failed');
                this.setState({'status': 'failed'});
            }else {
                let code = queryData.query.code;

                OAuthClient.getToken(code,(err, tokens) =>{
                    if(err){
                        window.logger.error(err);
                    }else{
                        console.log(tokens);
                        this.props.config.GoogleAccessToken = tokens.access_token;
                        this.props.config.GoogleRefreshToken = tokens.refresh_token;
                        this.props.config.GoogleTokenValidTill = tokens.expiry_date;
                    }
                })
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