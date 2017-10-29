'use strict'
import {observable, action } from 'mobx'

class Mod  {

    @observable id
    @observable name
    @observable url
    @observable description
    @observable summary
    @observable gameVersion
    @observable modVersion
    @observable fileName
    @observable active = true

    constructor(id = null, url = '', modVersion = '', gameVersion = '') {
        this.id = id
        this.url = url
        this.modVersion = modVersion
        this.gameVersion = gameVersion
    }

    @action loadDetails () {
        setTimeout(() => {
            this.description =  'Test'
            this.gameVersion = '0.15.0'
            this.modVersion = '1.0.1'
            this.fileName = 'test'
            this.summary = 'test Summary'
            this.name = 'Test Mod'
        }, 1000)
    }
}



export default Mod