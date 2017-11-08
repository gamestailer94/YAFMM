import React from 'react'
import {observer, inject} from 'mobx-react'
import Fa from "./Fa";

@inject('config') @observer
class ModEntry extends React.Component {

    constructor(props){
        super(props);
    }

    getIconName(){
        if(this.props.mod.active)
            return 'check-square';
        else
            return 'square-o'
    }

    changeActive() {
        let mod = this.props.mod;
        mod.active = !this.props.mod.active;
    }

    remove() {
        let id = this.props.mod.id;
        this.props.config.activeProfile.removeMod(id);
    }

    render(){
        return <li className="list-group-item">
            <Fa icon={this.getIconName()} click={this.changeActive.bind(this)}/>{' '}{this.props.mod.name}
            <div className="float-right">
                <Fa icon="trash-o" extraClass='text-danger' click={this.remove.bind(this)}/>
            </div>
        </li>
    }
}
export default ModEntry