'use strict'
$('[data-toggle="tooltip"]').tooltip()

const React = require('react')
const ReactDOM = require('react-dom')
const DomRoot = document.getElementById('root')
import Page from './res/tpl/page.js'

ReactDOM.render(<Page/>, DomRoot)