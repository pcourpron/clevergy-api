import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
  ClevergyApiCommandRequest,
  ClevergyApiQueryRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
  OutcomeFailure,
} from "./types";

function createAxiosInstance(params?: { token?: string }) {
  const { token } = params ?? {};
  const headers: Record<string, string> = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const axiosConfig: AxiosRequestConfig = {
    headers,
  };

  return axios.create(axiosConfig);
}

export function buildClevergyHttpClient(token?: string): {
  client: ClevergyHttpClient;
  setToken(token: string): void;
} {
  const axiosInstance = createAxiosInstance({ token });
  function httpClient<
    TRequest extends ClevergyApiCommandRequest | ClevergyApiQueryRequest,
    TResponse extends ClevergyApiResponse
  >(
    params:
      | {
          route: string;
          method: "put" | "post" | "patch" | "delete";
          body: TRequest;
        }
      | {
          route: string;
          method: "get";
          headers?: TRequest["headers"];
        }
  ) {
    async function internalCall(): Promise<TResponse | OutcomeFailure> {
      const { route } = params;

      const requestUrl = `https://api.clever.gy/${route}`;
      try {
        let result;

        if (params.method === "get") {
          result = await axiosInstance[params.method]<TResponse>(requestUrl);
        } else {
          const { body } = params;
          result = await axiosInstance[params.method]<TResponse>(
            requestUrl,
            body
          );
        }
        return result.data;
      } catch (err: any) {
        // status codes > 299
        return handleErrors(err);
      }
    }

    return internalCall();
  }

  function setToken(token: string) {
    axiosInstance.interceptors.request.use(function (config) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`;
      else {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    });
  }

  return {
    client: httpClient,
    setToken,
  };
}
function handleErrors(error: AxiosError<OutcomeFailure>): OutcomeFailure {
  if (error.response?.status) {
    if (error.response.data?.outcome === "FAILURE") {
      // TODO: do we want to hide the context from the sdk caller here?
      return error.response.data;
    } else {
      return {
        outcome: "FAILURE",
        errorCode: "INTERNAL_SERVER_ERROR",
        reason: error.message,
        context: error.response.data,
      };
    }
  }

  return {
    outcome: "FAILURE",
    errorCode: "NETWORK_ERROR",
    reason: error.message,
    context: error.stack,
  };
}
