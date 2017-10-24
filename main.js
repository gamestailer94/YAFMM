'use strict'

const winston = require('winston')
const {app, BrowserWindow} = require('electron')
const path = require('path')
const _ = require('underscore')

const APP_DEBUG = true

const loggerConfig = {
    transports: [
        new (winston.transports.File)({
            filename: path.join(app.getAppPath(),'main.log'),
            maxsize: 2048,
            json: false,
            maxFiles: 5,
            tailable: true,
            zippedArchive: true,
            label: "Main"
        })
    ]
}
const logger = winston.Logger(loggerConfig)

let windows = {};
const windowOption = {
    width: 1024,
    height: 768
}

function start() {
    windows.mainWindow = new BrowserWindow(windowOption)

    if(APP_DEBUG)
    {
        windows.mainWindow.openDevTools()
    }

    windows.mainWindow.on('close', () => {
        delete windows.mainWindow
    })
}


app.on('ready', start)

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (_.isEmpty(windows)) {
        start();
    }
})

