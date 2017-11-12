import React from 'react';
import Button from './Button'
import {inject, observer} from 'mobx-react'

@inject(['state']) @observer
class BackMenu extends React.Component {
    handleClick(){
        if(this.props.state.prevPage !== ''){
            let prevPage = this.props.state.prevPage;
            this.props.state.prevPage = '';
            this.props.state.page = prevPage;
        }else {
            this.props.state.page = 'main';
        }
    }

    render(){
        return <div className="row my-1">
            <div className="col-6">
                <div className="mr-1 btn-group">
                    <Button type='secondary' tooltip="back" icon="arrow-left" id="Back" click={this.handleClick.bind(this)}/>
                </div>
            </div>
        </div>
    }
}

export default BackMenu