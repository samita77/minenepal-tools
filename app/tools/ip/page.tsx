'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function IPFinderPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const resolveIP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/server-status?address=${encodeURIComponent(address)}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faNetworkWired} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          IP & Port Finder
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Resolve server IP address, port, and SRV records
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={resolveIP} className="space-y-4">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter server address..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Resolving...' : 'Resolve IP'}
          </button>
        </form>
      </div>

      {result && result.ip && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <div className="text-sm text-gray-600 dark:text-gray-400">IP Address</div>
              <div className="font-mono text-gray-900 dark:text-white">{result.ip.ip || result.hostname}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
              <div className="text-sm text-gray-600 dark:text-gray-400">Port</div>
              <div className="font-mono text-gray-900 dark:text-white">{result.port || 25565}</div>
            </div>
            {result.ip?.country && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                <div className="text-gray-900 dark:text-white">{result.ip.country}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
