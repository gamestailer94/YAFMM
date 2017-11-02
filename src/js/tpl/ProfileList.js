import React from 'react';
import {inject, observer} from 'mobx-react'

@inject('config') @observer
class ProfileList extends React.Component {
    handleClick(id,e){
        let target = $(e.target);
        if(target.data('remove')){
            this.removeProfile(id);
        }else{
            this.props.config.lastProfileId = id;
        }
    }

    removeProfile(id){
        this.props.config.removeProfile(id);
    }

    getTrash(id){
        if(this.props.config.lastProfileId !== id) {
            return <div className="float-right">
                <i data-remove={true} className="fa fa-trash-o fa-fw text-danger"/>
            </div>
        }
    }

    render(){
        return <ul className="list-group">
            {this.props.config.profiles.map(profile => {
                let className = 'list-group-item list.group-item-action';
                className += this.props.config.lastProfileId === profile.id?' list-group-item-secondary':'';
                return <li key={profile.id} className={className} onClick={this.handleClick.bind(this,profile.id)}>
                    {profile.name}
                    {this.getTrash(profile.id)}
                </li>
            })}
        </ul>
    }
}

export default ProfileList