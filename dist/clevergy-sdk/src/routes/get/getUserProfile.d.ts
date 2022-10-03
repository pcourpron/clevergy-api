import { ClevergyApiQueryRequest, ClevergyApiResponse, ClevergyHttpClient } from "../../types";
export declare type GetUserProfileRequest = ClevergyApiQueryRequest<{
    userId: string;
}>;
export declare type GetUserProfileResponse = ClevergyApiResponse<{
    id: string;
    userName: string;
    cups: string;
    dataProvider: boolean;
}>;
export declare const getUserProfile: ({ userId, client, }: {
    userId: string;
    client: ClevergyHttpClient;
}) => Promise<import("../../types").OutcomeFailure | GetUserProfileResponse>;
