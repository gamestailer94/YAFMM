'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FactorioLoginController = class FactorioLoginController {
    constructor() {
        this.loginEndpoint = 'https://auth.factorio.com/api-login';
    }

    getAuthToken(username, password) {
        return new Promise((resolve, reject) => {
            _axios2.default.post(this.loginEndpoint, {
                username: username,
                password: password,
                require_game_ownership: true
            }, {
                transformRequest: data => {
                    let formData = new FormData();
                    for (let key in data) {
                        formData.append(key, data[key]);
                    }
                    return formData;
                }
            }).then(res => {
                if (res.data[0]) {
                    resolve(res.data[0]);
                }
                return new Promise.reject(new Error());
            }).catch(res => {
                let error;
                if (res.response && res.response.status === 401) {
                    error = new Error('Unauthorized');
                } else {
                    error = new Error('Unknown Error');
                }
                reject(error);
            });
        });
    }

    isTokenValid(token) {
        return new Promise((resolve, reject) => {});
    }
};
exports.default = FactorioLoginController;
//# sourceMappingURL=FactorioLoginController.js.map
