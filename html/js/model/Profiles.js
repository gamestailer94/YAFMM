'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = require('mobx');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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

        _initDefineProp(this, 'filter', _descriptor2, this);

        _initDefineProp(this, 'lastProfileId', _descriptor3, this);
    }

    get filteredProfile() {
        let regex = new RegExp(this.filter, "i");
        return this.profiles.filter(profile => !this.filter || regex.test(this.filter));
    }

    get lastProfile() {
        return this.profiles.filter(profile => profile.id === this.lastProfileId);
    }

    set addProfile(profile) {
        this.profiles.push(profile);
    }

    loadProfiles() {
        _fs2.default.readFile(_path2.default.join());
    }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'profiles', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'filter', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'lastProfileId', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'filteredProfile', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'filteredProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lastProfile', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'lastProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addProfile', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addProfile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'loadProfiles', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'loadProfiles'), _class.prototype)), _class);
exports.default = Profiles;
//# sourceMappingURL=Profiles.js.map
