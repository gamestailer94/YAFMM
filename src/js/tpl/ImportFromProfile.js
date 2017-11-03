import React from 'react'
import {inject,observer} from 'mobx-react'


@inject('config') @observer
class ImportFromProfile extends React.Component {
    constructor(props){
        super(props);
        this.importMods = this.importMods.bind(this);
        this.importSaves = this.importSaves.bind(this);
        this.updateFromProfile = this.updateFromProfile.bind(this);
        this.state = {fromProfile: 0};
    }

    importMods(){
        let id = this.props.config.profiles[this.state.fromProfile].id;
        this.props.config.importModFromProfile(id);
    }

    importSaves(){

    }

    updateFromProfile(e){
        let index = $(e.target).data('index');
        this.setState({fromProfile: index});
    }

    render(){
        let importDisabled = this.props.config.profiles[this.state.fromProfile].id === this.props.config.activeProfile.id;
        return <div className="mt-1">
            <div>
                <span>Import from: </span>
                <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">{this.props.config.profiles[this.state.fromProfile].name}</button>
                <div className="dropdown-menu">
                    {this.props.config.profiles.map((profile,index) => {
                        return <button key={profile.id} data-index={index} onClick={this.updateFromProfile}
                                       className="dropdown-item">{profile.name}</button>
                    })}
                </div>
            </div>
            <div className="btn-group mt-1">
                <button className="btn btn-outline-primary" disabled={importDisabled} onClick={this.importMods}>Import Mods</button>
                <button className="btn btn-outline-secondary" disabled={importDisabled} onClick={this.importSaves}>Import Saves</button>
            </div>
        </div>
    }
}

export default ImportFromProfile