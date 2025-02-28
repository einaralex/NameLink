import { ExternalEnsDataResponse } from "../types/external";
import { get } from "../lib/fetch";

export async function fetchEns(address: string): Promise<string> {
  const { ens } = await get<ExternalEnsDataResponse>(
    `https://api.ensdata.net/${address}`
  );
  return ens;
}
