'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getPlayerHeadUrl, getPlayerBodyUrl, getPlayerSkinUrl } from '@/lib/minecraft-api';
import Image from 'next/image';

export default function UUIDLookupPage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const lookupPlayer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`/api/player?username=${encodeURIComponent(username)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch player data');
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
        <FontAwesomeIcon icon={faUser} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Player UUID & Skin Lookup
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find a player&apos;s UUID and view their Minecraft skin
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={lookupPlayer} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Minecraft Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., Notch"
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
                <span className="animate-spin mr-2">⏳</span> Looking up...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Lookup Player
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Player Information</h2>

          <div className="space-y-6">
            {/* Player Head */}
            <div className="flex justify-center">
              <Image
                src={getPlayerHeadUrl(result.id)}
                alt={`${result.name}'s head`}
                width={128}
                height={128}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Username</div>
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                  {result.name}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">UUID</div>
                <div className="font-mono text-sm text-gray-900 dark:text-white break-all">
                  {result.id}
                </div>
              </div>
            </div>

            {/* Skin Preview */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skin Preview</h3>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={getPlayerBodyUrl(result.id)}
                  alt={`${result.name}'s skin`}
                  width={200}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <a
                  href={getPlayerSkinUrl(result.id, 512)}
                  download={`${result.name}_skin.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Download Skin (PNG)
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quick Links</div>
              <div className="space-y-2">
                <a
                  href={`https://namemc.com/profile/${result.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  View on NameMC →
                </a>
                <a
                  href={`/tools/uuidhistory?uuid=${result.id}`}
                  className="block text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  View Name History →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
