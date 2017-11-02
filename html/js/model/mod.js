'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

var _mobx = require('mobx');

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

let Mod = (_class = class Mod {
    constructor() {
        _initDefineProp(this, 'id', _descriptor, this);

        _initDefineProp(this, 'name', _descriptor2, this);

        _initDefineProp(this, 'url', _descriptor3, this);

        _initDefineProp(this, 'description', _descriptor4, this);

        _initDefineProp(this, 'summary', _descriptor5, this);

        _initDefineProp(this, 'gameVersion', _descriptor6, this);

        _initDefineProp(this, 'modVersion', _descriptor7, this);

        _initDefineProp(this, 'fileName', _descriptor8, this);

        _initDefineProp(this, 'active', _descriptor9, this);
    }

    loadDetails(url) {
        this.description = 'Test';
        this.gameVersion = '0.15.0';
        this.modVersion = '1.0.1';
        this.fileName = 'test';
        this.summary = 'test Summary';
        this.name = 'Test Mod';
        this.url = url;
    }

    hydrate(data) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.description = data.description;
        this.summary = data.summary;
        this.gameVersion = data.gameVersion;
        this.modVersion = data.modVersion;
        this.fileName = data.fileName;
        this.active = data.active;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'id', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'url', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'description', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'summary', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'gameVersion', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'modVersion', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'fileName', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'active', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'loadDetails', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'loadDetails'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'hydrate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'hydrate'), _class.prototype)), _class);
exports.default = Mod;
//# sourceMappingURL=mod.js.map
