import React from 'react'
import ModEntry from './ModEntry'
import { observer, inject } from 'mobx-react'

@inject('profiles') @observer
class ModList extends React.Component {

    render(){
        return <div className="mod-list my-1 row">
            <div className="col-12">
                <ul className="list-group">
                    {this.props.profiles.activeProfile.mods.map((mod) => {
                        return <ModEntry key={mod.id} mod={mod} />
                    })}
                </ul>
            </div>
        </div>
    }
}

export default ModList