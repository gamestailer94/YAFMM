import {inject, observable, action} from 'mobx'

class GameVersion {
    @observable version = '0.0.0';
    @observable path = '';
    @observable downloaded = false;

    @action hydrate(data){
        this.version=data.version;
        this.path=data.path;
        this.downloaded=data.downloaded;
    }
}

export default GameVersion