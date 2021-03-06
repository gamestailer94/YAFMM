import {observable, action, computed, extendObservable} from 'mobx'

class State {
    @observable page = 'main';
    @observable prevPage = '';
    @observable queue = [];
    @observable btn = {};
    @observable working = false;
    @observable displayMenu = true;
    @observable factorioPassword = '';

    @action addToQueue(todo) {
        this.queue.push(todo);
    }

    @computed get nextInQueue(){
        return this.queue.length > 0 ?this.queue[0]:undefined;
    }

    @action acceptTask(){
        let todo = this.queue[0];
        this.queue = this.queue.slice(1,this.queue.length);
        return todo;
    }

    @action addButton(id){
        this.btn = extendObservable(this.btn,{
            [id]:{
                working: false
            }
        })
    }

    @action setBtnWorking(id){
        this.btn[id].working = true;
    }

    @action setBtnNotWorking(id){
        this.btn[id].working = false;
    }
}

export default State