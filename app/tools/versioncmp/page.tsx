'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Version {
  version: string;
  releaseDate: string;
  type: string;
  majorFeatures: string[];
}

const versions: Version[] = [
  {
    version: '1.21',
    releaseDate: 'June 2024',
    type: 'Major Update',
    majorFeatures: ['Trial Chambers', 'The Breeze', 'New Wolf Variants', 'Crafter Block', 'Copper & Tuff Blocks']
  },
  {
    version: '1.20',
    releaseDate: 'June 2023',
    type: 'Major Update',
    majorFeatures: ['Archaeology', 'Cherry Blossom Biome', 'Armor Trims', 'Camel', 'Bamboo Wood Set', 'Sniffer']
  },
  {
    version: '1.19',
    releaseDate: 'June 2022',
    type: 'Major Update (The Wild Update)',
    majorFeatures: ['Deep Dark Biome', 'Ancient Cities', 'Warden', 'Mangrove Swamp', 'Frogs', 'Allay']
  },
  {
    version: '1.18',
    releaseDate: 'November 2021',
    type: 'Major Update (Caves & Cliffs Part 2)',
    majorFeatures: ['New Cave Generation', 'Expanded Height Limit', 'Improved Mountains', 'New Ore Distribution']
  },
  {
    version: '1.17',
    releaseDate: 'June 2021',
    type: 'Major Update (Caves & Cliffs Part 1)',
    majorFeatures: ['Copper', 'Amethyst', 'Axolotls', 'Glow Squids', 'Goats', 'Dripstone Caves']
  },
  {
    version: '1.16',
    releaseDate: 'June 2020',
    type: 'Major Update (Nether Update)',
    majorFeatures: ['Nether Biomes', 'Netherite', 'Piglins', 'Hoglins', 'Bastion Remnants', 'Respawn Anchors']
  },
  {
    version: '1.15',
    releaseDate: 'December 2019',
    type: 'Major Update (Buzzy Bees)',
    majorFeatures: ['Bees', 'Honey Blocks', 'Beehives', 'Honey Bottles']
  },
  {
    version: '1.14',
    releaseDate: 'April 2019',
    type: 'Major Update (Village & Pillage)',
    majorFeatures: ['Village Redesign', 'Pillagers', 'Raids', 'New Villager Professions', 'Bamboo']
  },
  {
    version: '1.13',
    releaseDate: 'July 2018',
    type: 'Major Update (Update Aquatic)',
    majorFeatures: ['Ocean Overhaul', 'Dolphins', 'Turtles', 'Tridents', 'Shipwrecks', 'Coral Reefs']
  },
  {
    version: '1.12',
    releaseDate: 'June 2017',
    type: 'Major Update (World of Color)',
    majorFeatures: ['Colored Blocks', 'Parrots', 'Illagers', 'Concrete', 'Glazed Terracotta']
  },
];

export default function VersionComparisonPage() {
  const [version1, setVersion1] = useState(versions[0]);
  const [version2, setVersion2] = useState(versions[1]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faCodeCompare} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Version Comparison
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Compare features between Minecraft versions
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Version 1
            </label>
            <select
              value={version1.version}
              onChange={(e) => setVersion1(versions.find(v => v.version === e.target.value)!)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            >
              {versions.map((v) => (
                <option key={v.version} value={v.version}>
                  {v.version} - {v.type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Version 2
            </label>
            <select
              value={version2.version}
              onChange={(e) => setVersion2(versions.find(v => v.version === e.target.value)!)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            >
              {versions.map((v) => (
                <option key={v.version} value={v.version}>
                  {v.version} - {v.type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {version1.version}
          </h2>
          <div className="space-y-3 mb-4">
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Release Date:</span>
              <p className="font-semibold text-gray-900 dark:text-white">{version1.releaseDate}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Type:</span>
              <p className="font-semibold text-gray-900 dark:text-white">{version1.type}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Major Features:</h3>
            <ul className="space-y-2">
              {version1.majorFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-500 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {version2.version}
          </h2>
          <div className="space-y-3 mb-4">
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Release Date:</span>
              <p className="font-semibold text-gray-900 dark:text-white">{version2.releaseDate}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Type:</span>
              <p className="font-semibold text-gray-900 dark:text-white">{version2.type}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Major Features:</h3>
            <ul className="space-y-2">
              {version2.majorFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">📋 Version History</h3>
        <p className="text-sm text-yellow-800 dark:text-yellow-400 mb-4">
          Minecraft has been continuously updated since its release. Each major version brings new features, mobs, blocks, and gameplay improvements.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
          {versions.map((v) => (
            <div key={v.version} className="bg-white dark:bg-gray-800 rounded p-2 text-center">
              <div className="font-semibold text-gray-900 dark:text-white">{v.version}</div>
              <div className="text-gray-600 dark:text-gray-400">{v.releaseDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
