'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { parseMotd, minecraftColorCodes } from '@/lib/utils';

export default function MOTDEditorPage() {
  const [motdText, setMotdText] = useState('§6Welcome to §lMy Server§r\\n§aJoin now!');
  const [showPreview, setShowPreview] = useState(true);

  const insertColorCode = (code: string) => {
    setMotdText(prev => prev + `§${code}`);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faPalette} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          MOTD Editor & Preview
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Create and preview your Minecraft server MOTD with color codes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Editor</h2>
          
          <textarea
            value={motdText}
            onChange={(e) => setMotdText(e.target.value)}
            className="w-full h-40 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-sm"
            placeholder="Enter your MOTD text..."
          />

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Color Codes</h3>
            <div className="grid grid-cols-8 gap-2">
              {Object.entries(minecraftColorCodes).map(([code, color]) => (
                <button
                  key={code}
                  onClick={() => insertColorCode(code)}
                  className="w-full h-10 rounded border-2 border-gray-300 dark:border-gray-600 hover:border-green-500 transition-colors"
                  style={{ backgroundColor: color }}
                  title={`§${code}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Formatting Codes</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => insertColorCode('l')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-green-500 hover:text-white transition-colors text-sm"
              >
                §l Bold
              </button>
              <button
                onClick={() => insertColorCode('o')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-green-500 hover:text-white transition-colors text-sm italic"
              >
                §o Italic
              </button>
              <button
                onClick={() => insertColorCode('n')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-green-500 hover:text-white transition-colors text-sm underline"
              >
                §n Underline
              </button>
              <button
                onClick={() => insertColorCode('m')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-green-500 hover:text-white transition-colors text-sm line-through"
              >
                §m Strike
              </button>
              <button
                onClick={() => insertColorCode('r')}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-green-500 hover:text-white transition-colors text-sm"
              >
                §r Reset
              </button>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
            <p>Use \\n for line breaks</p>
            <p>Example: §6Welcome §lto §aServer§r\\n§7Join now!</p>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Preview</h2>
          
          <div className="bg-gray-900 rounded-lg p-6 min-h-[200px] border-2 border-gray-700">
            <div
              className="minecraft-font text-base leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: parseMotd(motdText.replace(/\\n/g, '<br>')),
              }}
            />
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Plain Text</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded p-3 text-sm font-mono break-all">
              {motdText.replace(/§[0-9a-fk-or]/gi, '').replace(/\\n/g, '\n')}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Export</h3>
            <button
              onClick={() => navigator.clipboard.writeText(motdText)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Example MOTDs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setMotdText('§6§lSurvival Server§r\\n§aVanilla • No Lag • 24/7')}
            className="text-left p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="font-semibold text-gray-900 dark:text-white mb-1">Survival Server</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Classic survival MOTD</div>
          </button>
          <button
            onClick={() => setMotdText('§c§lPvP Arena§r\\n§7Factions • §eEvents • §bRewards')}
            className="text-left p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="font-semibold text-gray-900 dark:text-white mb-1">PvP Server</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Action-packed PvP MOTD</div>
          </button>
        </div>
      </div>
    </div>
  );
}
