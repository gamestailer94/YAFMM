'use strict';
import { action, observable, autorun, computed } from 'mobx'
import Profile from './profile'


class Profiles {
    @observable profiles = [new Profile()];
    @observable lastProfileId = 0;

    @computed get activeProfile(){
        return this.profiles.map(profile => {
            if(profile.id === this.lastProfileId){
                return profile;
            }
        })[0];
    }

    @action addProfile(profile){
        this.profiles.push(profile);
    }

    @action loadProfiles() {
        return new Promise((resolve,reject) => {
            window.storage.isPathExists('profiles.json', (exists) => {
                if(exists) {
                    window.storage.get('profiles', (err,data) =>{
                        if(err){
                            window.logger.error(err);
                            reject();
                        }
                        this.profiles = [];
                        data.profiles.map(profile => {
                            console.log(profile.mods);
                            let profileObject = new Profile();
                            profileObject.hydrate(profile);
                            this.profiles.push(profileObject);
                        });
                        this.lastProfileId = data.lastProfileId;
                        resolve();
                    })
                }else {
                    resolve();
                }
            });
        })
    }

}


export default Profiles