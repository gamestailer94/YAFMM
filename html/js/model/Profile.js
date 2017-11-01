'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = require('mobx');

var _Mod = require('./Mod');

var _Mod2 = _interopRequireDefault(_Mod);

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

let Profile = (_class = class Profile {
    constructor() {
        _initDefineProp(this, 'mods', _descriptor, this);

        _initDefineProp(this, 'id', _descriptor2, this);

        _initDefineProp(this, 'name', _descriptor3, this);

        _initDefineProp(this, 'gameVersion', _descriptor4, this);
    }

    addMod(mod) {
        mod.id = this.lastModId + 1;
        this.mods.push(mod);
    }

    get lastModId() {
        let lastId = 0;
        this.mods.map(mod => {
            lastId = mod.id;
        });
        return lastId;
    }

    get hasMods() {
        return this.mods.length > 0;
    }

    removeMod(id) {
        this.mods.map((mod, index) => {
            if (mod.id === id) {
                this.mods.splice(index, 1);
            }
        });
    }

    hydrate(data) {
        this.id = data.id;
        this.name = data.name;
        this.gameVersion = data.gameVersion;
        data.mods.map(mod => {
            let modObject = new _Mod2.default();
            modObject.hydrate(mod);
            this.mods.push(mod);
        });
    }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'mods', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'id', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 'Default Profile';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'gameVersion', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return "0.0.0";
    }
}), _applyDecoratedDescriptor(_class.prototype, 'addMod', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addMod'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lastModId', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'lastModId'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'hasMods', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'hasMods'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeMod', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'removeMod'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'hydrate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'hydrate'), _class.prototype)), _class);
exports.default = Profile;
//# sourceMappingURL=Profile.js.map
