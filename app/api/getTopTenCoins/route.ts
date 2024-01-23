import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      },
    )
  
    const data = await response.json()
    return NextResponse.json(data);
  }