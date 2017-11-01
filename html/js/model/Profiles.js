'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

var _profile = require('./profile');

var _profile2 = _interopRequireDefault(_profile);

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

let Profiles = (_class = class Profiles {
    constructor() {
        _initDefineProp(this, 'profiles', _descriptor, this);

        _initDefineProp(this, 'lastProfileId', _descriptor2, this);
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
            window.storage.isPathExists('profiles.json', exists => {
                if (exists) {
                    window.storage.get('profiles', (err, data) => {
                        if (err) {
                            window.logger.error(err);
                            reject();
                        }
                        this.profiles = [];
                        data.profiles.map(profile => {
                            let profileObject = new _profile2.default();
                            profileObject.hydrate(profile);
                            this.profiles.push(profileObject);
                        });
                        this.lastProfileId = data.lastProfileId;
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

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'profiles', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return [new _profile2.default()];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'lastProfileId', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'activeProfile', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'activeProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextProfileId', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'nextProfileId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addProfile', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'loadProfiles', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'loadProfiles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeProfile', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'removeProfile'), _class.prototype)), _class);
exports.default = Profiles;
//# sourceMappingURL=Profiles.js.map
