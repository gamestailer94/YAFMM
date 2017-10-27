'use strict'
//required for bootstrap
const $ = require('jquery')
const Popper = require('popper.js')
require('./res/js/bootstrap.js')

const React = require('react')
const ReactDOM = require('react-dom')
const DomRoot = document.getElementById('root')
import Page from './res/tpl/page.js'

ReactDOM.render(<Page/>, DomRoot)