import React from 'react'
import Menu from './Menu'
import ModList from "./ModList"
import {inject, observer} from "mobx-react";
import ProfileConfig from './ProfileConfig'
import Loader from './Loader'


@inject(['state']) @observer
class Page extends React.Component {
    render() {
        let content;
       switch(this.props.state.page){
           case 'editProfile':
               content = <ProfileConfig/>
               break;
           case 'main':
           default:
               content = <ModList/>;
               break;
        }
        return <div>
            <Menu/>
            <div className="content">
                <Loader />
                <div className="container">
                    {content}
                </div>
            </div>
        </div>
    }
}

export default Page;