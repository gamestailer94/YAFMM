import React from 'react'
import Button from './button.js'
export default class Menu extends React.Component
{
    componentDidMount(){
        $('menu [data-toggle="tooltip"]').tooltip()
    }
    componentWillUnmount(){
        $('menu [data-toggle="tooltip"]').tooltip('dispose')
    }

    render(){
        return <menu className="position-fixed bg-dark w-100 menu mt-0 t-0">
            <div className="row my-1">
                <div className="col-12">
                    <div className="mr-1 btn-group">
                        <Button type='primary' tooltip="Add" icon="plus" id="add" click={this.props.click}/>
                        <Button type='outline-success' tooltip="Update" icon="arrow-up" id="update" click={this.props.click}/>
                        <Button type='outline-success' tooltip="Upload to Cloud" icon="cloud-upload" id="upload" click={this.props.click}/>
                    </div>
                    <div className="mr-1 btn-group">
                        <Button type='secondary' tooltip="Config" icon="wrench" id="config" click={this.props.click}/>
                    </div>
                    <div className="mr-1 btn-group">
                        <Button type='success' tooltip="Start Game" icon="play" id="start" click={this.props.click}/>
                    </div>
                </div>
            </div>
        </menu>
    }
}