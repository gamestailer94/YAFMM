'use strict';
import { action, observable, autorun, computed } from 'mobx'
import fs from "fs";
import path from 'path';

class Profiles {
    @observable profiles = [];
    @observable filter = '';
    @observable lastProfileId = 0;

    @computed get filteredProfile() {
        let regex = new RegExp(this.filter, "i");
        return this.profiles.filter(profile => !this.filter || regex.test(this.filter));
    }

    @computed get lastProfile(){
        return this.profiles.filter(profile => profile.id === this.lastProfileId);
    }

    @action set addProfile(profile){
        this.profiles.push(profile);
    }

    @action loadProfiles() {
        fs.readFile(path.join())
    }
}

export default Profiles