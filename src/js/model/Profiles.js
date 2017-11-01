'use strict';
import { action, observable, autorun, computed } from 'mobx'
import Profile from './profile'


class Profiles {
    @observable profiles = [new Profile()];
    @observable lastProfileId = 0;

    @computed get activeProfile(){
        let activeProfile = null;
        this.profiles.map(profile => {
            if(profile.id === this.lastProfileId){
                activeProfile = profile
            }
        });
        if(activeProfile === null)
        {
            activeProfile = this.profiles[0];
        }
        return activeProfile;
    }

    @computed get nextProfileId(){
        let nextId = 0;
        this.profiles.map(profile => {
            if(profile.id >= nextId){
                nextId = profile.id+1
            }
        });
        return nextId;
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

    @action removeProfile(id){
        let indexToRemove = 0;
        this.profiles.map((profile, index) => {
            if(profile.id === id){
                indexToRemove = index;
            }
        });
        let beforeSlice = [], afterSlice = [];
        if(indexToRemove > 0){
            beforeSlice = this.profiles.slice(0,indexToRemove);
        }
        if(indexToRemove < this.profiles.length){
            afterSlice = this.profiles.slice(indexToRemove+1,this.profiles.length);
        }
        this.profiles = beforeSlice.concat(afterSlice);
    }

}


export default Profiles