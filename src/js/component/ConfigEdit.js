import React from 'react';
import {inject, observer} from 'mobx-react';
import {remote} from 'electron';
import Fa from "./Fa";

@inject('config') @inject('state') @observer
class ConfigEdit extends React.Component {
    openFactorioLogin(){
        this.props.state.page='factorioLogin';
    }

    render() {
        return <div className="row">
            <div className="col">
                <div className="row mb-1">
                    <div className="col">
                        <span>G-Drive: not Connected</span>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary"><Fa icon='google' />Connect</button>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col">
                        <span>Dropbox: not Connected</span>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary"><Fa icon="dropbox"/>Connect</button>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col">
                        <span>Factorio Account: {this.props.config.factorioUsername}</span>
                        <span>Username: </span>
                    </div>
                    <div className="col">
                        <button className="btn btn-success" onClick={this.openFactorioLogin.bind(this)}>Change Login Data</button>
                    </div>
                </div>
                YAFMM Version: {remote.app.getVersion()}
            </div>
        </div>
    }
}

export default ConfigEdit