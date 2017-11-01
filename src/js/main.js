'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import logger from 'winston';
import path from 'path';
const { app } = require('electron').remote;
import {autorunAsync, observable} from "mobx";

window.storage = require('electron-storage');
const loggerConfig = {
    transports: [
        new logger.transports.File({
            filename: path.join(app.getAppPath(),'app.log'),
            maxsize: 2048,
            json: false,
            maxFiles: 5,
            tailable: true,
            zippedArchive: true,
            label: "Render",
            // humanReadableUnhandledException: true,
            // handleExceptions: true
        })
    ],
    exitOnError: false
};

logger.Logger(loggerConfig);
window.logger = logger;
window.logger.oldError = window.logger.error;

window.logger.error = (err) => {
    console.log(err);
    window.logger.oldError(err);
};

import Page from './js/tpl/page'
import Profiles from './js/model/Profiles'

let profiles = observable( new Profiles());

profiles.loadProfiles()
    .then(()=>{
        autorunAsync(() => {
            window.storage.set('profiles', profiles).catch(window.logger.error);
        },500);
    })
    .then(() => {
    ReactDOM.render(
        <Provider profile={profiles.activeProfile} profiles={profiles}>
            <Page/>
        </Provider>
        , document.getElementById('root'));
});
