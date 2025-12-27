'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const enchantments = {
  sword: ['Sharpness', 'Smite', 'Bane of Arthropods', 'Knockback', 'Fire Aspect', 'Looting', 'Sweeping Edge', 'Unbreaking', 'Mending'],
  axe: ['Sharpness', 'Smite', 'Bane of Arthropods', 'Efficiency', 'Fortune', 'Unbreaking', 'Mending'],
  pickaxe: ['Efficiency', 'Fortune', 'Silk Touch', 'Unbreaking', 'Mending'],
  shovel: ['Efficiency', 'Fortune', 'Silk Touch', 'Unbreaking', 'Mending'],
  bow: ['Power', 'Punch', 'Flame', 'Infinity', 'Unbreaking', 'Mending'],
  helmet: ['Protection', 'Blast Protection', 'Fire Protection', 'Projectile Protection', 'Respiration', 'Aqua Affinity', 'Thorns', 'Unbreaking', 'Mending'],
  chestplate: ['Protection', 'Blast Protection', 'Fire Protection', 'Projectile Protection', 'Thorns', 'Unbreaking', 'Mending'],
  leggings: ['Protection', 'Blast Protection', 'Fire Protection', 'Projectile Protection', 'Swift Sneak', 'Thorns', 'Unbreaking', 'Mending'],
  boots: ['Protection', 'Blast Protection', 'Fire Protection', 'Projectile Protection', 'Feather Falling', 'Depth Strider', 'Frost Walker', 'Soul Speed', 'Thorns', 'Unbreaking', 'Mending'],
  trident: ['Loyalty', 'Channeling', 'Riptide', 'Impaling', 'Unbreaking', 'Mending'],
  crossbow: ['Quick Charge', 'Multishot', 'Piercing', 'Unbreaking', 'Mending'],
  fishingRod: ['Luck of the Sea', 'Lure', 'Unbreaking', 'Mending'],
};

export default function EnchantmentsPage() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof enchantments>('sword');

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faWandMagicSparkles} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Enchantments Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find the best enchantments for your items
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Item Type
        </label>
        <select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value as keyof typeof enchantments)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        >
          {Object.keys(enchantments).map((item) => (
            <option key={item} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Recommended Enchantments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {enchantments[selectedItem].map((enchant, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-lg p-4"
            >
              <div className="font-semibold text-purple-900 dark:text-purple-300">
                ✨ {enchant}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
