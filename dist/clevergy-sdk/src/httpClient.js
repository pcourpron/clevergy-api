"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClevergyHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
function createAxiosInstance(params) {
    const { token } = params !== null && params !== void 0 ? params : {};
    const headers = {};
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    const axiosConfig = {
        headers,
    };
    return axios_1.default.create(axiosConfig);
}
function buildClevergyHttpClient(token) {
    const axiosInstance = createAxiosInstance({ token });
    function httpClient(params) {
        async function internalCall() {
            const { route } = params;
            const requestUrl = `https://api.clever.gy/${route}`;
            try {
                let result;
                if (params.method === "get") {
                    result = await axiosInstance[params.method](requestUrl);
                }
                else {
                    const { body } = params;
                    result = await axiosInstance[params.method](requestUrl, body);
                }
                return result.data;
            }
            catch (err) {
                // status codes > 299
                return handleErrors(err);
            }
        }
        return internalCall();
    }
    function setToken(token) {
        axiosInstance.interceptors.request.use(function (config) {
            if (config.headers)
                config.headers.Authorization = `Bearer ${token}`;
            else {
                config.headers = {
                    Authorization: `Bearer ${token}`,
                };
            }
            return config;
        });
    }
    return {
        client: httpClient,
        setToken,
    };
}
exports.buildClevergyHttpClient = buildClevergyHttpClient;
function handleErrors(error) {
    var _a, _b;
    if ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) {
        if (((_b = error.response.data) === null || _b === void 0 ? void 0 : _b.outcome) === "FAILURE") {
            // TODO: do we want to hide the context from the sdk caller here?
            return error.response.data;
        }
        else {
            return {
                outcome: "FAILURE",
                errorCode: "INTERNAL_SERVER_ERROR",
                reason: error.message,
                context: error.response.data,
            };
        }
    }
    return {
        outcome: "FAILURE",
        errorCode: "NETWORK_ERROR",
        reason: error.message,
        context: error.stack,
    };
}
//# sourceMappingURL=httpClient.js.map