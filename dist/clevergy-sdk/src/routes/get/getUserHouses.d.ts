import { ClevergyApiQueryRequest, ClevergyApiResponse, ClevergyHttpClient } from "../../types";
export declare type GetUserHousesRequest = ClevergyApiQueryRequest<{
    userId: string;
}>;
export declare type GetUserHousesResponse = ClevergyApiResponse<{
    dni: string;
    houses: {
        id: string;
        cups: string;
        address: string | null;
        postalCode: string;
        contractedPower: number[];
    }[];
}>;
export declare const getUserHouses: ({ userId, client, }: {
    userId: string;
    client: ClevergyHttpClient;
}) => Promise<import("../../types").OutcomeFailure | GetUserHousesResponse>;
