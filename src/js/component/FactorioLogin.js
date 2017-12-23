import React from "react";
import {inject, observer} from 'mobx-react'
import FactorioLoginController from '../controller/FactorioLoginController';

@inject('config') @inject('state') @observer
class FactorioLogin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'username': this.props.config.factorioUsername,
            'password': this.props.config.factorioPassword,
            'savePw': this.props.config.factorioSavePw,
            'saveDisabled': false,
            'errorText': ''
        }
    }

    componentDidMount(){
        $('div.content [data-toggle="tooltip"]').tooltip()
    }
    componentWillUnmount(){
        $('div.content[data-toggle="tooltip"]').tooltip('dispose')
    }

    changeUsername(e){
        this.setState({'username': e.target.value});
    }

    changePassword(e){
        this.setState({'password': e.target.value});
    }

    changeSavePw(e){
        this.setState({'savePw': e.target.checked})
    }

    onSave(e){
        e.preventDefault();
        this.setState({saveDisabled: true});
        this.props.config.factorioUsername = this.state.username;
        this.props.config.factorioSavePw = this.state.savePw;
        if(this.state.savePw) {
            this.props.config.factorioPassword = this.state.password;
        }else{
            this.props.config.factorioPassword = '';
            this.props.state.factorioPassword = this.state.password;
        }
        let loginController = new FactorioLoginController();
        loginController.getAuthToken(this.state.username, this.state.password).then((token)=> {
            this.props.config.factorioAuthToken = token;
            let prevPage = this.props.state.prevPage;
            this.props.state.prevPage = '';
            this.props.state.page = prevPage;
        }).catch((error)=>{
            if(error.message === 'Unauthorized'){
                this.setState({
                    errorText: 'Username and password don\'t match.'
                })
            }else{
                this.setState({
                    errorText: 'Something went wrong, please check your internet connection.'
                })
            }
            this.setState({saveDisabled: false});
        })
    }

    render(){
        return <div>
            <div className="row">
                <div className="col-6 m-auto">
                    <h4 className="text-center">To download Mods and update Factorio to the latest version
                        YAFMM needs your Login Data for Factorio</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6 m-auto">
                    <p className="text-danger text-center">{this.state.errorText}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 m-auto">
                    <form onSubmit={this.onSave.bind(this)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" value={this.state.username} onChange={this.changeUsername.bind(this)} placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" value={this.state.password} onChange={this.changePassword.bind(this)} placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <label className="custom-checkbox custom-control">
                                <input type="checkbox" className="custom-control-input" onChange={this.changeSavePw.bind(this)}
                                       checked={this.state.savePw} />
                                <span className="custom-control-indicator" />
                                <span className="custom-control-description">Save Password
                                    <i className="fa fa-lg fa-fw fa-question-circle-o" data-toggle="tooltip" data-placement="right"
                                       title="Your Password will only be stored locally"/></span>
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary" disabled={this.state.saveDisabled} >Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default FactorioLogin;