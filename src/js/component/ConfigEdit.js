import React from 'react';
import {inject, observer} from 'mobx-react';
import {remote} from 'electron';
import Fa from "./Fa";

@inject('config') @inject('state') @observer
class ConfigEdit extends React.Component {
    openFactorioLogin(){
        this.props.state.prevPage = 'config';
        this.props.state.page='factorioLogin';
    }

    makeGoogleOAuth(){
        this.props.state.prevPage = 'config';
        this.props.state.page='googleOAuth'
    }

    removeGoogleOAuth(){
        this.props.config.GoogleAccessToken = '';
        this.props.config.GoogleRefreshToken = '';
        this.props.config.GoogleTokenValidTill = '';
    }

    googleState(){
        return this.props.config.GoogleRefreshToken !== '';
    }

    getGoogleBtn(){
        if(this.googleState()){
            return <button className="btn btn-outline-danger" onClick={this.removeGoogleOAuth.bind(this)}><Fa icon='google' />Disconnect</button>
        }
        return <button className="btn btn-outline-primary" onClick={this.makeGoogleOAuth.bind(this)}><Fa icon='google' />Connect</button>
    }

    render() {
        return <div className="row">
            <div className="col">
                <div className="row mb-2">
                    <div className="col">
                        <span>G-Drive: {this.googleState()?"Connected":"Not Connected"}</span>
                    </div>
                    <div className="col">
                        {this.getGoogleBtn()}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <span>Dropbox: not Connected</span>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary"><Fa icon="dropbox"/>Connect</button>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <span>Factorio Account: {this.props.config.factorioUsername}</span>
                    </div>
                    <div className="col">
                        <button className="btn btn-success" onClick={this.openFactorioLogin.bind(this)}>Change Login Data</button>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        YAFMM Version:
                    </div>
                    <div className="col">
                        {remote.app.getVersion()}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ConfigEdit