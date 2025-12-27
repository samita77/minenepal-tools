'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Potion {
  name: string;
  ingredient: string;
  effect: string;
  duration: string;
  emoji: string;
}

const potions: Potion[] = [
  { name: 'Healing', ingredient: 'Glistering Melon', effect: 'Restores 4 hearts', duration: 'Instant', emoji: '❤️' },
  { name: 'Regeneration', ingredient: 'Ghast Tear', effect: 'Restores health over time', duration: '45 seconds', emoji: '💚' },
  { name: 'Speed', ingredient: 'Sugar', effect: 'Increases movement speed', duration: '3 minutes', emoji: '⚡' },
  { name: 'Fire Resistance', ingredient: 'Magma Cream', effect: 'Immunity to fire and lava', duration: '3 minutes', emoji: '🔥' },
  { name: 'Strength', ingredient: 'Blaze Powder', effect: 'Increases melee damage', duration: '3 minutes', emoji: '💪' },
  { name: 'Night Vision', ingredient: 'Golden Carrot', effect: 'See clearly in darkness', duration: '3 minutes', emoji: '👁️' },
  { name: 'Invisibility', ingredient: 'Fermented Spider Eye (on Night Vision)', effect: 'Become invisible', duration: '3 minutes', emoji: '👻' },
  { name: 'Water Breathing', ingredient: 'Pufferfish', effect: 'Breathe underwater', duration: '3 minutes', emoji: '🐟' },
  { name: 'Leaping', ingredient: 'Rabbit\'s Foot', effect: 'Jump higher', duration: '3 minutes', emoji: '🐰' },
  { name: 'Slow Falling', ingredient: 'Phantom Membrane', effect: 'Fall slowly', duration: '1.5 minutes', emoji: '🪶' },
  { name: 'Poison', ingredient: 'Spider Eye', effect: 'Deals damage over time', duration: '45 seconds', emoji: '☠️' },
  { name: 'Weakness', ingredient: 'Fermented Spider Eye', effect: 'Reduces melee damage', duration: '1.5 minutes', emoji: '😵' },
  { name: 'Harming', ingredient: 'Fermented Spider Eye (on Healing/Poison)', effect: 'Deals instant damage', duration: 'Instant', emoji: '💀' },
  { name: 'Slowness', ingredient: 'Fermented Spider Eye (on Speed/Leaping)', effect: 'Decreases movement speed', duration: '1.5 minutes', emoji: '🐌' },
  { name: 'Turtle Master', ingredient: 'Turtle Shell', effect: 'Resistance IV + Slowness IV', duration: '40 seconds', emoji: '🐢' },
];

export default function PotionCalculatorPage() {
  const [search, setSearch] = useState('');
  const [extended, setExtended] = useState(false);
  const [upgraded, setUpgraded] = useState(false);

  const filteredPotions = potions.filter(potion =>
    potion.name.toLowerCase().includes(search.toLowerCase()) ||
    potion.ingredient.toLowerCase().includes(search.toLowerCase())
  );

  const calculateDuration = (baseDuration: string) => {
    if (baseDuration === 'Instant') return baseDuration;
    
    const match = baseDuration.match(/(\d+\.?\d*)\s*(minutes?|seconds?)/);
    if (!match) return baseDuration;
    
    let value = parseFloat(match[1]);
    const unit = match[2];
    
    if (extended) {
      value = value * 8/3;
    }
    
    return `${value} ${unit}`;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faFlask} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Potion Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Calculate potion effects and durations
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search potions..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white mb-4"
        />

        <div className="flex gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={extended}
              onChange={(e) => setExtended(e.target.checked)}
              className="mr-2 w-4 h-4"
            />
            <span className="text-gray-700 dark:text-gray-300">Extended (Redstone)</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={upgraded}
              onChange={(e) => setUpgraded(e.target.checked)}
              className="mr-2 w-4 h-4"
            />
            <span className="text-gray-700 dark:text-gray-300">Upgraded (Glowstone)</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPotions.map((potion, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{potion.emoji}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {potion.name}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Ingredient:</span>
                <p className="text-gray-900 dark:text-white font-medium">{potion.ingredient}</p>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Effect:</span>
                <p className="text-gray-900 dark:text-white">{potion.effect}{upgraded && potion.duration !== 'Instant' ? ' (Enhanced)' : ''}</p>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                <p className="text-gray-900 dark:text-white font-mono">{calculateDuration(potion.duration)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🧪 Brewing Tips</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Start with a Water Bottle in a Brewing Stand</li>
          <li>• Add Nether Wart to create an Awkward Potion (base for most potions)</li>
          <li>• Add the main ingredient for the desired effect</li>
          <li>• Add Redstone to extend duration (8/3x longer)</li>
          <li>• Add Glowstone Dust to upgrade potency (e.g., Healing I → Healing II)</li>
          <li>• Add Gunpowder to make splash potions</li>
          <li>• Add Dragon&apos;s Breath to make lingering potions</li>
        </ul>
      </div>
    </div>
  );
}
