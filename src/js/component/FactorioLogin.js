import React from "react";
import {inject, observer} from 'mobx-react'

@inject('config') @observer
class FactorioLogin extends React.Component {

    componentDidMount(){
        $('div.content [data-toggle="tooltip"]').tooltip()
    }
    componentWillUnmount(){
        $('div.content[data-toggle="tooltip"]').tooltip('dispose')
    }


    render(){
        return <div>
            <div className="row">
                <div className="col text-center">
                    <h4>To download Mods and update Factorio to the latest version</h4>
                    <h4>this App needs your Login Data for Factorio</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6 m-auto">
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" value={this.props.config.factorioUsername} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <label className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">Save Password
                                <i className="fa fa-lg fa-fw fa-question-circle-o" data-toggle="tooltip" data-placement="right"
                                   title="Your Password will be Encrypted"/></span>
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default FactorioLogin;