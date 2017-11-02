import React from 'react'
import {inject, observer} from 'mobx-react'

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

    getIconName() {
        let prefix = "fa fa-lg fa-fw fa-";
        if(this.props.state.btn[this.props.id].working){
            return prefix+"circle-o-notch fa-spin"
        }else {
            return prefix + this.props.icon
        }
    }

    handleClick(){
        this.props.click(this)
    }

    render() {
        return <button className={this.getClassName()} onClick={this.handleClick.bind(this)}
                       data-toggle="tooltip" data-placement="bottom" title={this.props.tooltip}>
            <i className={this.getIconName()} />
        </button>
    }
}

export default Button