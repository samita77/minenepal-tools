import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faRocket, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MineNepal Tools - your comprehensive Minecraft toolkit for server administrators and players. Discover our mission, tools, and commitment to the Minecraft community.',
  openGraph: {
    title: 'About Us | MineNepal Tools',
    description: 'Learn about MineNepal Tools - your comprehensive Minecraft toolkit for server administrators and players.',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FontAwesomeIcon icon={faCube} className="h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About MineNepal Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your comprehensive toolkit for Minecraft servers and players
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faRocket} className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            MineNepal Tools was created with a simple mission: to provide Minecraft players and server administrators 
            with fast, reliable, and easy-to-use tools that enhance their gaming experience. We understand the 
            challenges of managing Minecraft servers and the need for quick access to player information, server 
            diagnostics, and utility tools.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Whether you're a server administrator monitoring your community, a player looking up statistics, or 
            someone creating custom content, our platform offers a comprehensive suite of tools designed to make 
            your Minecraft experience better.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCube} className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Server Tools</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Monitor server status, check player counts, analyze server versions, resolve IP addresses, 
                and test connectivity with our comprehensive server management tools.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Player Tools</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Look up player UUIDs, view and customize skins, check username availability, view statistics, 
                and track username history across the Minecraft network.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Utility Tools</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Access enchantment guides, potion calculators, crafting references, loot simulators, 
                and MOTD editors to enhance your gameplay and server customization.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">World Tools</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Analyze seeds, find biomes, convert coordinates between dimensions, and visualize world 
                maps to plan your next adventure or build.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why Choose MineNepal Tools?</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Fast & Reliable:</strong> Our tools are optimized for speed with efficient caching and API integration.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>100% Free:</strong> All tools are completely free to use with no hidden charges or subscriptions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>No Registration Required:</strong> Access all tools instantly without creating an account.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Mobile Friendly:</strong> Fully responsive design works seamlessly on all devices.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Regular Updates:</strong> We continuously add new features and improve existing tools.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Privacy Focused:</strong> We respect your privacy and don't collect unnecessary personal information.</span>
            </li>
          </ul>
        </section>

        {/* Community Section */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Community</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            MineNepal Tools is built by Minecraft enthusiasts for the Minecraft community. We value feedback from 
            our users and continuously work to improve our platform based on community needs. Whether you're a casual 
            player, a competitive gamer, or a server administrator managing hundreds of players, we're here to support you.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Have suggestions or feedback? We'd love to hear from you! Visit our{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 underline">
              contact page
            </a>{' '}
            to get in touch with us.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            MineNepal Tools is not affiliated with, endorsed by, or associated with Mojang Studios or Microsoft Corporation. 
            Minecraft is a trademark of Mojang Studios.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            Last Updated: December 27, 2024
          </p>
        </section>
      </div>
    </div>
  );
}
