import React from 'react'
import Menu from './menu'
import Button from "./button";
import ModList from "./ModList";

export default class Page extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.resetPage = this.resetPage.bind(this)
        this.state = {page:'main'}
    }

    handleClick(buttonEl) {
        if(buttonEl.props.id === 'config'){
            this.setState({page: 'config'})
        }
        buttonEl.setState({working: !buttonEl.state.working})
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
            header = <Menu click={this.handleClick}/>
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
            {content}
        </div>
    }

}