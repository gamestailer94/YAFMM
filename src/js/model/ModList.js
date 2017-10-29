'use strict'
import {observable,action} from 'mobx'

class ModList {

    @observable mods = []
    @observable nextModId = 0
    @observable id = 0
    @observable name = ''
    @observable gameVersion = "0.0.0"

    @action addMod(mod) {
        mod.id = this.nextModId
        this.nextModId++
        this.mods.push(mod)
    }

}

export default ModList