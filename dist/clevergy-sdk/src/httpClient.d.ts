import { ClevergyHttpClient } from "./types";
export declare function buildClevergyHttpClient(token?: string): {
    client: ClevergyHttpClient;
    setToken(token: string): void;
};
