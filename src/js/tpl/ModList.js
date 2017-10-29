import React from 'react'
import ModEntry from './ModEntry'
import { observer, inject } from 'mobx-react'

@inject(['modList']) @observer
class ModList extends React.Component {

    render(){
        console.log(this.props.)
        return <div className="mod-list w-100 my-1 row">
            <ul className="list-group">
                {this.props.modList.mods.map((mod) => {
                    return <ModEntry key={mod.id} {...mod} />
                })}
            </ul>
        </div>
    }
}

export default ModList