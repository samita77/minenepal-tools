'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

interface NewsArticle {
  title: string;
  date: string;
  category: string;
  summary: string;
  link: string;
}

const news: NewsArticle[] = [
  {
    title: 'Minecraft 1.21 Update Released',
    date: 'June 13, 2024',
    category: 'Update',
    summary: 'The Tricky Trials update brings Trial Chambers, the Breeze mob, new wolf variants, and the Crafter block. Explore dangerous chambers and craft automatically!',
    link: 'https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21'
  },
  {
    title: 'Minecraft Live 2024 Announced',
    date: 'September 2024',
    category: 'Event',
    summary: 'Join us for Minecraft Live 2024 to see what\'s next for Minecraft! Vote on new mobs and see exclusive reveals.',
    link: 'https://www.minecraft.net/live'
  },
  {
    title: 'Cherry Blossom Update (1.20)',
    date: 'June 7, 2023',
    category: 'Update',
    summary: 'Trails & Tales update introduces archaeology, the Cherry Blossom biome, armor trims, and the adorable Sniffer mob.',
    link: 'https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20'
  },
  {
    title: 'The Wild Update (1.19)',
    date: 'June 7, 2022',
    category: 'Update',
    summary: 'Deep Dark biome, Ancient Cities, and the terrifying Warden arrive in Minecraft. Plus, Mangrove Swamps and Allays!',
    link: 'https://www.minecraft.net/en-us/article/the-wild-update-out-today-java'
  },
  {
    title: 'Minecraft Education Edition Updates',
    date: 'Ongoing',
    category: 'Education',
    summary: 'New lessons and features for Minecraft Education Edition help teachers engage students in creative learning.',
    link: 'https://education.minecraft.net/'
  },
  {
    title: 'Minecraft Legends Released',
    date: 'April 18, 2023',
    category: 'Game',
    summary: 'A new action-strategy game set in the Minecraft universe. Lead your allies in epic battles to save the Overworld!',
    link: 'https://www.minecraft.net/en-us/about-legends'
  },
  {
    title: 'Minecraft Dungeons: New DLC',
    date: '2023',
    category: 'DLC',
    summary: 'Explore new dungeons, fight new enemies, and collect legendary gear in the latest Minecraft Dungeons DLC.',
    link: 'https://www.minecraft.net/en-us/about-dungeons'
  },
  {
    title: 'Bedrock Beta Updates',
    date: 'Weekly',
    category: 'Beta',
    summary: 'Test experimental features in Minecraft Bedrock Beta. Provide feedback to shape future updates!',
    link: 'https://feedback.minecraft.net/hc/en-us'
  },
];

export default function MinecraftNewsPage() {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Update': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      'Event': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
      'Education': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
      'Game': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
      'DLC': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
      'Beta': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
    };
    return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faNewspaper} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Minecraft News
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Latest Minecraft updates and patch notes
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          🎮 Stay Updated!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Follow official Minecraft channels for the latest news, updates, and community highlights.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.minecraft.net/en-us/article"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Official News
          </a>
          <a
            href="https://twitter.com/Minecraft"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Twitter
          </a>
          <a
            href="https://www.reddit.com/r/Minecraft/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Reddit
          </a>
        </div>
      </div>

      <div className="space-y-6">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {article.date}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {article.title}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {article.summary}
            </p>
            
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">📱 Official Resources</h3>
        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-400">
          <li>
            • <a href="https://www.minecraft.net" target="_blank" rel="noopener noreferrer" className="underline">Minecraft.net</a> - Official website
          </li>
          <li>
            • <a href="https://feedback.minecraft.net" target="_blank" rel="noopener noreferrer" className="underline">Feedback Site</a> - Report bugs and suggest features
          </li>
          <li>
            • <a href="https://help.minecraft.net" target="_blank" rel="noopener noreferrer" className="underline">Help Center</a> - Get support and answers
          </li>
          <li>
            • <a href="https://www.minecraft.net/en-us/article" target="_blank" rel="noopener noreferrer" className="underline">News</a> - Latest articles and updates
          </li>
        </ul>
      </div>
    </div>
  );
}
