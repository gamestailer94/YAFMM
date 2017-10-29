import React from 'react'
import {observer} from 'mobx-react'

@observer
class ModEntry extends React.Component {

    constructor(props){
        super(props)
    }

    getIconClassName(){
        if(this.props.active)
            return 'fa fa-lg fa-check.square-o'
        else
            return 'fa fa-lg fa-square-o'
    }

    render(){
        return <li className="list-group-item">
            <i className={this.getIconClassName()}/>{' '}{this.props.name}
        </li>
    }
}
export default ModEntry