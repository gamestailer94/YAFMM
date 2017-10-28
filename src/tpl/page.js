import React from 'react'
import Menu from './menu.js'
export default class Page extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            page: 'main'
        }
        this.buttonList = {
            'group1': {
                'add': {
                    'id': "add",
                    'group': 'group1',
                    'working': false,
                    'type': 'primary',
                    'tooltip': 'Add',
                    'icon': 'plus',
                    'click': this.handleClick
                },
                'update': {
                    'id': "update",
                    'group': 'group1',
                    'working': false,
                    'type': 'outline-success',
                    'tooltip': 'Update',
                    'icon': 'download',
                    'click': this.handleClick
                },
                'upload': {
                    'id': "upload",
                    'group': 'group1',
                    'working': false,
                    'type': 'outline-success',
                    'tooltip': 'Upload Modlist',
                    'icon': 'cloud-upload',
                    'click': this.handleClick
                }
            },
            'group2': {
                'config': {
                    'id': "config",
                    'group': 'group2',
                    'working': false,
                    'type': 'secondary',
                    'tooltip': 'config',
                    'icon': 'wrench',
                    'click': this.handleClick
                }
            },
            'group3': {
                'play': {
                    'id': "start",
                    'group': 'group3',
                    'working': false,
                    'type': 'success',
                    'tooltip': 'start game',
                    'icon': 'play',
                    'click': this.handleClick
                }
            }
        }
    }

    handleClick(buttonEl) {
        if(buttonEl.props.id === 'config'){
            $('')
            this.setState({page: 'config'})
        }
        buttonEl.setState({working: !buttonEl.state.working})
    }


    render() {
        let page
        if(this.state.page === 'main'){
            page = <Menu buttons={this.buttonList}/>
        }else{
            page = <div className="bg-primary h-100 w-100" />
        }
        return <div>
            {page}
        </div>
    }
}