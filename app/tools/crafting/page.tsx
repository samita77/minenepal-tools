'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const craftingRecipes = [
  { name: 'Crafting Table', materials: '4x Wood Planks', output: '1x Crafting Table', category: 'Tools' },
  { name: 'Wooden Pickaxe', materials: '3x Wood Planks, 2x Sticks', output: '1x Wooden Pickaxe', category: 'Tools' },
  { name: 'Stone Pickaxe', materials: '3x Cobblestone, 2x Sticks', output: '1x Stone Pickaxe', category: 'Tools' },
  { name: 'Iron Pickaxe', materials: '3x Iron Ingots, 2x Sticks', output: '1x Iron Pickaxe', category: 'Tools' },
  { name: 'Diamond Pickaxe', materials: '3x Diamonds, 2x Sticks', output: '1x Diamond Pickaxe', category: 'Tools' },
  { name: 'Sword', materials: '2x Material, 1x Stick', output: '1x Sword', category: 'Weapons' },
  { name: 'Bow', materials: '3x Sticks, 3x String', output: '1x Bow', category: 'Weapons' },
  { name: 'Arrow', materials: '1x Flint, 1x Stick, 1x Feather', output: '4x Arrows', category: 'Weapons' },
  { name: 'Chest', materials: '8x Wood Planks', output: '1x Chest', category: 'Storage' },
  { name: 'Furnace', materials: '8x Cobblestone', output: '1x Furnace', category: 'Utility' },
  { name: 'Torch', materials: '1x Coal/Charcoal, 1x Stick', output: '4x Torches', category: 'Light' },
  { name: 'Bed', materials: '3x Wool, 3x Wood Planks', output: '1x Bed', category: 'Utility' },
  { name: 'Door', materials: '6x Wood Planks', output: '3x Doors', category: 'Building' },
  { name: 'Ladder', materials: '7x Sticks', output: '3x Ladders', category: 'Building' },
  { name: 'Fence', materials: '4x Wood Planks, 2x Sticks', output: '3x Fences', category: 'Building' },
  { name: 'Bucket', materials: '3x Iron Ingots', output: '1x Bucket', category: 'Tools' },
  { name: 'Shears', materials: '2x Iron Ingots', output: '1x Shears', category: 'Tools' },
  { name: 'Compass', materials: '4x Iron Ingots, 1x Redstone', output: '1x Compass', category: 'Tools' },
  { name: 'Clock', materials: '4x Gold Ingots, 1x Redstone', output: '1x Clock', category: 'Tools' },
  { name: 'Book', materials: '3x Paper, 1x Leather', output: '1x Book', category: 'Utility' },
  { name: 'Bookshelf', materials: '6x Wood Planks, 3x Books', output: '1x Bookshelf', category: 'Building' },
  { name: 'Enchanting Table', materials: '1x Book, 2x Diamonds, 4x Obsidian', output: '1x Enchanting Table', category: 'Utility' },
  { name: 'Anvil', materials: '3x Iron Blocks, 4x Iron Ingots', output: '1x Anvil', category: 'Utility' },
  { name: 'Brewing Stand', materials: '1x Blaze Rod, 3x Cobblestone', output: '1x Brewing Stand', category: 'Utility' },
];

const categories = ['All', 'Tools', 'Weapons', 'Storage', 'Utility', 'Light', 'Building'];

export default function CraftingReferencePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredRecipes = craftingRecipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase()) ||
                         recipe.materials.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || recipe.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faTableCells} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Crafting Reference
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          View crafting recipes and block information
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes..."
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map((recipe, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {recipe.name}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Materials:</span>
                <div className="text-gray-900 dark:text-white">{recipe.materials}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Output:</span>
                <div className="text-green-600 dark:text-green-400 font-semibold">{recipe.output}</div>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-2 py-1 rounded">
                  {recipe.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          No recipes found matching your search.
        </div>
      )}
    </div>
  );
}
