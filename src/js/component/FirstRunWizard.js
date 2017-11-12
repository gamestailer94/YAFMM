import React from 'react';
import {inject, observer} from 'mobx-react';
import Fa from "./Fa";

@inject('config') @inject('state') @observer
class FirstRunWizard extends React.Component {

    constructor(props){
        super(props);
        this.onContinue = this.onContinue.bind(this);
    }

    componentDidMount(){
        this.props.state.displayMenu = false;
        if(this.props.config.firstRun){
            this.props.state.page = 'firstRun';
            this.props.config.firstRun = false;
        }
    }

    onContinue(){
        if(this.props.config.factorioUsername === ''){
            this.props.state.prevPage = 'firstRun';
            this.props.state.page = 'factorioLogin';
        }else{
            this.props.state.displayMenu = true;
            this.props.state.prevPage = '';
            this.props.state.page = 'main';
        }
    }

    makeGoogleAuth(){
        this.props.state.prevPage = 'firstRun';
        this.props.state.page = 'googleOAuth';
    }

    removeGoogleOAuth(){
        this.props.config.GoogleAccessToken = '';
        this.props.config.GoogleRefreshToken = '';
        this.props.config.GoogleTokenValidTill = '';
    }

    makeDropBoxAuth(){
        this.props.state.prevPage = 'firstRun';
        this.props.state.page = 'dropboxOAuth';
    }

    removeDropboxOAuth(){
        this.props.config.DropboxAccessToken = '';
    }

    googleButton(){
        if(this.props.config.GoogleRefreshToken === ''){
            return <button className="btn btn-block btn-outline-primary" onClick={this.makeGoogleAuth.bind(this)}><Fa icon="google"/>Connect Google</button>
        }
        return <button className="btn btn-block btn-outline-danger" onClick={this.removeGoogleOAuth.bind(this)}><Fa icon="google"/>Disconnect Google</button>
    }

    dropboxButton(){
        if(this.props.config.DropboxAccessToken === ''){
            return <button className="btn btn-block btn-outline-primary" onClick={this.makeDropBoxAuth.bind(this)}><Fa icon="dropbox" />Connect Dropbox</button>
        }
        return <button className="btn btn-block btn-outline-danger" onClick={this.removeDropboxOAuth.bind(this)}><Fa icon="dropbox" />Disconnect Dropbox</button>
    }

    render(){
        if(this.props.config.factorioUsername === ''){
            return <div className="row">
                    <div className="col-6 m-auto">
                        <h1 className="text-center">Hello</h1>
                        <h4 className="text-center">To use YAFMM you need to enter your Factorio login Data.</h4>
                        <button className="mt-2 btn btn-outline-success btn-block" onClick={this.onContinue}>Continue</button>
                    </div>
                </div>
        }else {
            return <div>
                <div className="row">
                    <div className="col-6 m-auto">
                        <h1 className="text-center">You can now enable cloud support.</h1>
                        <h4 className="text-center">If you have used YAFMM before it will automatically download your profiles.</h4>
                        <span className="text-muted">You can always change this in the config menu.</span><br/>
                        <span className="text-muted">This step is optional.</span>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-6 m-auto ">
                        {this.googleButton()}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 m-auto">
                        {this.dropboxButton()}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6 m-auto">
                        <button className="btn btn-block btn-outline-success" onClick={this.onContinue}>Continue</button>
                    </div>
                </div>
            </div>
        }
    }
}

export default FirstRunWizard
