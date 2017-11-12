import React from 'react'
import Menu from './Menu'
import ModList from "./ModList"
import {inject, observer} from "mobx-react";
import ProfileConfig from './ProfileConfig'
import Loader from './Loader'
import ConfigEdit from "./ConfigEdit";
import FactorioLogin from "./FactorioLogin";
import GoogleOAuth from "./GoogleOAuth";


@inject(['state']) @observer
class Page extends React.Component {
    render() {
        let content;
       switch(this.props.state.page){
           case 'editProfile':
               content = <ProfileConfig/>;
               break;
           case 'config':
               content = <ConfigEdit/>;
               break;
           case 'factorioLogin':
               content = <FactorioLogin/>;
               break;
           case 'googleOAuth':
               content = <GoogleOAuth/>;
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