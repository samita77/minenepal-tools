'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const popularSkins = [
  { name: 'Steve', url: 'Steve' },
  { name: 'Alex', url: 'Alex' },
  { name: 'Notch', url: 'Notch' },
  { name: 'Herobrine', url: 'Herobrine' },
  { name: 'Jeb', url: 'jeb_' },
  { name: 'Dream', url: 'Dream' },
];

export default function RandomSkinPage() {
  const [currentSkin, setCurrentSkin] = useState('Steve');
  const [isLoading, setIsLoading] = useState(false);

  const getRandomSkin = () => {
    setIsLoading(true);
    const randomSkin = popularSkins[Math.floor(Math.random() * popularSkins.length)];
    
    setTimeout(() => {
      setCurrentSkin(randomSkin.url);
      setIsLoading(false);
    }, 500);
  };

  const getSkinUrl = (username: string) => {
    return `https://mc-heads.net/body/${username}/200`;
  };

  const getHeadUrl = (username: string) => {
    return `https://mc-heads.net/avatar/${username}/100`;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faShuffle} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Random Skin Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Discover random Minecraft skins for inspiration
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            {isLoading ? (
              <div className="w-48 h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
                <span className="text-4xl animate-spin">⏳</span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getSkinUrl(currentSkin)}
                alt={`${currentSkin} skin`}
                className="w-48 h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getSkinUrl('Steve');
                }}
              />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {currentSkin}
          </h2>

          <button
            onClick={getRandomSkin}
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors disabled:opacity-50 flex items-center text-lg font-semibold"
          >
            <FontAwesomeIcon icon={faShuffle} className="mr-2" />
            Generate Random Skin
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Popular Skins</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {popularSkins.map((skin, index) => (
            <button
              key={index}
              onClick={() => setCurrentSkin(skin.url)}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getHeadUrl(skin.url)}
                alt={skin.name}
                className="w-16 h-16 rounded mb-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getHeadUrl('Steve');
                }}
              />
              <span className="text-xs text-gray-700 dark:text-gray-300 text-center">{skin.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 About Skins</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Minecraft skins are 64x64 or 64x32 pixel images</li>
          <li>• You can create custom skins using online editors</li>
          <li>• Visit NameMC or Skindex for thousands of custom skins</li>
          <li>• Change your skin in your Minecraft profile settings</li>
        </ul>
      </div>
    </div>
  );
}
