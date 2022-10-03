import {
  ClevergyApiQueryRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type GetTipRequest = ClevergyApiQueryRequest<{
  cups: string;
}>;

export type GetTipResponse = ClevergyApiResponse<{
  id: string;
  title: string;
  tag: string;
  text: string;
  like: boolean;
}>;
export const getTip = ({
  cups,
  client,
}: {
  cups: string;
  client: ClevergyHttpClient;
}) => {
  return client<GetTipRequest, GetTipResponse>({
    route: `tips/${cups}`,
    method: "get",
  });
};
