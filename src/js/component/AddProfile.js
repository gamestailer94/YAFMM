import React from 'react';
import {inject} from 'mobx-react'
import Profile from '../model/Profile'
import Fa from "./Fa";

@inject('config')
class AddProfile extends React.Component {
    addProfile(){
        let nextProfileId = this.props.config.nextProfileId;
        let profile = new Profile();
        profile.id = nextProfileId;
        profile.name = 'new Profile';
        this.props.config.addProfile(profile);
    }

    render(){
        return <button className="btn btn-success btn-block mb-1" onClick={this.addProfile.bind(this)}>
            <Fa icon='plus'/>
        </button>
    }

}

export default AddProfile