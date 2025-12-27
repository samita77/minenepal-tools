'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function CoordinateConverterPage() {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [dimension, setDimension] = useState('overworld');

  const convertToNether = (x: number, z: number) => ({
    x: Math.floor(x / 8),
    z: Math.floor(z / 8)
  });

  const convertFromNether = (x: number, z: number) => ({
    x: x * 8,
    z: z * 8
  });

  const xNum = parseFloat(x) || 0;
  const zNum = parseFloat(z) || 0;

  const netherCoords = dimension === 'overworld' 
    ? convertToNether(xNum, zNum)
    : { x: xNum, z: zNum };

  const overworldCoords = dimension === 'nether'
    ? convertFromNether(xNum, zNum)
    : { x: xNum, z: zNum };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faArrowsLeftRight} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Coordinate Converter
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Convert coordinates between Overworld and Nether
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dimension
            </label>
            <select
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="overworld">Overworld → Nether</option>
              <option value="nether">Nether → Overworld</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                X Coordinate
              </label>
              <input
                type="number"
                value={x}
                onChange={(e) => setX(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Z Coordinate
              </label>
              <input
                type="number"
                value={z}
                onChange={(e) => setZ(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            🌍 Overworld
          </h2>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">X</div>
              <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                {overworldCoords.x}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">Z</div>
              <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                {overworldCoords.z}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-500 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            🔥 Nether
          </h2>
          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">X</div>
              <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                {netherCoords.x}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">Z</div>
              <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                {netherCoords.z}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 How it works</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Overworld to Nether: Divide by 8</li>
          <li>• Nether to Overworld: Multiply by 8</li>
          <li>• Y coordinate stays the same (not shown here)</li>
          <li>• Build portals at these coordinates for perfect alignment</li>
        </ul>
      </div>
    </div>
  );
}
