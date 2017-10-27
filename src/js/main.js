'use strict'
//required for bootstrap
const $ = require('jquery')
const Popper = require('popper.js')
const include = require('node-import')
include('./html/res/js/bootstrap.js')

const React = require('react')
const ReactDOM = require('react-dom')
const fs = require('fs')
const path = require('path')
const DomRoot = document.getElementById('root')
include('./html/res/tpl/templates.js')

ReactDOM.render(<Menu/>, DomRoot)