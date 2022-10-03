export interface ClevergyHttpClient {
    <TRequest extends ClevergyApiCommandRequest | ClevergyApiQueryRequest, TResponse extends ClevergyApiResponse>(params: {
        route: string;
        method: "put" | "post" | "patch" | "delete";
        body: TRequest;
    } | {
        route: string;
        method: "get";
    }): Promise<TResponse | OutcomeFailure>;
}
export interface ClevergyApiCommandRequest<TPayload = Record<string, unknown>> {
    payload: TPayload;
    headers?: {
        [key: string]: unknown;
    };
}
export interface ClevergyApiQueryRequest<TPayload = Record<string, unknown>> {
    payload: TPayload;
    headers?: {
        [key: string]: unknown;
    };
}
export interface ClevergyApiResponse<TResponse = Record<string, unknown>> {
    outcome: "SUCCESS";
    data: TResponse;
}
export interface OutcomeFailure {
    outcome: "FAILURE";
    /**
     * It's a specific error code relative to the error.
     */
    errorCode: string;
    /**
     * The explanation why the error happened.
     */
    reason: string;
    /**
     * You can put anything usefull to understand the error.
     * You should not let it to any and type it in your implementation.
     */
    context?: any;
}
export interface ClevergySdkApi<TRequest extends ClevergyApiCommandRequest | ClevergyApiQueryRequest, TResponse extends ClevergyApiResponse> {
    (request: TRequest): Promise<TResponse | OutcomeFailure>;
}
