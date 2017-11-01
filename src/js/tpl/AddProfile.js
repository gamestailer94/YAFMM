import React from 'react';
import {inject} from 'mobx-react'
import Profile from '../model/Profile'

@inject('profiles')
class AddProfile extends React.Component {
    addProfile(){
        let nextProfileId = this.props.profiles.nextProfileId;
        let profile = new Profile();
        profile.id = nextProfileId;
        profile.name = 'new Profile';
        this.props.profiles.addProfile(profile);
    }

    render(){
        return <button className="btn btn-success btn-block mb-1" onClick={this.addProfile.bind(this)}>
            <i className="fa fa-plus fa-lg fa-fw"/>
        </button>
    }

}

export default AddProfile