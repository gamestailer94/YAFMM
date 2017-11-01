'use strict';
import { observable, action } from 'mobx'

class Mod  {

    @observable id;
    @observable name;
    @observable url;
    @observable description;
    @observable summary;
    @observable gameVersion;
    @observable modVersion;
    @observable fileName;
    @observable active = true;

    @action loadDetails (url) {
        this.description =  'Test';
        this.gameVersion = '0.15.0';
        this.modVersion = '1.0.1';
        this.fileName = 'test';
        this.summary = 'test Summary';
        this.name = 'Test Mod';
        this.url=url;
    }

    @action hydrate(data){
        this.id=data.id;
        this.name=data.name;
        this.url=data.url;
        this.description=data.description;
        this.summary=data.summary;
        this.gameVersion=data.gameVersion;
        this.modVersion=data.modVersion;
        this.fileName=data.fileName;
        this.active=data.active;
    }
}



export default Mod