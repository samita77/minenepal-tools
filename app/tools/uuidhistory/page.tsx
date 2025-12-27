'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface NameHistoryEntry {
  name: string;
  changedToAt?: number;
}

interface PlayerHistory {
  currentName: string;
  uuid: string;
  names: NameHistoryEntry[];
}

export default function UUIDHistoryPage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<PlayerHistory | null>(null);
  const [error, setError] = useState('');

  const fetchHistory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setHistory(null);

    try {
      // First get UUID
      const playerRes = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
      if (!playerRes.ok) {
        throw new Error('Player not found');
      }
      const playerData = await playerRes.json();
      
      // Then get name history
      const historyRes = await fetch(`https://api.mojang.com/user/profiles/${playerData.id}/names`);
      const historyData = await historyRes.json();
      
      setHistory({
        currentName: playerData.name,
        uuid: playerData.id,
        names: historyData
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch username history');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp?: number) => {
    if (!timestamp) return 'Original name';
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faClockRotateLeft} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          UUID History
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          View username change history
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={fetchHistory} className="space-y-4">
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
                View History
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

      {history && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Player Information</h2>
            <div className="space-y-2">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Current Username:</span>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{history.currentName}</p>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">UUID:</span>
                <p className="text-sm font-mono text-gray-900 dark:text-white break-all">{history.uuid}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Name History</h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {history.names.map((entry: NameHistoryEntry, index: number) => (
                <div key={index} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{entry.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(entry.changedToAt)}
                      </p>
                    </div>
                    {index === history.names.length - 1 && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-400">
              💡 <strong>Note:</strong> Minecraft allows username changes every 30 days. This shows all previous usernames associated with this account.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
