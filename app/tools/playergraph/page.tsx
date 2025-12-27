'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function PlayerGraphPage() {
  const [serverAddress, setServerAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ time: string; players: number }[] | null>(null);

  const fetchData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serverAddress.trim()) return;

    setLoading(true);
    
    // Simulate data fetching
    setTimeout(() => {
      const mockData = Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        players: Math.floor(Math.random() * 100) + 20
      }));
      setData(mockData);
      setLoading(false);
    }, 1000);
  };

  const maxPlayers = data ? Math.max(...data.map(d => d.players)) : 0;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faChartLine} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Player Graph
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          View server player count over time
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={fetchData} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Server Address
            </label>
            <input
              type="text"
              value={serverAddress}
              onChange={(e) => setServerAddress(e.target.value)}
              placeholder="e.g., mc.hypixel.net"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
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
                View Graph
              </>
            )}
          </button>
        </form>
      </div>

      {data && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Player Count (Last 24 Hours)
            </h2>
            <div className="relative h-64">
              <div className="absolute inset-0 flex items-end justify-between gap-1">
                {data.map((point, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-green-500 rounded-t transition-all hover:bg-green-600"
                      style={{ height: `${(point.players / maxPlayers) * 100}%` }}
                      title={`${point.time}: ${point.players} players`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-600 dark:text-gray-400">
              <span>0:00</span>
              <span>6:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-500 rounded-lg p-6">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Players</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {data[data.length - 1]?.players || 0}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Peak Players</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{maxPlayers}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-500 rounded-lg p-6">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Average Players</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {Math.round(data.reduce((sum, d) => sum + d.players, 0) / data.length)}
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-400">
              ℹ️ <strong>Note:</strong> This is simulated data. Real player graphs require continuous server monitoring and data collection.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
