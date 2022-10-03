import { ClevergyApiCommandRequest, ClevergyApiResponse, ClevergyHttpClient } from "../../types";
export declare type UserRegistrationCommandRequest = ClevergyApiCommandRequest<{
    name: string;
    surname: string;
    dni: string;
}>;
export declare type UserRegistrationCommandResponse = ClevergyApiResponse<{
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
export declare const getHouseConsumptionDetails: ({ client, ...payload }: {
    name: string;
    surname: string;
    dni: string;
    client: ClevergyHttpClient;
}) => Promise<import("../../types").OutcomeFailure | UserRegistrationCommandResponse>;
