'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

interface PlayerStats {
  username: string;
  uuid: string;
  stats: {
    category: string;
    items: { name: string; value: string }[];
  }[];
}

export default function PlayerStatsPage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [error, setError] = useState('');

  const fetchStats = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setStats(null);

    try {
      // Fetch player UUID first
      const playerRes = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
      if (!playerRes.ok) {
        throw new Error('Player not found');
      }
      const playerData = await playerRes.json();
      
      // Mock stats data (in a real implementation, you'd fetch from a Minecraft stats API)
      const mockStats: PlayerStats = {
        username: playerData.name,
        uuid: playerData.id,
        stats: [
          {
            category: 'General',
            items: [
              { name: 'Play Time', value: '~245 hours' },
              { name: 'Distance Walked', value: '~1,234 km' },
              { name: 'Jumps', value: '~45,678' },
              { name: 'Deaths', value: '~89' },
            ]
          },
          {
            category: 'Combat',
            items: [
              { name: 'Mobs Killed', value: '~2,345' },
              { name: 'Players Killed', value: '~12' },
              { name: 'Damage Dealt', value: '~15,678' },
              { name: 'Damage Taken', value: '~8,901' },
            ]
          },
          {
            category: 'Mining',
            items: [
              { name: 'Blocks Mined', value: '~56,789' },
              { name: 'Diamonds Mined', value: '~234' },
              { name: 'Iron Ore Mined', value: '~1,234' },
              { name: 'Coal Mined', value: '~3,456' },
            ]
          },
        ]
      };
      
      setStats(mockStats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch player stats');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faChartBar} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Player Stats
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          View Minecraft player statistics
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={fetchStats} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            maxLength={16}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⏳</span> Loading...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                View Stats
              </>
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <p className="text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      {stats && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={`https://mc-heads.net/avatar/${stats.username}/100`}
                alt={stats.username}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.username}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{stats.uuid}</p>
              </div>
            </div>
          </div>

          {stats.stats.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.name}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-400">
              ℹ️ <strong>Note:</strong> These are approximate stats. Actual player statistics require access to server data or player save files. This demo shows example statistics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
