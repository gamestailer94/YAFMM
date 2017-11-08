import React from 'react'
import Button from './Button.js'
import Mod from '../model/Mod'
import { inject, observer } from 'mobx-react'

@inject('config') @inject('state') @observer
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
                this.props.config.activeProfile.addMod(mod);
                break;
            case 'editProfile':
                this.props.state.page = 'editProfile';
                break;
            case 'config':
                this.props.state.page = 'config';
                break;
            default:
                break;
        }
    }

    changeGameVersion(){
        this.props.state.page = 'editProfile';
    }

    changeProfile(e){
        this.props.config.lastProfileId = parseInt($(e.target).data('id'));
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
                    <button className="btn btn-default" onClick={this.changeGameVersion.bind(this)}>Game Version: {this.props.config.activeProfile.gameVersion}</button>
                </div>
            </div>
            <div className="col-4">
                <div className="btn-group float-right">
                    <div className="btn-group">
                        <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">{this.props.config.activeProfile.name}</button>
                        <div className="dropdown-menu">
                            {this.props.config.profiles.map(profile => {
                                let className = this.props.config.activeProfile.id === profile.id?'active':'';
                                className += ' dropdown-item';
                                return <button key={profile.id} className={className} data-id={profile.id} onClick={this.changeProfile.bind(this)}>{profile.name}</button>
                            })}
                        </div>
                    </div>
                    <Button type="default" tooltip="Edit Profile" icon="cog" id="editProfile" click={this.handleClick}/>
                </div>
            </div>
        </div>
    }
}

export default MainMenu