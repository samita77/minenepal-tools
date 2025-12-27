'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Biome {
  name: string;
  emoji: string;
  description: string;
  features: string[];
  temperature: string;
  structures: string[];
}

const biomes: Biome[] = [
  {
    name: 'Plains',
    emoji: '🌾',
    description: 'Flat grasslands with occasional trees',
    features: ['Grass', 'Flowers', 'Villages'],
    temperature: 'Temperate',
    structures: ['Villages', 'Pillager Outposts']
  },
  {
    name: 'Forest',
    emoji: '🌲',
    description: 'Dense areas filled with oak and birch trees',
    features: ['Oak Trees', 'Birch Trees', 'Flowers'],
    temperature: 'Temperate',
    structures: ['Woodland Mansions']
  },
  {
    name: 'Desert',
    emoji: '🏜️',
    description: 'Sandy biome with little vegetation',
    features: ['Sand', 'Cacti', 'Dead Bushes'],
    temperature: 'Hot',
    structures: ['Desert Temples', 'Desert Villages', 'Desert Wells']
  },
  {
    name: 'Taiga',
    emoji: '🌲',
    description: 'Cold forest with spruce trees',
    features: ['Spruce Trees', 'Ferns', 'Sweet Berry Bushes'],
    temperature: 'Cold',
    structures: ['Villages', 'Pillager Outposts']
  },
  {
    name: 'Jungle',
    emoji: '🌴',
    description: 'Dense tropical forest with tall trees',
    features: ['Jungle Trees', 'Vines', 'Melons', 'Bamboo'],
    temperature: 'Hot',
    structures: ['Jungle Temples', 'Jungle Villages']
  },
  {
    name: 'Swamp',
    emoji: '🐸',
    description: 'Murky water areas with lily pads',
    features: ['Oak Trees', 'Lily Pads', 'Vines', 'Slimes'],
    temperature: 'Temperate',
    structures: ['Swamp Huts', 'Fossils']
  },
  {
    name: 'Mountains',
    emoji: '⛰️',
    description: 'High altitude terrain with snow peaks',
    features: ['Stone', 'Snow', 'Emerald Ore', 'Goats'],
    temperature: 'Cold/Frozen',
    structures: ['None']
  },
  {
    name: 'Ocean',
    emoji: '🌊',
    description: 'Deep water biome',
    features: ['Water', 'Kelp', 'Sea Grass', 'Fish'],
    temperature: 'Varies',
    structures: ['Ocean Monuments', 'Ocean Ruins', 'Shipwrecks']
  },
  {
    name: 'Mushroom Fields',
    emoji: '🍄',
    description: 'Rare biome with giant mushrooms',
    features: ['Mycelium', 'Giant Mushrooms', 'Mooshrooms'],
    temperature: 'Temperate',
    structures: ['None']
  },
  {
    name: 'Savanna',
    emoji: '🦒',
    description: 'Warm grassland with acacia trees',
    features: ['Acacia Trees', 'Tall Grass', 'Llamas'],
    temperature: 'Hot',
    structures: ['Villages', 'Pillager Outposts']
  },
  {
    name: 'Badlands',
    emoji: '🏜️',
    description: 'Desert-like with colorful terracotta',
    features: ['Red Sand', 'Terracotta', 'Gold Ore'],
    temperature: 'Hot',
    structures: ['Mineshafts']
  },
  {
    name: 'Ice Spikes',
    emoji: '❄️',
    description: 'Frozen plains with tall ice structures',
    features: ['Ice', 'Packed Ice', 'Ice Spikes'],
    temperature: 'Frozen',
    structures: ['Igloos']
  },
];

export default function BiomeFinderPage() {
  const [search, setSearch] = useState('');
  const [selectedBiome, setSelectedBiome] = useState<Biome | null>(null);

  const filteredBiomes = biomes.filter(biome =>
    biome.name.toLowerCase().includes(search.toLowerCase()) ||
    biome.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faTree} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Biome Finder
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore Minecraft biomes and their features
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search biomes..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {selectedBiome && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedBiome.emoji} {selectedBiome.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{selectedBiome.description}</p>
            </div>
            <button
              onClick={() => setSelectedBiome(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🌡️ Temperature</h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedBiome.temperature}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🌿 Features</h3>
              <ul className="text-sm space-y-1">
                {selectedBiome.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">• {feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🏛️ Structures</h3>
              <ul className="text-sm space-y-1">
                {selectedBiome.structures.map((structure, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">• {structure}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBiomes.map((biome, index) => (
          <button
            key={index}
            onClick={() => setSelectedBiome(biome)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all text-left hover:scale-105"
          >
            <div className="text-4xl mb-3">{biome.emoji}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {biome.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {biome.description}
            </p>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                {biome.temperature}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🗺️ Finding Biomes</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Use the <code>/locatebiome</code> command in-game to find specific biomes</li>
          <li>• Biomes are generated based on temperature and humidity</li>
          <li>• Some biomes are very rare (e.g., Mushroom Fields)</li>
          <li>• Use online seed finders to locate biomes before generating a world</li>
        </ul>
      </div>
    </div>
  );
}
