'use strict'
//required for bootstrap
const $ = require('jquery')
const Popper = require('popper.js')
require('./res/js/bootstrap.js')

const React = require('react')
const ReactDOM = require('react-dom')
const fs = require('fs')
fs.readFile('./tpl/main.jxs',function (error,data) {
    ReactDOM.render(data,document.getElementsByName('body'))
})