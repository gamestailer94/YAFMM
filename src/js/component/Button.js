import React from 'react'
import {inject, observer} from 'mobx-react'
import Fa from "./Fa";

@inject('state') @observer
class Button extends React.Component {

    constructor(props) {
        super(props);
        if(typeof(props.state.btn[props.id]) === 'undefined'){
            props.state.addButton(props.id);
        }
    }

    getClassName() {
        return "btn btn-"+this.props.type
    }

    handleClick(){
        this.props.click(this)
    }

    render() {
        return <button className={this.getClassName()} onClick={this.handleClick.bind(this)}
                       data-toggle="tooltip" data-placement="bottom" title={this.props.tooltip}>
            <Fa icon={this.props.icon} spin={this.props.state.btn[this.props.id].working}/>
        </button>
    }
}

export default Button