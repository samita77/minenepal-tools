import ToolCard from '@/components/ToolCard';
import { tools } from '@/lib/tools-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCube } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  const phase1Tools = tools.filter((tool) => tool.phase === 1);
  const phase2Tools = tools.filter((tool) => tool.phase === 2);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MineNepal Tools",
    "url": "https://tools.minenepal.xyz",
    "description": "Your comprehensive toolkit for Minecraft servers and players. Check server status, lookup players, edit MOTDs, view skins, and access 25+ powerful tools.",
    "publisher": {
      "@type": "Organization",
      "name": "MineNepal Tools",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tools.minenepal.xyz/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://tools.minenepal.xyz/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <FontAwesomeIcon icon={faCube} className="h-20 w-20 text-green-600" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          MineNepal Tools
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Your comprehensive toolkit for Minecraft servers and players. Check server status,
          lookup players, edit MOTDs, view skins, and access 25+ powerful tools.
        </p>
      </div>

      {/* Phase 1 - Core Tools */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faRocket} className="h-6 w-6 text-green-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phase1Tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
            />
          ))}
        </div>
      </section>

      {/* Phase 2 - Advanced Tools */}
      <section>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faCube} className="h-6 w-6 text-emerald-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Advanced Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phase2Tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Why Choose MineNepal Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Fast & Reliable</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized caching and efficient APIs ensure quick results every time
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Mobile Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fully responsive design works perfectly on all devices
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Easy to Use</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simple, intuitive interface designed for players and server admins
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
