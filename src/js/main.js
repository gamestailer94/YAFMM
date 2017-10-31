'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

window.storage = require('electron-storage');

import Page from './js/tpl/page'
import Profile from './js/model/Profile'
import Mod from './js/model/Mod'


let mod = new Mod();
let profile = new Profile;

for(let i=1;i<10;i++){
    let delay = Math.random() * (8000 - 20000) + 8000;
    setTimeout(()=> {
        mod = new Mod();
        mod.loadDetails();
        profile.addMod(mod);
    }, delay)
}

ReactDOM.render(
    <Provider profile={profile}>
        <Page/>
    </Provider>
    , document.getElementById('root'));
