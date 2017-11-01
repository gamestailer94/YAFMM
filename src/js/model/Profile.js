'use strict';
import { computed, observable, action } from 'mobx'
import Mod from "./Mod";

class Profile {

    @observable mods = [];
    @observable id = 0;
    @observable name = '';
    @observable gameVersion = "0.0.0";

    @action addMod(mod) {
        mod.id = this.lastModId+1;
        this.mods.push(mod)
    }

    @computed get lastModId() {
        let lastId = 0;
        this.mods.map((mod) => {
            lastId = mod.id;
        });
        return lastId;
    }

    @computed get hasMods(){
        return this.mods.length > 0;
    }

    @action hydrate(data){
        this.id=data.id;
        this.name=data.id;
        this.gameVersion=data.gameVersion;
        data.mods.map(mod => {
            let modObject = new Mod();
            modObject.hydrate(mod);
            this.mods.push(mod);
        })
    }

}

export default Profile