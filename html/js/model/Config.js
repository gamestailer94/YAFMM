'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

var _mobx = require('mobx');

var _Profile = require('./Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _GameVersion = require('./GameVersion');

var _GameVersion2 = _interopRequireDefault(_GameVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

let Config = (_class = class Config {
    constructor() {
        _initDefineProp(this, 'profiles', _descriptor, this);

        _initDefineProp(this, 'lastProfileId', _descriptor2, this);

        _initDefineProp(this, 'gameVersions', _descriptor3, this);

        _initDefineProp(this, 'factorioUsername', _descriptor4, this);

        _initDefineProp(this, 'factorioPassword', _descriptor5, this);

        _initDefineProp(this, 'factorioSavePw', _descriptor6, this);

        this.GoogleClientId = "267751026207-57hbr9k4cjlj4269q8l9t4jl9c8t1k5u.apps.googleusercontent.com";
        this.GoogleClientSecret = "z_hU9Y1lMU8aHDWJ9a8cx0Sv";
        this.DropboxClientId = "qinr0h3tth1vpvk";
        this.DropboxClientSecret = 'f9utkik99rlhr4w';

        _initDefineProp(this, 'GoogleAccessToken', _descriptor7, this);

        _initDefineProp(this, 'GoogleRefreshToken', _descriptor8, this);

        _initDefineProp(this, 'GoogleTokenValidTill', _descriptor9, this);

        _initDefineProp(this, 'DropboxAccessToken', _descriptor10, this);

        _initDefineProp(this, 'autoUpload', _descriptor11, this);

        _initDefineProp(this, 'autoUploadDestination', _descriptor12, this);

        _initDefineProp(this, 'firstRun', _descriptor13, this);
    }

    get activeProfile() {
        let activeProfile = null;
        this.profiles.map(profile => {
            if (profile.id === this.lastProfileId) {
                activeProfile = profile;
            }
        });
        if (activeProfile === null) {
            activeProfile = this.profiles[0];
        }
        return activeProfile;
    }

    get nextProfileId() {
        let nextId = 0;
        this.profiles.map(profile => {
            if (profile.id >= nextId) {
                nextId = profile.id + 1;
            }
        });
        return nextId;
    }

    addProfile(profile) {
        this.profiles.push(profile);
    }

    loadProfiles() {
        return new Promise((resolve, reject) => {
            window.storage.isPathExists('config.json', exists => {
                if (exists) {
                    window.storage.get('config', (err, data) => {
                        if (err) {
                            window.logger.error(err);
                            reject();
                        }
                        this.profiles = [];
                        data.profiles.map(profile => {
                            let profileObject = new _Profile2.default();
                            profileObject.hydrate(profile);
                            this.profiles.push(profileObject);
                        });
                        this.lastProfileId = data.lastProfileId;
                        this.gameVersions = [];
                        data.gameVersions.map(gameVersion => {
                            let gameVersionObject = new _GameVersion2.default();
                            gameVersionObject.hydrate(gameVersion);
                            this.gameVersions.push(gameVersionObject);
                        });
                        this.GoogleAccessToken = data.GoogleAccessToken;
                        this.GoogleRefreshToken = data.GoogleRefreshToken;
                        this.GoogleTokenValidTill = data.GoogleTokenValidTill;
                        this.factorioUsername = data.factorioUsername;
                        this.factorioPass = data.factorioPass;
                        this.firstRun = data.firstRun;
                        resolve();
                    });
                } else {
                    resolve();
                }
            });
        });
    }

    removeProfile(id) {
        let indexToRemove = 0;
        this.profiles.map((profile, index) => {
            if (profile.id === id) {
                indexToRemove = index;
            }
        });
        let beforeSlice = [],
            afterSlice = [];
        if (indexToRemove > 0) {
            beforeSlice = this.profiles.slice(0, indexToRemove);
        }
        if (indexToRemove < this.profiles.length) {
            afterSlice = this.profiles.slice(indexToRemove + 1, this.profiles.length);
        }
        this.profiles = beforeSlice.concat(afterSlice);
    }

    addGameVersion(gameVersion) {
        this.gameVersions.push(gameVersion);
    }

    removeGameVersion(version) {
        let indexToRemove = 0;
        this.gameVersions.map((gameVersion, index) => {
            if (gameVersion.version === version) {
                indexToRemove = index;
            }
        });
        let beforeSlice = [],
            afterSlice = [];
        if (indexToRemove > 0) {
            beforeSlice = this.gameVersions.slice(0, indexToRemove);
        }
        if (indexToRemove < this.gameVersions.length) {
            afterSlice = this.gameVersions.slice(indexToRemove + 1, this.profiles.length);
        }
        this.gameVersions = beforeSlice.concat(afterSlice);
    }

    importModFromProfile(id) {
        let mods = [];

        this.profiles.map(profile => {
            if (profile.id === id) {
                mods = profile.mods;
            }
        });

        this.activeProfile.importMods(mods);
    }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'profiles', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return [new _Profile2.default()];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'lastProfileId', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'gameVersions', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return [new _GameVersion2.default()];
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'factorioUsername', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'factorioPassword', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'factorioSavePw', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'GoogleAccessToken', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'GoogleRefreshToken', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'GoogleTokenValidTill', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'DropboxAccessToken', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'autoUpload', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'autoUploadDestination', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 'google';
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'firstRun', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'activeProfile', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'activeProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextProfileId', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'nextProfileId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addProfile', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'loadProfiles', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'loadProfiles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeProfile', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'removeProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addGameVersion', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addGameVersion'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeGameVersion', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'removeGameVersion'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'importModFromProfile', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'importModFromProfile'), _class.prototype)), _class);
exports.default = Config;
//# sourceMappingURL=Config.js.map
