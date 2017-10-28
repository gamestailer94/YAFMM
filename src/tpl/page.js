import React from 'react'
import Menu from './menu'
import Button from "./button";
import ModList from "./ModList";
export default class Page extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.closeConfig = this.closeConfig.bind(this)
        this.state = {
            page: 'main'
        }
    }

    handleClick(buttonEl) {
        if(buttonEl.props.id === 'add'){
            this.setState({page: 'config'})
        }
        buttonEl.setState({working: !buttonEl.state.working})
    }

    closeConfig(){
        this.setState({page: 'main'})
    }


    render() {
        let header,content;
        if(this.state.page === 'main'){
            header = <Menu buttons={this.buttonList} click={this.handleClick}/>
            content = <div className="container"><ModList /></div>
        }else{
            header = <div className="bg-dark w-100">
                <div className="container">
                    <div className="row py-1">
                        <Button type="secondary" icon="arrow-left" click={this.closeConfig}/>
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