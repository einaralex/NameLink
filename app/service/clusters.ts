import { get } from "../lib/fetch";

export const fetchClustersName = async (address: string): Promise<string> => {
  const response = await get<string>(
    `https://api.clusters.xyz/v0.1/name/${address}`,
    {
      headers: { "X-API-KEY": process.env.CLUSTERS_API_KEY as string },
    }
  );
  return response;
};
