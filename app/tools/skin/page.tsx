'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { getPlayerHeadUrl, getPlayerBodyUrl, getPlayerSkinUrl } from '@/lib/minecraft-api';
import Image from 'next/image';

export default function SkinViewerPage() {
  const [username, setUsername] = useState('');
  const [uuid, setUuid] = useState('');
  const [loading, setLoading] = useState(false);

  const lookupSkin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setUuid('');

    try {
      const response = await fetch(`/api/player?username=${encodeURIComponent(username)}`);
      const data = await response.json();
      if (response.ok) {
        setUuid(data.id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faImage} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Player Skin Viewer
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Preview Minecraft player skins in 2D
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={lookupSkin} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'View Skin'}
          </button>
        </form>
      </div>

      {uuid && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skin Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Head</h3>
              <Image
                src={getPlayerHeadUrl(uuid, 128)}
                alt="Player head"
                width={128}
                height={128}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Body</h3>
              <Image
                src={getPlayerBodyUrl(uuid, 200)}
                alt="Player body"
                width={120}
                height={240}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Skin Texture</h3>
              <Image
                src={getPlayerSkinUrl(uuid, 128)}
                alt="Player skin"
                width={128}
                height={128}
                className="rounded-lg shadow-lg mx-auto image-rendering-pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href={getPlayerSkinUrl(uuid, 512)}
              download={`${username}_skin.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Download Skin (512x512)
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
