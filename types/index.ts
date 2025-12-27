// Tool definition interface
export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string; // FontAwesome icon name
  href: string;
  category: 'server' | 'player' | 'world' | 'utility' | 'community';
  phase: 1 | 2;
}

// Server status types
export interface ServerStatus {
  online: boolean;
  hostname?: string;
  port?: number;
  version?: string;
  protocol?: number;
  players?: {
    online: number;
    max: number;
    list?: string[];
  };
  motd?: {
    raw: string;
    clean: string;
    html: string;
  };
  icon?: string; // base64 encoded
  country?: string;
  countryCode?: string;
}

// Player types
export interface PlayerData {
  uuid: string;
  name: string;
  skin?: {
    url: string;
    data: string;
  };
  cape?: {
    url: string;
  };
}

// Minecraft versions
export interface MinecraftVersion {
  version: string;
  protocol: number;
  releaseDate?: string;
}

// Enchantment types
export interface Enchantment {
  id: string;
  name: string;
  maxLevel: number;
  description: string;
  applicableTo: string[];
  incompatibleWith: string[];
}

// Biome types
export interface Biome {
  id: string;
  name: string;
  temperature: number;
  precipitation: string;
  description: string;
}

// Loot table types
export interface LootEntry {
  item: string;
  chance: number;
  minAmount: number;
  maxAmount: number;
}
