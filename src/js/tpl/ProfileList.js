import React from 'react';
import {inject, observer} from 'mobx-react'

@inject('profiles') @observer
class ProfileList extends React.Component {
    handleClick(id,e){
        let target = $(e.target);
        if(target.data('remove')){
            this.removeProfile(id);
        }else{
            this.props.profiles.lastProfileId = id;
        }
    }

    removeProfile(id){
        this.props.profiles.removeProfile(id);
    }

    getTrash(id){
        if(this.props.profiles.lastProfileId !== id) {
            return <div className="float-right">
                <i data-remove={true} className="fa fa-trash-o fa-fw text-danger"/>
            </div>
        }
    }

    render(){
        return <ul className="list-group">
            {this.props.profiles.profiles.map(profile => {
                let className = 'list-group-item list.group-item-action';
                className += this.props.profiles.lastProfileId === profile.id?' list-group-item-secondary':'';
                return <li key={profile.id} className={className} onClick={this.handleClick.bind(this,profile.id)}>
                    {profile.name}
                    {this.getTrash(profile.id)}
                </li>
            })}
        </ul>
    }
}

export default ProfileList