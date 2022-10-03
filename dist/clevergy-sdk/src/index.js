"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClevergyApiSdk = void 0;
const httpClient_1 = require("./httpClient");
const routes_1 = require("./routes");
const getHouseConsumptionDetails_1 = require("./routes/get/getHouseConsumptionDetails");
const buildClevergyApiSdk = (token) => {
    const { client, setToken } = (0, httpClient_1.buildClevergyHttpClient)(token);
    const clevergySdk = {
        getUserHouses: ({ payload: { userId } }) => {
            return (0, routes_1.getUserHouses)({ userId, client });
        },
        getUserProfile: ({ payload: { userId } }) => {
            return (0, routes_1.getUserProfile)({ userId, client });
        },
        getHouseConsumptionDetails: ({ payload: { cups, endDate, startDate } }) => {
            return (0, getHouseConsumptionDetails_1.getHouseConsumptionDetails)({ cups, endDate, startDate, client });
        },
    };
    return {
        setToken,
        clevergySdk,
    };
};
exports.buildClevergyApiSdk = buildClevergyApiSdk;
//# sourceMappingURL=index.js.map