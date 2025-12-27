'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface PingResult {
  region: string;
  latency: number;
  status: 'excellent' | 'good' | 'fair' | 'poor';
  flag: string;
}

export default function PingTestPage() {
  const [serverAddress, setServerAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PingResult[]>([]);

  const testPing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serverAddress.trim()) return;

    setLoading(true);
    setResults([]);

    // Simulate ping tests from multiple regions
    setTimeout(() => {
      const regions = [
        { region: 'North America (US East)', flag: '🇺🇸' },
        { region: 'North America (US West)', flag: '🇺🇸' },
        { region: 'Europe (London)', flag: '🇬🇧' },
        { region: 'Europe (Frankfurt)', flag: '🇩🇪' },
        { region: 'Asia (Tokyo)', flag: '🇯🇵' },
        { region: 'Asia (Singapore)', flag: '🇸🇬' },
        { region: 'Australia (Sydney)', flag: '🇦🇺' },
        { region: 'South America (São Paulo)', flag: '🇧🇷' },
      ];

      const mockResults: PingResult[] = regions.map(r => {
        const latency = Math.floor(Math.random() * 200) + 10;
        let status: 'excellent' | 'good' | 'fair' | 'poor';
        if (latency < 50) status = 'excellent';
        else if (latency < 100) status = 'good';
        else if (latency < 150) status = 'fair';
        else status = 'poor';
        
        return {
          ...r,
          latency,
          status
        };
      });

      setResults(mockResults.sort((a, b) => a.latency - b.latency));
      setLoading(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      excellent: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      good: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
      fair: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
      poor: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    };
    return colors[status as keyof typeof colors];
  };

  const getStatusText = (status: string) => {
    const texts = {
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      poor: 'Poor',
    };
    return texts[status as keyof typeof texts];
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faStopwatch} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Server Ping Test
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Test server latency from multiple regions worldwide
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={testPing} className="space-y-4">
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
                <span className="animate-spin mr-2">⏳</span> Testing Ping...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Test Ping
              </>
            )}
          </button>
        </form>
      </div>

      {results.length > 0 && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Ping Results for {serverAddress}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">Best Ping</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {results[0]?.latency}ms
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Ping</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(results.reduce((sum, r) => sum + r.latency, 0) / results.length)}ms
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">Worst Ping</div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {results[results.length - 1]?.latency}ms
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Regional Results</h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {results.map((result, idx) => (
                <div key={idx} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{result.flag}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{result.region}</h4>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getStatusColor(result.status)}`}>
                          {getStatusText(result.status)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{result.latency}ms</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">⚡ Ping Guide</h3>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
              <li>• <strong>0-50ms:</strong> Excellent - Perfect for competitive gaming</li>
              <li>• <strong>50-100ms:</strong> Good - Smooth gameplay experience</li>
              <li>• <strong>100-150ms:</strong> Fair - Playable, slight delay noticeable</li>
              <li>• <strong>150ms+:</strong> Poor - Significant lag, difficult to play</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-400">
              ℹ️ <strong>Note:</strong> These are simulated results for demonstration. Actual ping varies based on your location, internet connection, and server location.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
