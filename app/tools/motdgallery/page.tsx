'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MOTDExample {
  name: string;
  motd: string;
  description: string;
}

const motdExamples: MOTDExample[] = [
  {
    name: 'Colorful Welcome',
    motd: '&aWelcome to &6&lOur Server!\n&7Join us for &bepic adventures!',
    description: 'A friendly and colorful greeting'
  },
  {
    name: 'Survival Server',
    motd: '&8[&2Survival&8] &fVanilla+ Experience\n&7Economy &8| &7McMMO &8| &7Custom Quests',
    description: 'Professional survival server MOTD'
  },
  {
    name: 'PvP Arena',
    motd: '&4&l⚔ &c&lULTIMATE PVP &4&l⚔\n&eRanked Matches &8| &6Custom Kits &8| &aRewards',
    description: 'Bold PvP-focused message'
  },
  {
    name: 'Creative Build',
    motd: '&d✨ Creative Building Paradise ✨\n&bUnlimited Plots &8| &5WorldEdit &8| &3Community',
    description: 'Welcoming creative server'
  },
  {
    name: 'Minigames Hub',
    motd: '&6&l≫≫ &e&lMINIGAMES NETWORK &6&l≪≪\n&aBedWars &8● &cSkyWars &8● &9Duels &8● &5More!',
    description: 'Engaging minigames showcase'
  },
  {
    name: 'RPG Adventure',
    motd: '&5&l⚜ Medieval RPG Realm ⚜\n&7Custom Classes &8| &6Dungeons &8| &eQuests &8| &dLore',
    description: 'Immersive RPG experience'
  },
  {
    name: 'Simple & Clean',
    motd: '&fMy Minecraft Server\n&7A friendly community server',
    description: 'Minimalist design'
  },
  {
    name: 'Holiday Theme',
    motd: '&c❄ &f&lWinter Wonderland &c❄\n&aSnow Event Active &8| &bLimited Time Items!',
    description: 'Seasonal themed MOTD'
  },
  {
    name: 'Hardcore Challenge',
    motd: '&4&l[HARDCORE] &cOne Life Only!\n&7Can you survive? &8| &cPermadeath Enabled',
    description: 'Intense hardcore server'
  },
];

export default function MOTDGalleryPage() {
  const parseMotdColors = (text: string): string => {
    return text
      .replace(/&0/g, '<span style="color:#000000">')
      .replace(/&1/g, '<span style="color:#0000AA">')
      .replace(/&2/g, '<span style="color:#00AA00">')
      .replace(/&3/g, '<span style="color:#00AAAA">')
      .replace(/&4/g, '<span style="color:#AA0000">')
      .replace(/&5/g, '<span style="color:#AA00AA">')
      .replace(/&6/g, '<span style="color:#FFAA00">')
      .replace(/&7/g, '<span style="color:#AAAAAA">')
      .replace(/&8/g, '<span style="color:#555555">')
      .replace(/&9/g, '<span style="color:#5555FF">')
      .replace(/&a/g, '<span style="color:#55FF55">')
      .replace(/&b/g, '<span style="color:#55FFFF">')
      .replace(/&c/g, '<span style="color:#FF5555">')
      .replace(/&d/g, '<span style="color:#FF55FF">')
      .replace(/&e/g, '<span style="color:#FFFF55">')
      .replace(/&f/g, '<span style="color:#FFFFFF">')
      .replace(/&l/g, '<strong>')
      .replace(/&n/g, '<u>')
      .replace(/&o/g, '<em>')
      .replace(/&r/g, '</span>')
      .replace(/\n/g, '<br/>');
  };

  const closeAllTags = (html: string): string => {
    const openSpans = (html.match(/<span/g) || []).length;
    const closeSpans = (html.match(/<\/span>/g) || []).length;
    const diff = openSpans - closeSpans;
    return html + '</span>'.repeat(diff);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faImage} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          MOTD Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Browse popular server MOTD examples for inspiration
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <p className="text-blue-800 dark:text-blue-400 text-sm">
          💡 Click on any MOTD to copy the code, then use our{' '}
          <Link href="/tools/motd" className="underline font-semibold">
            MOTD Editor
          </Link>
          {' '}to customize it!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {motdExamples.map((example, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-gray-900 p-4 font-mono text-sm min-h-[80px] flex items-center">
              <div
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: closeAllTags(parseMotdColors(example.motd))
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {example.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {example.description}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(example.motd);
                  alert('MOTD code copied to clipboard!');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors text-sm"
              >
                Copy Code
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">🎨 MOTD Color Codes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div><span className="font-mono">&amp;0</span> - Black</div>
          <div><span className="font-mono">&amp;1</span> - Dark Blue</div>
          <div><span className="font-mono">&amp;2</span> - Dark Green</div>
          <div><span className="font-mono">&amp;3</span> - Dark Aqua</div>
          <div><span className="font-mono">&amp;4</span> - Dark Red</div>
          <div><span className="font-mono">&amp;5</span> - Dark Purple</div>
          <div><span className="font-mono">&amp;6</span> - Gold</div>
          <div><span className="font-mono">&amp;7</span> - Gray</div>
          <div><span className="font-mono">&amp;8</span> - Dark Gray</div>
          <div><span className="font-mono">&amp;9</span> - Blue</div>
          <div><span className="font-mono">&amp;a</span> - Green</div>
          <div><span className="font-mono">&amp;b</span> - Aqua</div>
          <div><span className="font-mono">&amp;c</span> - Red</div>
          <div><span className="font-mono">&amp;d</span> - Light Purple</div>
          <div><span className="font-mono">&amp;e</span> - Yellow</div>
          <div><span className="font-mono">&amp;f</span> - White</div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div><span className="font-mono">&amp;l</span> - Bold</div>
          <div><span className="font-mono">&amp;n</span> - Underline</div>
          <div><span className="font-mono">&amp;o</span> - Italic</div>
          <div><span className="font-mono">&amp;r</span> - Reset</div>
        </div>
      </div>
    </div>
  );
}
