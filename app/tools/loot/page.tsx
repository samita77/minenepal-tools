'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface LootDrop {
  item: string;
  chance: number;
  quantity: string;
}

interface Mob {
  name: string;
  emoji: string;
  drops: LootDrop[];
}

const mobs: Mob[] = [
  {
    name: 'Zombie',
    emoji: '🧟',
    drops: [
      { item: 'Rotten Flesh', chance: 100, quantity: '0-2' },
      { item: 'Iron Ingot', chance: 2.5, quantity: '1' },
      { item: 'Carrot', chance: 2.5, quantity: '1' },
      { item: 'Potato', chance: 2.5, quantity: '1' },
    ]
  },
  {
    name: 'Skeleton',
    emoji: '💀',
    drops: [
      { item: 'Arrow', chance: 100, quantity: '0-2' },
      { item: 'Bone', chance: 100, quantity: '0-2' },
    ]
  },
  {
    name: 'Creeper',
    emoji: '💥',
    drops: [
      { item: 'Gunpowder', chance: 100, quantity: '0-2' },
      { item: 'Music Disc', chance: 100, quantity: '1 (if killed by skeleton)' },
    ]
  },
  {
    name: 'Enderman',
    emoji: '👾',
    drops: [
      { item: 'Ender Pearl', chance: 100, quantity: '0-1' },
    ]
  },
  {
    name: 'Spider',
    emoji: '🕷️',
    drops: [
      { item: 'String', chance: 100, quantity: '0-2' },
      { item: 'Spider Eye', chance: 33, quantity: '0-1' },
    ]
  },
  {
    name: 'Blaze',
    emoji: '🔥',
    drops: [
      { item: 'Blaze Rod', chance: 100, quantity: '0-1' },
    ]
  },
  {
    name: 'Wither Skeleton',
    emoji: '☠️',
    drops: [
      { item: 'Coal', chance: 100, quantity: '0-1' },
      { item: 'Bone', chance: 100, quantity: '0-2' },
      { item: 'Wither Skeleton Skull', chance: 2.5, quantity: '1' },
    ]
  },
  {
    name: 'Piglin',
    emoji: '🐷',
    drops: [
      { item: 'Raw Porkchop', chance: 100, quantity: '1-3' },
      { item: 'Gold Ingot', chance: 2.5, quantity: '1' },
    ]
  },
];

export default function LootSimulatorPage() {
  const [selectedMob, setSelectedMob] = useState<Mob>(mobs[0]);
  const [simulationResult, setSimulationResult] = useState<string[]>([]);
  const [numKills, setNumKills] = useState(1);

  const simulateLoot = () => {
    const results: string[] = [];
    
    for (let i = 0; i < numKills; i++) {
      selectedMob.drops.forEach(drop => {
        const roll = Math.random() * 100;
        if (roll < drop.chance) {
          const quantity = calculateQuantity(drop.quantity);
          if (quantity > 0) {
            results.push(`${drop.item} x${quantity}`);
          }
        }
      });
    }
    
    setSimulationResult(results);
  };

  const calculateQuantity = (quantityStr: string): number => {
    if (quantityStr.includes('-')) {
      const [min, max] = quantityStr.split('-').map(n => parseInt(n));
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return parseInt(quantityStr) || 0;
  };

  const countItems = () => {
    const counts: { [key: string]: number } = {};
    simulationResult.forEach(result => {
      const match = result.match(/(.+) x(\d+)/);
      if (match) {
        const item = match[1];
        const quantity = parseInt(match[2]);
        counts[item] = (counts[item] || 0) + quantity;
      }
    });
    return counts;
  };

  const itemCounts = countItems();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faDice} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Loot Simulator
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Simulate mob drops and loot tables
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Select Mob</h2>
            <div className="space-y-2">
              {mobs.map((mob, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMob(mob)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedMob.name === mob.name
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className="text-xl mr-2">{mob.emoji}</span>
                  {mob.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedMob.emoji} {selectedMob.name} Drops
            </h2>
            <div className="space-y-3">
              {selectedMob.drops.map((drop, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{drop.item}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quantity: {drop.quantity}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {drop.chance}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Simulate</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of kills: {numKills}
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={numKills}
                  onChange={(e) => setNumKills(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <button
                onClick={simulateLoot}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faDice} className="mr-2" />
                Simulate Loot
              </button>
            </div>
          </div>

          {simulationResult.length > 0 && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
              <div className="space-y-2">
                {Object.entries(itemCounts).map(([item, count], index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-gray-900 dark:text-white">{item}</span>
                    <span className="font-bold text-green-600 dark:text-green-400">x{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 About Loot</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Looting enchantment increases drop quantities</li>
          <li>• Some rare drops require specific conditions (e.g., killed by player)</li>
          <li>• Drop rates may vary by game version</li>
          <li>• This simulator uses approximate drop rates</li>
        </ul>
      </div>
    </div>
  );
}
