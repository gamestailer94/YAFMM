'use strict'
//required for bootstrap
const $ = require('jquery')
const Popper = require('popper.js')
require('./res/js/bootstrap.js')

const React = require('react')
const ReactDOM = require('react-dom')
const fs = require('fs')
const path = require('path')
const DomRoot = document.getElementById('root')
import Menu from './res/tpl/templates.js'

ReactDOM.render(<Menu/>, DomRoot)