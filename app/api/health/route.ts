import { fetchClustersName } from "@/app/service/clusters";
import { fetchEns } from "@/app/service/ens";
import { NextResponse } from "next/server";

export async function GET() {
  const address = "0xB64Fed2aFF534D5320BF401d0D5B93Ed7AbCf13E";
  const ens = await fetchEns(address);
  const clusters = await fetchClustersName(address);
  return NextResponse.json({
    ens: ens === "einsi.eth" ? "OK" : "ERROR",
    clusters: clusters === "einar/hot" ? "OK" : "ERROR",
    timestamp: new Date().toISOString(),
  });
}
