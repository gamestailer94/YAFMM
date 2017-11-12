import React from 'react'
import Menu from './Menu'
import ModList from "./ModList"
import {inject, observer} from "mobx-react";
import ProfileConfig from './ProfileConfig'
import Loader from './Loader'
import ConfigEdit from "./ConfigEdit";
import FactorioLogin from "./FactorioLogin";
import GoogleOAuth from "./GoogleOAuth";
import FirstRunWizard from "./FirstRunWizard";
import DropboxOAuth from "./DropboxOAuth";


@inject('state') @inject('config') @observer
class Page extends React.Component {
    render() {
        let content;
        let page = this.props.state.page;

        if(this.props.config.firstRun){
            page = 'firstRun';
        }

        switch (page) {
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
            case 'dropboxOAuth':
                content = <DropboxOAuth/>;
                break;
            case 'firstRun':
                content = <FirstRunWizard/>;
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