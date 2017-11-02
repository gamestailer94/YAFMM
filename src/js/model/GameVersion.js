import {inject, observable, action} from 'mobx'

class GameVersion {
    @observable version = '0.0.0';
    @observable fileName = '';
    @observable downloaded = false;

    @action hydrate(data){
        this.version=data.version;
        this.fileName=data.fileName;
        this.downloaded=data.downloaded;
    }
}

export default GameVersion