// Minecraft color code mapping
export const minecraftColorCodes: Record<string, string> = {
  '0': '#000000', // Black
  '1': '#0000AA', // Dark Blue
  '2': '#00AA00', // Dark Green
  '3': '#00AAAA', // Dark Aqua
  '4': '#AA0000', // Dark Red
  '5': '#AA00AA', // Dark Purple
  '6': '#FFAA00', // Gold
  '7': '#AAAAAA', // Gray
  '8': '#555555', // Dark Gray
  '9': '#5555FF', // Blue
  'a': '#55FF55', // Green
  'b': '#55FFFF', // Aqua
  'c': '#FF5555', // Red
  'd': '#FF55FF', // Light Purple
  'e': '#FFFF55', // Yellow
  'f': '#FFFFFF', // White
};

// Parse MOTD with color codes
export function parseMotd(motd: string): string {
  if (!motd) return '';
  
  let html = motd;
  
  // Replace color codes with HTML spans
  html = html.replace(/§([0-9a-f])/gi, (match, code) => {
    const color = minecraftColorCodes[code.toLowerCase()];
    return `<span style="color: ${color}">`;
  });
  
  // Handle formatting codes
  html = html.replace(/§l/gi, '<span style="font-weight: bold">');
  html = html.replace(/§m/gi, '<span style="text-decoration: line-through">');
  html = html.replace(/§n/gi, '<span style="text-decoration: underline">');
  html = html.replace(/§o/gi, '<span style="font-style: italic">');
  html = html.replace(/§r/gi, '</span>'); // Reset
  
  // Close any unclosed spans
  const openSpans = (html.match(/<span/g) || []).length;
  const closeSpans = (html.match(/<\/span>/g) || []).length;
  html += '</span>'.repeat(openSpans - closeSpans);
  
  return html;
}

// Strip color codes from text
export function stripColorCodes(text: string): string {
  if (!text) return '';
  return text.replace(/§[0-9a-fk-or]/gi, '');
}

// Format player count
export function formatPlayerCount(online: number, max: number): string {
  return `${online}/${max}`;
}

// Validate IP address
export function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9a-f]{0,4}:){7}[0-9a-f]{0,4}$/i;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

// Validate domain name
export function isValidDomain(domain: string): boolean {
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?)*$/;
  return domainRegex.test(domain);
}

// Validate Minecraft username
export function isValidUsername(username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  return usernameRegex.test(username);
}

// Format timestamp
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

// Get country flag emoji
export function getCountryFlag(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) return '🌍';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Cache implementation
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class SimpleCache {
  private cache = new Map<string, CacheEntry<any>>();

  set<T>(key: string, data: T, ttlMs: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now() + ttlMs,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() > entry.timestamp) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data as T;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cache = new SimpleCache();

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
