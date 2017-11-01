import React from 'react'
import {observer, inject} from 'mobx-react'

@inject('profile') @observer
class ModEntry extends React.Component {

    constructor(props){
        super(props);
    }

    getIconClassName(){
        if(this.props.mod.active)
            return 'fa fa-fw fa-lg fa-check-square';
        else
            return 'fa fa-fw fa-lg fa-square-o'
    }

    changeActive() {
        let mod = this.props.mod;
        mod.active = !this.props.mod.active;
    }

    remove() {
        let id = this.props.mod.id;
        this.props.profile.removeMod(id);
    }

    render(){
        return <li className="list-group-item">
            <i onClick={this.changeActive.bind(this)} className={this.getIconClassName()}/>{' '}{this.props.mod.name}
            <div className="float-right">
            <i className="fa fa-fw fa-lg fa-trash" onClick={this.remove.bind(this)} />
            </div>
        </li>
    }
}
export default ModEntry