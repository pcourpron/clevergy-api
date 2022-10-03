import {
  ClevergyApiCommandRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type UserRegistrationCommandRequest = ClevergyApiCommandRequest<{
  name: string;
  surname: string;
  dni: string;
}>;

export type UserRegistrationCommandResponse = ClevergyApiResponse<{
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

export const userRegistration = ({
  client,
  ...payload
}: {
  name: string;
  surname: string;
  dni: string;
  client: ClevergyHttpClient;
}) => {
  return client<
    UserRegistrationCommandRequest,
    UserRegistrationCommandResponse
  >({
    route: "complete-user-registration",
    method: "post",
    body: { payload },
  });
};
