'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function WhitelistCheckerPage() {
  const [username, setUsername] = useState('');
  const [serverAddress, setServerAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ status: string; message: string } | null>(null);

  const checkStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !serverAddress.trim()) return;

    setLoading(true);
    setResult(null);

    // Simulate checking (in reality, this would require server-specific API)
    setTimeout(() => {
      const isWhitelisted = Math.random() > 0.5;
      setResult({
        status: isWhitelisted ? 'whitelisted' : 'not_whitelisted',
        message: isWhitelisted 
          ? `${username} appears to be whitelisted on this server`
          : `${username} does not appear to be whitelisted on this server`
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faShieldHalved} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Whitelist/Ban Checker
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Check if a player is whitelisted or banned
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={checkStatus} className="space-y-4">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              maxLength={16}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⏳</span> Checking...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Check Status
              </>
            )}
          </button>
        </form>
      </div>

      {result && (
        <div className={`rounded-lg shadow-md p-8 text-center ${
          result.status === 'whitelisted'
            ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
            : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
        }`}>
          <div className="text-6xl mb-4">{result.status === 'whitelisted' ? '✅' : '❌'}</div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {result.message}
          </p>
        </div>
      )}

      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">⚠️ Important Note</h3>
        <p className="text-sm text-yellow-800 dark:text-yellow-400">
          This tool provides simulated results. Actual whitelist/ban status checking requires server-specific APIs or plugins. 
          Most servers don&apos;t publicly expose this information for security reasons. Contact server administrators for accurate whitelist status.
        </p>
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">🛡️ About Whitelists</h3>
        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
          <li>• Whitelists control who can join a server</li>
          <li>• Server operators manage the whitelist</li>
          <li>• Use <code>/whitelist add &lt;player&gt;</code> to add players</li>
          <li>• Use <code>/whitelist remove &lt;player&gt;</code> to remove players</li>
          <li>• Bans prevent specific players from joining</li>
        </ul>
      </div>
    </div>
  );
}
