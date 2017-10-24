'use strict';

const winston = require('winston')
const {app} = require('electron')

const loggerConfig = {
    transports: [
        new (winston.transports.File)({
            filename: app.getAppPath()+'main.log',
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



