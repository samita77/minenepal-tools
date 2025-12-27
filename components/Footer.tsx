import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">MineNepal Minecraft Tools</h3>
            <p className="text-sm">
              Your comprehensive toolkit for Minecraft servers and players. Check server status,
              lookup players, edit MOTDs, and much more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/status" className="hover:text-green-400 transition-colors">
                  Server Status
                </Link>
              </li>
              <li>
                <Link href="/tools/uuid" className="hover:text-green-400 transition-colors">
                  UUID Lookup
                </Link>
              </li>
              <li>
                <Link href="/tools/motd" className="hover:text-green-400 transition-colors">
                  MOTD Editor
                </Link>
              </li>
              <li>
                <Link href="/tools/enchants" className="hover:text-green-400 transition-colors">
                  Enchantments
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Legal</h3>
            <p className="text-sm">
              Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Studios.
            </p>
            <p className="text-sm mt-4">
              © {new Date().getFullYear()} MineNepal Minecraft Tools. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
