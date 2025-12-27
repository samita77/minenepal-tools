'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface SkinCategory {
  name: string;
  skins: { name: string; author: string; downloads: string }[];
}

const skinCategories: SkinCategory[] = [
  {
    name: 'Popular',
    skins: [
      { name: 'Knight', author: 'Steve', downloads: '10.2K' },
      { name: 'Ninja', author: 'Alex', downloads: '8.5K' },
      { name: 'Wizard', author: 'CraftMaster', downloads: '7.8K' },
      { name: 'Pirate', author: 'SeaLord', downloads: '6.4K' },
    ]
  },
  {
    name: 'Animals',
    skins: [
      { name: 'Fox', author: 'NatureLover', downloads: '5.2K' },
      { name: 'Wolf', author: 'WildLife', downloads: '4.8K' },
      { name: 'Cat', author: 'Meow123', downloads: '4.3K' },
      { name: 'Panda', author: 'Bamboo', downloads: '3.9K' },
    ]
  },
  {
    name: 'Fantasy',
    skins: [
      { name: 'Dragon', author: 'MythicalMC', downloads: '9.1K' },
      { name: 'Elf', author: 'ForestKeeper', downloads: '7.5K' },
      { name: 'Angel', author: 'SkyWalker', downloads: '6.8K' },
      { name: 'Demon', author: 'DarkSoul', downloads: '5.6K' },
    ]
  },
];

export default function SkinGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState(skinCategories[0]);
  const [selectedSkin, setSelectedSkin] = useState<{ name: string; author: string; downloads: string } | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faImages} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Skin Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Browse and discover custom Minecraft skins
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h2>
            <div className="space-y-2">
              {skinCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory.name === category.name
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {selectedCategory.name} Skins
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedCategory.skins.map((skin, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSkin(skin)}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-all text-center group"
                >
                  <div className="w-full aspect-square bg-gray-200 dark:bg-gray-600 rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-4xl">👤</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{skin.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">by {skin.author}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    ⬇️ {skin.downloads}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedSkin && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedSkin.name}
            </h2>
            <button
              onClick={() => setSelectedSkin(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👤</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Skin Preview</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Author</h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{selectedSkin.author}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Downloads</h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{selectedSkin.downloads}</p>
              </div>
              <div className="pt-4">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors">
                  Download Skin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🎨 Popular Skin Sites</h3>
        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-400">
          <li>• <strong>NameMC</strong> - Browse millions of Minecraft skins</li>
          <li>• <strong>The Skindex</strong> - Large collection with editor</li>
          <li>• <strong>Planet Minecraft</strong> - Community-created skins</li>
          <li>• <strong>MinecraftSkins.com</strong> - Free skins and editor</li>
        </ul>
      </div>
    </div>
  );
}
