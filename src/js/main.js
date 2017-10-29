'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './js/tpl/page'
import { Provider } from 'mobx-react'
import {transaction } from 'mobx'

import ModList from './js/model/ModList'
import Mod from './js/model/Mod'

let mod2 = new Mod()
let mod = new Mod()
let modList = new ModList

mod.loadDetails()
mod2.loadDetails()
transaction(
modList.addMod(mod)
modList.addMod(mod2)
)

ReactDOM.render(
    <Provider modList={modList}>
        <Page/>
    </Provider>
    , document.getElementById('root'))
