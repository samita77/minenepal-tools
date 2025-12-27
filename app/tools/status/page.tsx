'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faSearch } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import { parseMotd, getCountryFlag } from '@/lib/utils';
import Image from 'next/image';

export default function ServerStatusPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const checkStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`/api/server-status?address=${encodeURIComponent(address)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch server status');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faServer} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Minecraft Server Status
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Check if a Minecraft server is online and view its details
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={checkStatus} className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Server Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g., mc.hypixel.net or 192.168.1.1:25565"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin mr-2">⏳</span> Checking...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Check Status
              </span>
            )}
          </button>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Server Information</h2>
            <div className={`px-4 py-2 rounded-full font-semibold ${
              result.online 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}>
              {result.online ? '🟢 Online' : '🔴 Offline'}
            </div>
          </div>

          {result.online && (
            <div className="space-y-6">
              {/* Server Icon */}
              {result.icon && (
                <div className="flex justify-center">
                  <Image
                    src={result.icon}
                    alt="Server icon"
                    width={64}
                    height={64}
                    className="rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Address</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {result.hostname || address}:{result.port || 25565}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Version</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {result.version || 'Unknown'}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Players</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {result.players?.online || 0} / {result.players?.max || 0}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Protocol</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {result.protocol || 'Unknown'}
                  </div>
                </div>
              </div>

              {/* MOTD */}
              {result.motd && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Message of the Day</div>
                  <div
                    className="font-mono text-sm minecraft-font"
                    dangerouslySetInnerHTML={{
                      __html: result.motd.html || parseMotd(result.motd.clean || result.motd.raw || ''),
                    }}
                  />
                </div>
              )}

              {/* Player List */}
              {result.players?.list && result.players.list.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Online Players</div>
                  <div className="flex flex-wrap gap-2">
                    {result.players.list.map((player: string, i: number) => (
                      <span
                        key={i}
                        className="bg-white dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-900 dark:text-white"
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Country */}
              {result.ip?.country && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Location</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {getCountryFlag(result.ip.country_code || '')} {result.ip.country}
                  </div>
                </div>
              )}
            </div>
          )}

          {!result.online && (
            <div className="text-center text-gray-600 dark:text-gray-400 py-8">
              <p className="text-lg">This server appears to be offline or unreachable.</p>
              <p className="text-sm mt-2">Please check the address and try again.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
