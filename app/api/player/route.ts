import { NextRequest, NextResponse } from 'next/server';
import {
  fetchPlayerUUID,
  fetchPlayerProfile,
  checkUsernameAvailability,
  fetchNameHistory,
} from '@/lib/minecraft-api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get('username');
  const uuid = searchParams.get('uuid');
  const action = searchParams.get('action') || 'uuid';

  try {
    if (action === 'check-availability' && username) {
      const result = await checkUsernameAvailability(username);
      return NextResponse.json(result, {
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
        },
      });
    }

    if (action === 'name-history' && uuid) {
      const history = await fetchNameHistory(uuid);
      return NextResponse.json(history, {
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
        },
      });
    }

    if (action === 'profile') {
      if (uuid) {
        const profile = await fetchPlayerProfile(uuid);
        return NextResponse.json(profile, {
          headers: {
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
          },
        });
      } else if (username) {
        const uuidData = await fetchPlayerUUID(username);
        const profile = await fetchPlayerProfile(uuidData.id);
        return NextResponse.json(profile, {
          headers: {
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
          },
        });
      }
    }

    if (username) {
      const uuidData = await fetchPlayerUUID(username);
      return NextResponse.json(uuidData, {
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
        },
      });
    }

    return NextResponse.json(
      { error: 'Username or UUID is required' },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch player data' },
      { status: error.message === 'Player not found' ? 404 : 500 }
    );
  }
}
