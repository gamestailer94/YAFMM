import React from 'react'
import ModEntry from './ModEntry'
import { observer, inject } from 'mobx-react'

@inject(['profile']) @observer
class ModList extends React.Component {

    render(){
        return <div className="mod-list w-100 my-1 row">
            <div className="col-12">
                <ul className="list-group">
                    {this.props.profile.mods.map((mod) => {
                        return <ModEntry key={mod.id} mod={mod} />
                    })}
                </ul>
            </div>
        </div>
    }
}

export default ModList