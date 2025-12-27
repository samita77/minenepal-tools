'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface SeedInfo {
  seed: string;
  features: string[];
  structures: { name: string; coords: string }[];
  biomes: string[];
}

export default function SeedFinderPage() {
  const [searchType, setSearchType] = useState('village');
  const [version, setVersion] = useState('1.21');
  const [results, setResults] = useState<SeedInfo[]>([]);
  const [loading, setLoading] = useState(false);

  const searchSeeds = () => {
    setLoading(true);
    
    setTimeout(() => {
      const mockResults: SeedInfo[] = [
        {
          seed: '-4530634556500121041',
          features: ['Village at spawn', 'Multiple biomes', 'Ocean nearby'],
          structures: [
            { name: 'Village', coords: 'X: 120, Z: -80' },
            { name: 'Desert Temple', coords: 'X: 450, Z: 320' },
          ],
          biomes: ['Plains', 'Forest', 'Desert']
        },
        {
          seed: '8678942899319966093',
          features: ['Mansion near spawn', 'Large forest', 'Rivers'],
          structures: [
            { name: 'Woodland Mansion', coords: 'X: -234, Z: 567' },
            { name: 'Village', coords: 'X: 890, Z: -123' },
          ],
          biomes: ['Dark Forest', 'Plains', 'River']
        },
        {
          seed: '3257840388504953787',
          features: ['Flower forest', 'Plains', 'Mountains'],
          structures: [
            { name: 'Village', coords: 'X: 0, Z: 200' },
            { name: 'Pillager Outpost', coords: 'X: -400, Z: 150' },
          ],
          biomes: ['Flower Forest', 'Plains', 'Mountains']
        },
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faSeedling} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Seed Analyzer
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find Minecraft seeds with specific structures and features
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search For
            </label>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="village">Village at Spawn</option>
              <option value="mansion">Woodland Mansion</option>
              <option value="temple">Desert Temple</option>
              <option value="monument">Ocean Monument</option>
              <option value="stronghold">Stronghold</option>
              <option value="mushroom">Mushroom Island</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Minecraft Version
            </label>
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="1.21">1.21 (Latest)</option>
              <option value="1.20">1.20</option>
              <option value="1.19">1.19</option>
              <option value="1.18">1.18</option>
            </select>
          </div>
        </div>
        <button
          onClick={searchSeeds}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <>
              <span className="animate-spin mr-2">⏳</span> Searching...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Find Seeds
            </>
          )}
        </button>
      </div>

      {results.length > 0 && (
        <div className="space-y-6">
          {results.map((result, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white font-mono">{result.seed}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✨ Features</h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {result.features.map((feature, fIdx) => (
                        <li key={fIdx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🏛️ Structures</h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {result.structures.map((structure, sIdx) => (
                        <li key={sIdx}>
                          <strong>{structure.name}:</strong> {structure.coords}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌍 Biomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.biomes.map((biome, bIdx) => (
                        <span 
                          key={bIdx}
                          className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded"
                        >
                          {biome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(result.seed)}
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
                >
                  Copy Seed
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🔍 About Seeds</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Seeds determine world generation</li>
          <li>• Same seed = same world (on same version)</li>
          <li>• Use seeds to share interesting worlds</li>
          <li>• Version matters - seeds may differ between versions</li>
        </ul>
      </div>
    </div>
  );
}
