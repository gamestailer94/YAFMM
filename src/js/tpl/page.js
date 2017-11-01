import React from 'react'
import Menu from './menu'
import Button from "./button"
import ModList from "./ModList"
import Mod from '../model/Mod'
import {inject} from "mobx-react";


@inject(['profile'])
class Page extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resetPage = this.resetPage.bind(this);
        this.state = {page:'main'}
    }

    handleClick(buttonEl) {
        switch (buttonEl.props.id) {
            case 'config':
                this.setState({page: 'config'});
                break;
            case 'add':
                let mod = new Mod();
                mod.loadDetails('test');
                this.props.profile.addMod(mod);
                break;
            default:
                buttonEl.setState({working: !buttonEl.state.working})
                break;
        }
    }

    resetPage(){
        this.setState({page: 'main'})
    }

    backButton(){
        return <Button type="secondary" icon="arrow-left" click={this.resetPage}/>
    }


    render() {
        let header,content;
        if(this.state.page === 'main'){
            header = <Menu click={this.handleClick}/>;
            content = <div className="container"><ModList click={this.handleClick} /></div>
        }else{
            header = <div className="bg-dark w-100">
                <div className="container">
                    <div className="row py-1">
                        {this.backButton()}
                    </div>
                </div>
            </div>
        }
        return <div>
            {header}
            <div className="content">
                {content}
            </div>
        </div>
    }

}

export default Page;