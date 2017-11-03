'use strict';
import { computed, observable, action } from 'mobx'
import Mod from "./Mod";

class Profile {

    @observable mods = [];
    @observable id = 0;
    @observable name = 'Default Profile';
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

    @action removeMod(id){
        this.mods.map((mod, index) => {
            if(mod.id  === id){
                this.mods.splice(index, 1);
            }
        })
    }

    @action hydrate(data){
        this.id=data.id;
        this.name=data.name;
        this.gameVersion=data.gameVersion;
        data.mods.map(mod => {
            let modObject = new Mod();
            modObject.hydrate(mod);
            this.mods.push(mod);
        })
    }

    @action importMods(mods){
        this.mods = [];
        mods.map(mod => {
            let modObject = new Mod();
            modObject.hydrate(mod);
            this.mods.push(modObject);
        })
    }

}

export default Profile