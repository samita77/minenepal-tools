'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function SeedMapPage() {
  const [seed, setSeed] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateMap = (e: React.FormEvent) => {
    e.preventDefault();
    if (!seed.trim()) return;
    setGenerated(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faMap} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Seed Map Viewer
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Generate map visualization from seed
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={generateMap} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter World Seed
            </label>
            <input
              type="text"
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              placeholder="e.g., 12345 or myseed"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Generate Map
          </button>
        </form>
      </div>

      {generated && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Seed: {seed}
            </h2>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square flex items-center justify-center text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p>Map visualization would appear here</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Notable Locations</h3>
            <div className="space-y-3">
              {[
                { name: 'Spawn Point', coords: 'X: 0, Y: 64, Z: 0', biome: 'Plains' },
                { name: 'Village', coords: 'X: 234, Y: 65, Z: -156', biome: 'Plains' },
                { name: 'Desert Temple', coords: 'X: 512, Y: 68, Z: 342', biome: 'Desert' },
                { name: 'Ocean Monument', coords: 'X: -445, Y: 62, Z: 789', biome: 'Deep Ocean' },
              ].map((location, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{location.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{location.coords}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">
                      {location.biome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🧭 Using Seed Maps</h3>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
              <li>• Use tools like Chunkbase or MineAtlas for detailed seed maps</li>
              <li>• Seeds generate the same world across different devices</li>
              <li>• Structures spawn at specific coordinates based on the seed</li>
              <li>• Great for speedrunning or planning builds</li>
            </ul>
          </div>
        </div>
      )}

      {!generated && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">💡 Popular Seeds</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              { seed: '-4530634556500121041', desc: 'Village at spawn, multiple biomes' },
              { seed: '8678942899319966093', desc: 'Mansion near spawn' },
              { seed: '3257840388504953787', desc: 'Flower forest and plains' },
              { seed: '1669320484', desc: 'Island survival' },
            ].map((example, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSeed(example.seed);
                  setGenerated(false);
                }}
                className="text-left bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="font-mono text-sm text-green-600 dark:text-green-400 mb-1">{example.seed}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{example.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
