'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Server {
  name: string;
  address: string;
  players: string;
  description: string;
  version: string;
  type: string;
}

const serverPool: Server[] = [
  { name: 'SkyBlock Paradise', address: 'skyblock.example.net', players: '245/500', description: 'Custom SkyBlock with unique features', version: '1.20', type: 'SkyBlock' },
  { name: 'Survival Legends', address: 'survival.example.com', players: '89/200', description: 'Vanilla+ survival with economy', version: '1.21', type: 'Survival' },
  { name: 'PvP Arena', address: 'pvp.example.org', players: '156/300', description: 'Competitive PvP battles', version: '1.19', type: 'PvP' },
  { name: 'Creative Builders', address: 'creative.example.net', players: '67/150', description: 'Unlimited creative plots', version: '1.20', type: 'Creative' },
  { name: 'Mini Games Hub', address: 'games.example.com', players: '423/1000', description: 'BedWars, SkyWars, and more', version: '1.20', type: 'Minigames' },
  { name: 'RPG Adventure', address: 'rpg.example.org', players: '134/400', description: 'Custom classes and quests', version: '1.19', type: 'RPG' },
  { name: 'Prison Server', address: 'prison.example.net', players: '98/250', description: 'Mine, rank up, escape!', version: '1.20', type: 'Prison' },
  { name: 'Faction Wars', address: 'factions.example.com', players: '201/500', description: 'Build your faction empire', version: '1.18', type: 'Factions' },
];

export default function RandomServerPage() {
  const [currentServer, setCurrentServer] = useState<Server | null>(null);
  const [loading, setLoading] = useState(false);

  const getRandomServer = () => {
    setLoading(true);
    
    setTimeout(() => {
      const randomServer = serverPool[Math.floor(Math.random() * serverPool.length)];
      setCurrentServer(randomServer);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faDice} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Random Server Finder
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Discover random Minecraft servers to play on
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
        <button
          onClick={getRandomServer}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center text-lg font-semibold"
        >
          {loading ? (
            <>
              <span className="animate-spin mr-2">⏳</span> Finding Server...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faShuffle} className="mr-2" />
              Discover Random Server
            </>
          )}
        </button>
      </div>

      {currentServer && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">{currentServer.name}</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Server Address</h3>
              <div className="flex items-center justify-between">
                <p className="text-lg font-mono font-semibold text-gray-900 dark:text-white">
                  {currentServer.address}
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText(currentServer.address)}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Players Online</h3>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{currentServer.players}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Version</h3>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{currentServer.version}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">Server Type</h3>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                {currentServer.type}
              </span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Description</h3>
              <p className="text-gray-700 dark:text-gray-300">{currentServer.description}</p>
            </div>

            <button
              onClick={getRandomServer}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faShuffle} className="mr-2" />
              Find Another Server
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🎮 Server Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-blue-800 dark:text-blue-400">
          <div>• Survival</div>
          <div>• Creative</div>
          <div>• SkyBlock</div>
          <div>• PvP</div>
          <div>• Minigames</div>
          <div>• RPG</div>
          <div>• Prison</div>
          <div>• Factions</div>
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">ℹ️ Note</h3>
        <p className="text-sm text-yellow-800 dark:text-yellow-400">
          These are example servers for demonstration. Visit server listing sites like Planet Minecraft, Minecraft-Server-List, or Minecraft-MP for real servers.
        </p>
      </div>
    </div>
  );
}
