import { ClevergyApiQueryRequest, ClevergyApiResponse, ClevergyHttpClient } from "../../types";
export declare type GetHouseConsumptionDetailsRequest = ClevergyApiQueryRequest<{
    cups: string;
    startDate: string;
    endDate: string;
}>;
export declare type GetHouseConsumptionDetailsResponse = ClevergyApiResponse<{
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
export declare const getHouseConsumptionDetails: ({ cups, startDate, endDate, client, }: {
    cups: string;
    startDate: string;
    endDate: string;
    client: ClevergyHttpClient;
}) => Promise<import("../../types").OutcomeFailure | GetHouseConsumptionDetailsResponse>;
