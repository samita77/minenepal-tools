export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <div className="text-green-600 text-3xl">🎮</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Coming Soon
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          This tool is currently under development
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Check back soon for more features!
          </p>
          <a
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
