import React from 'react'
import Button from './button.js'
import _ from 'underscore'
export default class Menu extends React.Component
{
    componentDidMount(){
        $('menu [data-toggle="tooltip"]').tooltip()
    }
    componentWillUnmount(){
        $('menu [data-toggle="tooltip"]').tooltip('dispose')
    }

    createButtons(){
        let ButtonGroupList = []
        _.each(this.props.buttons, function (value,key,list) {
            let ButtonList = []
            _.each(value,function(button,key,list){
                ButtonList.push(<Button key={key} {...button} />)
            })
            ButtonGroupList.push(<div key={key} className="mr-1 btn-group">{ButtonList}</div>)
        })
        return ButtonGroupList
    }

    render(){
        return <menu className="position-fixed bg-dark w-100 menu mt-0">
            <div className="row my-1">
                {this.createButtons()}
            </div>
        </menu>
    }
}