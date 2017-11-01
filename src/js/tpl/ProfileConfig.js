import React from 'react'
import {inject, observer} from 'mobx-react'
import ProfileList from './ProfileList'
import AddProfile from './AddProfile'

@inject('profiles') @observer
class ProfileConfig extends React.Component {
    changeProfileName(e){
        this.props.profiles.activeProfile.name = e.target.value;
    }

    render(){
        return <div className="row mt-1">
            <div className="col-6">
                <AddProfile />
                <ProfileList />
            </div>
            <div className="col-6">
                <div className="alert alert-secondary">
                    <div className="form-group">
                        <label>Profile Name:</label>
                        <input type="text" className="form-control" value={this.props.profiles.activeProfile.name} onChange={this.changeProfileName.bind(this)}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ProfileConfig