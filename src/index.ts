import { buildClevergyHttpClient } from "./httpClient";
import {
  getUserHouses,
  GetUserHousesRequest,
  GetUserHousesResponse,
  getUserProfile,
  GetUserProfileRequest,
  GetUserProfileResponse,
} from "./routes";
import {
  getHouseConsumptionDetails,
  GetHouseConsumptionDetailsRequest,
  GetHouseConsumptionDetailsResponse,
} from "./routes/get/getHouseConsumptionDetails";

import { ClevergySdkApi } from "./types";

export interface ClevergySdk {
  getUserHouses: ClevergySdkApi<GetUserHousesRequest, GetUserHousesResponse>;
  getUserProfile: ClevergySdkApi<GetUserProfileRequest, GetUserProfileResponse>;
  getHouseConsumptionDetails: ClevergySdkApi<
    GetHouseConsumptionDetailsRequest,
    GetHouseConsumptionDetailsResponse
  >;
}

export const buildClevergyApiSdk = (token?: string) => {
  const { client, setToken } = buildClevergyHttpClient(token);

  const clevergySdk: ClevergySdk = {
    getUserHouses: ({ payload: { userId } }) => {
      return getUserHouses({ userId, client });
    },
    getUserProfile: ({ payload: { userId } }) => {
      return getUserProfile({ userId, client });
    },
    getHouseConsumptionDetails: ({ payload: { cups, endDate, startDate } }) => {
      return getHouseConsumptionDetails({ cups, endDate, startDate, client });
    },
  };

  return {
    setToken,
    clevergySdk,
  };
};
