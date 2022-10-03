"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = void 0;
const getUserProfile = ({ userId, client, }) => {
    return client({
        route: `user/${userId}/profile`,
        method: "get",
    });
};
exports.getUserProfile = getUserProfile;
//# sourceMappingURL=getUserProfile.js.map