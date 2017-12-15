'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
let FactorioLoginController = class FactorioLoginController {
    constructor() {
        this.loginEndpoint = 'https://auth.factorio.com/api-login';
    }

    getAuthToken(username, password) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: this.loginEndpoint,
                data: {
                    username: username,
                    password: password,
                    api_version: '2',
                    require_game_ownership: true
                }
            }).done(data => {
                resolve(data.token);
            }).fail(data => {
                let error;
                if (data.status === 401) {
                    error = new Error('Unauthorized');
                } else {
                    error = new Error('Unknown Error');
                }
                reject(error);
            });
        });
    }
};
exports.default = FactorioLoginController;
//# sourceMappingURL=FactorioLoginController.js.map
