import { GetUserHousesRequest, GetUserHousesResponse, GetUserProfileRequest, GetUserProfileResponse } from "./routes";
import { GetHouseConsumptionDetailsRequest, GetHouseConsumptionDetailsResponse } from "./routes/get/getHouseConsumptionDetails";
import { ClevergySdkApi } from "./types";
export interface ClevergySdk {
    getUserHouses: ClevergySdkApi<GetUserHousesRequest, GetUserHousesResponse>;
    getUserProfile: ClevergySdkApi<GetUserProfileRequest, GetUserProfileResponse>;
    getHouseConsumptionDetails: ClevergySdkApi<GetHouseConsumptionDetailsRequest, GetHouseConsumptionDetailsResponse>;
}
export declare const buildClevergyApiSdk: (token?: string | undefined) => {
    setToken: (token: string) => void;
    clevergySdk: ClevergySdk;
};
