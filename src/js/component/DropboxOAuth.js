import React from 'react';
import {ipcRenderer} from 'electron';
import {inject} from 'mobx-react';
import http from 'http';
import url from 'url';
import Dropbox from 'dropbox';

@inject('config') @inject('state')
class DropboxOAuth extends React.Component {

    componentDidMount(){
        this.props.state.displayMenu = false;
        let port = 8088;

        let dropbox = new Dropbox({clientId: this.props.config.DropboxClientId});
        let durl = dropbox.getAuthenticationUrl('http://localhost:'+port);
        ipcRenderer.send('openOAuthPanel',durl);

        let server = http.createServer();
        server.listen(port);

        let onRequest = (request,response)=>{
            if(request.url === '/') {
                response.end('<html><head><script type="application/javascript">' +
                    'window.location = "http://"+window.location.host+"/"+window.location.hash.replace("#","?")' +
                    '</script></head></html>');
            }else {
                response.end('<html><head><script>window.close();</script></head></html>');
                server.close();

                let queryData = url.parse(request.url, true);
                if (queryData.query.error) {
                    window.logger.error(queryData.query.error);
                    this.pageBack();
                } else {
                    this.props.config.DropboxAccessToken = queryData.query.access_token;
                    this.pageBack();
                }
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
                <h1 className="text-center">Waiting for Dropbox Login</h1>
            </div>
        </div>
    }
}

export default DropboxOAuth