import {
  ClevergyApiQueryRequest,
  ClevergyApiResponse,
  ClevergyHttpClient,
} from "../../types";

export type GetHouseProfilerRequest = ClevergyApiQueryRequest<{
  cups: string;
  date: string;
}>;

export type GetHouseProfilerResponse = ClevergyApiResponse<{
  userId: string;
  profile?: string;
  kpi: number;
  kpiMargin: number;
  previousProfile?: string;
  nextProfile?: string;
}>;

export const getHouseProfiler = ({
  cups,
  date,
  client,
}: {
  cups: string;
  date: string;
  client: ClevergyHttpClient;
}) => {
  return client<GetHouseProfilerRequest, GetHouseProfilerResponse>({
    route: `house-profiler/${cups}?date=${date}`,
    method: "get",
  });
};
