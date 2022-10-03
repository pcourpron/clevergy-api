import { buildClevergyHttpClient } from "./httpClient";
import {
  getHouseProfiler,
  GetHouseProfilerRequest,
  GetHouseProfilerResponse,
  getUserHouses,
  GetUserHousesRequest,
  GetUserHousesResponse,
  getUserProfile,
  GetUserProfileRequest,
  GetUserProfileResponse,
  updateTip,
} from "./routes";
import {
  getHouseConsumptionDetails,
  GetHouseConsumptionDetailsRequest,
  GetHouseConsumptionDetailsResponse,
} from "./routes/get/getHouseConsumptionDetails";
import { GetTipRequest, GetTipResponse, getTip } from "./routes/get/getTips";
import {
  UpdateTipCommandRequest,
  UpdateTipCommandResponse,
} from "./routes/post/updateTip";
import {
  userRegistration,
  UserRegistrationCommandRequest,
  UserRegistrationCommandResponse,
} from "./routes/post/userRegistration";

import { ClevergySdkApi } from "./types";

export interface ClevergySdk {
  getUserHouses: ClevergySdkApi<GetUserHousesRequest, GetUserHousesResponse>;
  getUserProfile: ClevergySdkApi<GetUserProfileRequest, GetUserProfileResponse>;
  getHouseConsumptionDetails: ClevergySdkApi<
    GetHouseConsumptionDetailsRequest,
    GetHouseConsumptionDetailsResponse
  >;
  getTip: ClevergySdkApi<GetTipRequest, GetTipResponse>;
  getHouseProfile: ClevergySdkApi<
    GetHouseProfilerRequest,
    GetHouseProfilerResponse
  >;
  userRegistration: ClevergySdkApi<
    UserRegistrationCommandRequest,
    UserRegistrationCommandResponse
  >;
  updateTip: ClevergySdkApi<UpdateTipCommandRequest, UpdateTipCommandResponse>;
}
export * from "./types";

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
    getTip: ({ payload: { cups } }) => {
      return getTip({ cups, client });
    },
    userRegistration: ({ payload: { name, surname, dni } }) => {
      return userRegistration({ name, surname, dni, client });
    },
    getHouseProfile: ({ payload: { cups, date } }) => {
      return getHouseProfiler({ cups, date, client });
    },
    updateTip: ({ payload }) => {
      return updateTip({ ...payload, client });
    },
  };

  return {
    setToken,
    clevergySdk,
  };
};
