import React from 'react'
import MainMenu from './MainMenu'
import BackMenu from './BackMenu'
import { inject, observer } from 'mobx-react'

@inject(['state']) @observer
export default class Menu extends React.Component
{
    componentDidMount(){
        $('#menu [data-toggle="tooltip"]').tooltip();
    }
    componentWillUnmount(){
        $('#menu [data-toggle="tooltip"]').tooltip('dispose');
    }
    componentWillUpdate(){
        $('#menu [data-toggle="tooltip"]').tooltip('dispose');
    }
    componentDidUpdate(){
        $('#menu [data-toggle="tooltip"]').tooltip();
    }

    getMenu(){
        if(this.props.state.page === 'main'){
            return <MainMenu />
        }else{
            return <BackMenu />
        }
    }

    render(){
        return <div className="position-fixed bg-dark w-100 menu mt-0 t-0">
            <div className="container" id="menu">
                {this.getMenu()}
            </div>
        </div>
    }
}