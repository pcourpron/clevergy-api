import {
  ClevergyApiQueryRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type GetUserHousesRequest = ClevergyApiQueryRequest<{
  userId: string;
}>;

export type GetUserHousesResponse = ClevergyApiResponse<{
  dni: string;
  houses: {
    id: string;
    cups: string;
    address: string | null;
    postalCode: string;
    contractedPower: number[];
  }[];
}>;
export const getUserHouses = ({
  userId,
  client,
}: {
  userId: string;
  client: ClevergyHttpClient;
}) => {
  return client<GetUserHousesRequest, GetUserHousesResponse>({
    route: `users/${userId}/houses`,
    method: "get",
  });
};
