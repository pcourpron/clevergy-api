"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHouseConsumptionDetails = void 0;
const getHouseConsumptionDetails = ({ cups, startDate, endDate, client, }) => {
    return client({
        route: `disaggregation/${cups}?startDate=${startDate}&endDate=${endDate}`,
        method: "get",
    });
};
exports.getHouseConsumptionDetails = getHouseConsumptionDetails;
//# sourceMappingURL=getHouseConsumptionDetails.js.map