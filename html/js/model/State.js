'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

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

let State = (_class = class State {
    constructor() {
        _initDefineProp(this, 'page', _descriptor, this);

        _initDefineProp(this, 'prevPage', _descriptor2, this);

        _initDefineProp(this, 'queue', _descriptor3, this);

        _initDefineProp(this, 'btn', _descriptor4, this);

        _initDefineProp(this, 'working', _descriptor5, this);

        _initDefineProp(this, 'displayMenu', _descriptor6, this);

        _initDefineProp(this, 'factorioPassword', _descriptor7, this);
    }

    addToQueue(todo) {
        this.queue.push(todo);
    }

    get nextInQueue() {
        return this.queue.length > 0 ? this.queue[0] : undefined;
    }

    acceptTask() {
        let todo = this.queue[0];
        this.queue = this.queue.slice(1, this.queue.length);
        return todo;
    }

    addButton(id) {
        this.btn = (0, _mobx.extendObservable)(this.btn, {
            [id]: {
                working: false
            }
        });
    }

    setBtnWorking(id) {
        this.btn[id].working = true;
    }

    setBtnNotWorking(id) {
        this.btn[id].working = false;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'page', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return 'main';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'prevPage', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'queue', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'btn', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return {};
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'working', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'displayMenu', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'factorioPassword', [_mobx.observable], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _applyDecoratedDescriptor(_class.prototype, 'addToQueue', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addToQueue'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextInQueue', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'nextInQueue'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'acceptTask', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'acceptTask'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addButton', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addButton'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setBtnWorking', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setBtnWorking'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setBtnNotWorking', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setBtnNotWorking'), _class.prototype)), _class);
exports.default = State;
//# sourceMappingURL=State.js.map
