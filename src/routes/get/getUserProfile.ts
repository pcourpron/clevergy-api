import {
  ClevergyApiQueryRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type GetUserProfileRequest = ClevergyApiQueryRequest<{
  userId: string;
}>;

export type GetUserProfileResponse = ClevergyApiResponse<{
  id: string;
  userName: string;
  cups: string;
  dataProvider: boolean;
}>;

export const getUserProfile = ({
  userId,
  client,
}: {
  userId: string;
  client: ClevergyHttpClient;
}) => {
  return client<GetUserProfileRequest, GetUserProfileResponse>({
    route: `user/${userId}/profile`,
    method: "get",
  });
};
