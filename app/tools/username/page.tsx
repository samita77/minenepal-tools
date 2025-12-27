'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function UsernameCheckerPage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkUsername = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/player?username=${encodeURIComponent(username)}&action=check-availability`);
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
        <FontAwesomeIcon icon={faUserCheck} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Username Checker
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Check if a Minecraft username is available
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={checkUsername} className="space-y-4">
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
                <span className="animate-spin mr-2">⏳</span> Checking...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Check Availability
              </>
            )}
          </button>
        </form>
      </div>

      {result && (
        <div className={`rounded-lg shadow-md p-8 text-center ${
          result.available 
            ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
            : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
        }`}>
          <div className="text-6xl mb-4">{result.available ? '✅' : '❌'}</div>
          <h2 className={`text-2xl font-bold mb-2 ${
            result.available 
              ? 'text-green-700 dark:text-green-400'
              : 'text-red-700 dark:text-red-400'
          }`}>
            {result.available ? 'Available!' : 'Taken'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The username <strong>{result.username}</strong> is {result.available ? 'available' : 'already in use'}.
          </p>
        </div>
      )}
    </div>
  );
}
