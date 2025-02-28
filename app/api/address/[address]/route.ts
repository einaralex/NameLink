import { fetchClustersName } from "@/app/service/clusters";
import { fetchEns } from "@/app/service/ens";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { address: string } }
) {
  const { address } = params;

  const ens = await fetchEns(address);
  const cluster = await fetchClustersName(address);

  if (!ens && !cluster) {
    return NextResponse.json(
      {
        error: "Not found",
        message: "No name found for the given address",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    address,
    ens: ens || null,
    cluster: cluster || null,
  });
}
