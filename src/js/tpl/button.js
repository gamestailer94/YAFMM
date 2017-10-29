import React from 'react'
export default class Button extends React.Component {

    constructor(props){
        super(props)
        this.state = {'working':false}
        this.handleClick = this.handleClick.bind(this)
    }

    getClassName() {
        return "btn btn-"+this.props.type
    }

    getIconName() {
        let prefix = "fa fa-lg fa-fw fa-"
        if(this.state.working){
            return prefix+"circle-o-notch fa-spin"
        }else {
            return prefix + this.props.icon
        }
    }

    handleClick(){
        if(typeof(this.props.click) === "function")
        {
            this.props.click(this)
        }
    }

    render() {
        return <button className={this.getClassName()} onClick={this.handleClick}
                       data-toggle="tooltip" data-placement="bottom" title={this.props.tooltip}>
            <i className={this.getIconName()} />
        </button>
    }
}

