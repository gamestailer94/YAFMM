import React from 'react'
export default class ModEntry extends React.Component {
    constructor(props) {
        super(props)
    }

    getClassName(){
        return;
    }

    render(){
        return <li className="list-group-item">
            <i className="fa fa-lg fa-square" />
        </li>
    }
}