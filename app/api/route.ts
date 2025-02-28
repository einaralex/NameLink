import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "NameLink",
    description: "Web3 address name resolution",
    links: {
      github: "https://github.com/einaralex/namelink",
      telegram: "https://t.me/einaralex",
    },
  });
}
