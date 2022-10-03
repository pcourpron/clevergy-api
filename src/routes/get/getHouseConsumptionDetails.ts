import {
  ClevergyApiQueryRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type GetHouseConsumptionDetailsRequest = ClevergyApiQueryRequest<{
  cups: string;
  startDate: string;
  endDate: string;
}>;

export type GetHouseConsumptionDetailsResponse = ClevergyApiResponse<{
  total: number;
  totalCost: number;
  userPower: {
    kw: number[];
    cost: number;
    percentage: number;
  };
  details: {
    device: string;
    label: string;
    kwh: number;
    cost: number;
    percentage: number;
  }[];
}>;

export const getHouseConsumptionDetails = ({
  cups,
  startDate,
  endDate,
  client,
}: {
  cups: string;
  startDate: string;
  endDate: string;
  client: ClevergyHttpClient;
}) => {
  return client<
    GetHouseConsumptionDetailsRequest,
    GetHouseConsumptionDetailsResponse
  >({
    route: `disaggregation/${cups}?startDate=${startDate}&endDate=${endDate}`,
    method: "get",
  });
};
