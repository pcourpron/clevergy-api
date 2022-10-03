import {
  ClevergyApiCommandRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type UpdateTipCommandRequest = ClevergyApiCommandRequest<{
  id: string;
  like: boolean;
  cups: string;
  token: string;
}>;

export type UpdateTipCommandResponse = ClevergyApiResponse;

export const updateTip = ({
  client,
  ...payload
}: {
  id: string;
  like: boolean;
  cups: string;
  token: string;
  client: ClevergyHttpClient;
}) => {
  return client<UpdateTipCommandRequest, UpdateTipCommandResponse>({
    route: `tips/${payload.id}/feedback`,
    method: "post",
    body: { payload },
  });
};
