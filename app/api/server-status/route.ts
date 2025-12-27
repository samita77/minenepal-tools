import { NextRequest, NextResponse } from 'next/server';
import { fetchServerStatus } from '@/lib/minecraft-api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json(
      { error: 'Server address is required' },
      { status: 400 }
    );
  }

  try {
    const status = await fetchServerStatus(address);
    return NextResponse.json(status, {
      headers: {
        'Cache-Control': status.online 
          ? 'public, s-maxage=30, stale-while-revalidate=60'
          : 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch server status', online: false },
      { status: 500 }
    );
  }
}
