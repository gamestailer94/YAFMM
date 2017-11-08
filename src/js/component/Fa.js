import React from 'react';
import {observer} from 'mobx-react';

@observer
class Fa extends React.Component {


    className() {
        let prefix = 'fa fa-lg fa-fw fa-';
        let spin = this.props.spin?' fa-spin':'';
        return prefix + this.props.icon + spin + ' ' + this.props.extraClass;
    }

    render(){
        return <i className={this.className()} onClick={this.props.click} {...this.props.data}/>
    }
}

export default Fa