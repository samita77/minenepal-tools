import axios from 'axios';
import { cache } from './utils';

const MCSRVSTAT_API = 'https://api.mcsrvstat.us/3';
const MOJANG_API = 'https://api.mojang.com';
const CRAFATAR_API = 'https://crafatar.com';

// Fetch server status
export async function fetchServerStatus(address: string) {
  const cacheKey = `server:${address}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(`${MCSRVSTAT_API}/${address}`, {
      timeout: 10000,
    });
    
    const ttl = response.data.online ? 30000 : 60000; // 30s for online, 60s for offline
    cache.set(cacheKey, response.data, ttl);
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch server status');
  }
}

// Fetch player UUID
export async function fetchPlayerUUID(username: string) {
  const cacheKey = `uuid:${username.toLowerCase()}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(
      `${MOJANG_API}/users/profiles/minecraft/${username}`,
      { timeout: 5000 }
    );
    
    cache.set(cacheKey, response.data, 86400000); // 24h cache
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('Player not found');
    }
    throw new Error('Failed to fetch player UUID');
  }
}

// Fetch player profile
export async function fetchPlayerProfile(uuid: string) {
  const cacheKey = `profile:${uuid}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(
      `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`,
      { timeout: 5000 }
    );
    
    cache.set(cacheKey, response.data, 86400000); // 24h cache
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch player profile');
  }
}

// Get player skin URL
export function getPlayerSkinUrl(uuid: string, size: number = 128): string {
  return `${CRAFATAR_API}/skins/${uuid}?size=${size}&overlay`;
}

// Get player head URL
export function getPlayerHeadUrl(uuid: string, size: number = 64): string {
  return `${CRAFATAR_API}/avatars/${uuid}?size=${size}&overlay`;
}

// Get player body URL
export function getPlayerBodyUrl(uuid: string, size: number = 128): string {
  return `${CRAFATAR_API}/renders/body/${uuid}?size=${size}&overlay`;
}

// Check username availability
export async function checkUsernameAvailability(username: string) {
  try {
    await fetchPlayerUUID(username);
    return { available: false, username };
  } catch (error) {
    return { available: true, username };
  }
}

// Fetch name history
export async function fetchNameHistory(uuid: string) {
  const cacheKey = `namehistory:${uuid}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(
      `${MOJANG_API}/user/profiles/${uuid}/names`,
      { timeout: 5000 }
    );
    
    cache.set(cacheKey, response.data, 86400000); // 24h cache
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch name history');
  }
}
