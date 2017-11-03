'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

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

let GameVersion = (_class = class GameVersion {
    constructor() {
        _initDefineProp(this, 'version', _descriptor, this);

        _initDefineProp(this, 'path', _descriptor2, this);

        _initDefineProp(this, 'downloaded', _descriptor3, this);
    }

    hydrate(data) {
        this.version = data.version;
        this.path = data.path;
        this.downloaded = data.downloaded;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'version', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '0.0.0';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'path', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'downloaded', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'hydrate', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'hydrate'), _class.prototype)), _class);
exports.default = GameVersion;
//# sourceMappingURL=GameVersion.js.map
