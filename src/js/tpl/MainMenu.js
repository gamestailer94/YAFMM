import React from 'react'
import Button from './Button.js'
import Mod from '../model/Mod'
import { inject, observer } from 'mobx-react'

@inject('profiles') @inject('config') @observer
class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(target){
        switch(target.props.id){
            case 'add':
                let mod = new Mod();
                mod.loadDetails('test');
                this.props.profiles.activeProfile.addMod(mod);
                break;
            case 'editProfile':
                this.props.config.page = 'editProfile';
                break;
            case 'config':
                this.props.config.page = 'config';
                break;
            default:
                break;
        }
    }

    changeProfile(e){
        this.props.profiles.lastProfileId = parseInt(e.target.value);
    }

    render(){
        return <div className="row my-1">
            <div className="col-5">
                <div className="mr-1 btn-group">
                    <Button type='primary' tooltip="Add" icon="plus" id="add" click={this.handleClick}/>
                    <Button type='outline-success' tooltip="Update" icon="arrow-up" id="update" click={this.handleClick}/>
                    <Button type='outline-success' tooltip="Upload to Cloud" icon="cloud-upload" id="upload" click={this.handleClick}/>
                    <Button type='outline-success' tooltip="Download from Cloud" icon="cloud-download" id="upload" click={this.handleClick}/>
                </div>
                <div className="mr-1 btn-group">
                    <Button type='secondary' tooltip="Config" icon="wrench" id="config" click={this.handleClick}/>
                </div>
                <div className="mr-1 btn-group">
                    <Button type='success' tooltip="Start Game" icon="play" id="start" click={this.handleClick}/>
                </div>
            </div>
            <div className="col-3">
                <div className="mr-1">
                    <button className="btn btn-default" disabled>Game Version: {this.props.profiles.activeProfile.gameVersion}</button>
                </div>
            </div>
            <div className="col-4">
                <div className="mr-1 input-group">
                    <select className="form-control" value={this.props.profiles.lastProfileId} onChange={this.changeProfile.bind(this)}>
                        {this.props.profiles.profiles.map(profile => {
                            return <option key={profile.id} value={profile.id}>{profile.name}</option>
                        })}
                    </select>
                    <span className="input-group-btn">
                        <Button type="default" tooltip="Edit Profile" icon="cog" id="editProfile" click={this.handleClick}/>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default MainMenu