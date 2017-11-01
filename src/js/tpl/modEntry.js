import React from 'react'
import {observer} from 'mobx-react'

@observer
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

    handleClick() {
        let mod = this.props.mod;
        mod.active = !this.props.mod.active;
    }

    render(){
        return <li className="list-group-item">
            <i onClick={this.handleClick.bind(this)} className={this.getIconClassName()}/>{' '}{this.props.mod.name}
        </li>
    }
}
export default ModEntry