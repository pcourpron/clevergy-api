"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserHouses = void 0;
const getUserHouses = ({ userId, client, }) => {
    return client({
        route: `users/${userId}/houses`,
        method: "get",
    });
};
exports.getUserHouses = getUserHouses;
//# sourceMappingURL=getUserHouses.js.map