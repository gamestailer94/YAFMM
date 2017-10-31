'use strict';
import { computed, observable, action } from 'mobx'

class ModList {

    @observable mods = [];
    @observable id = 0;
    @observable name = '';
    @observable gameVersion = "0.0.0";

    @action addMod(mod) {
        mod.id = this.getLastModId()+1;
        this.mods.push(mod)
    }

    @computed getLastModId() {
        let lastId = 0;
        this.mods.map((mod) => {
            lastId = mod.id;
        });
        return lastId;
    }

}

export default ModList