import React from 'react'
import { inject, observer} from 'mobx-react'

@inject('config') @observer
class ProfileEditPanel extends React.Component {
    changeProfileName(e){
        this.props.config.activeProfile.name = e.target.value;
    }


    render(){
        return <div className="alert alert-secondary">
            <div className="mt-1">
                <div className="form-inline">
                    <label className="mr-1">Profile Name:</label>
                    <input type="text" className="form-control" value={this.props.config.activeProfile.name}
                           onChange={this.changeProfileName.bind(this)}/>
                </div>
            </div>
            <div className="mt-1">
                <label className="mr-1">Game Version:</label>
                <div className="btn-group">
                    <div className="btn-group">
                        <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">1.0.0</button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item">2.0.0</button>
                            <button className="dropdown-item">3.0.0</button>
                        </div>
                    </div>
                    <button className="btn btn-success"><i className="fa fa-lg fa-fw fa-refresh" /></button>
                </div>
            </div>
        </div>
    }
}

export default ProfileEditPanel