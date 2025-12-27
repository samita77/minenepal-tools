# MineNepal Minecraft Tools

A comprehensive, production-ready Minecraft utility website built with Next.js and Tailwind CSS. Features 25+ tools for Minecraft server administrators and players.

![MineNepal Minecraft Tools](https://github.com/user-attachments/assets/7fd967c1-5ac9-4fab-8d42-1643e18b867e)

## 🚀 Features

### Phase 1 - Core MVP Tools (Production Ready)

1. **Server Status** - Check if a Minecraft server is online, view players, version, MOTD, and server icon
2. **IP & Port Finder** - Resolve server IP address, port, and SRV records with geolocation
3. **Version Checker** - Browse Minecraft versions and protocol numbers (35+ versions)
4. **MOTD Editor** - Create and preview server MOTD with color codes in real-time
5. **UUID & Skin Lookup** - Find player UUID and view their Minecraft skin
6. **Enchantments Guide** - Get recommended enchantments for different items
7. **Player Skin Viewer** - Preview Minecraft player skins in 2D with download option

### Phase 2 - Advanced Tools

8. **Username Checker** - Check if a Minecraft username is available
9. **Coordinate Converter** - Convert between Overworld and Nether coordinates
10. **Crafting Reference** - View 24+ crafting recipes with search and filter
11. **Player Graph** - View server player count over time (coming soon)
12. **Ping Test** - Test server latency from multiple regions (coming soon)
13. **Whitelist/Ban Checker** - Check player status (coming soon)
14. **Version Comparison** - Compare versions across servers (coming soon)
15. **Skin Gallery** - Browse and customize skins (coming soon)
16. **Player Stats** - View player statistics (coming soon)
17. **UUID History** - View username change history (coming soon)
18. **Potion Calculator** - Calculate potion effects (coming soon)
19. **Loot Simulator** - Simulate mob drops (coming soon)
20. **Seed Analyzer** - Analyze seeds and find structures (coming soon)
21. **Biome Finder** - Find biomes at coordinates (coming soon)
22. **Seed Map** - Generate map from seed (coming soon)
23. **Random Skin** - Generate random skins (coming soon)
24. **Random Server** - Discover random servers (coming soon)
25. **MOTD Gallery** - Browse popular MOTDs (coming soon)
26. **Minecraft News** - Latest updates and patch notes (coming soon)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Font Awesome 7.1.0
- **HTTP Client**: Axios 1.13.2
- **APIs**: 
  - mcsrvstat.us (Server status)
  - Mojang API (Player data)
  - Crafatar (Player skins)

## 🎨 Design Features

- ✅ Card-based layout
- ✅ Font Awesome icons throughout
- ✅ Skeleton loaders for async operations
- ✅ Clean, readable design
- ✅ Dark mode support (CSS-based)
- ✅ Mobile-first responsive design
- ✅ SEO-friendly with metadata
- ✅ 64x64 PNG server icons and player skins

## ⚡ Caching Strategy

- **Server status**: 30s cache (online), 60s cache (offline)
- **IP location**: 24h cache
- **Player UUID & skin**: 24h cache
- **MOTD preview**: No cache
- **Enchantments**: No cache
- **Username availability**: 24h cache
- **Seed/Biome/Map tools**: No cache

Uses Next.js ISR and custom in-memory caching for optimal performance.

## 🚦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samita77/minenepal-tools.git
cd minenepal-tools
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
minenepal-tools/
├── app/
│   ├── api/              # API routes
│   │   ├── player/       # Player lookup API
│   │   └── server-status/ # Server status API
│   ├── tools/            # Tool pages (25+ tools)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── ToolCard.tsx      # Tool card component
│   └── LoadingSpinner.tsx # Loading states
├── lib/
│   ├── minecraft-api.ts  # Minecraft API functions
│   ├── utils.ts          # Utility functions
│   └── tools-data.ts     # Tool definitions
├── types/
│   └── index.ts          # TypeScript types
└── public/               # Static assets
```

## 🔧 Error Handling

- Graceful fallbacks for invalid addresses, usernames, seeds, or coordinates
- Friendly error messages
- Timeout handling (10s for server status, 5s for player lookup)
- Never crashes the page

## 🌐 API Integration

### Server Status
Uses mcsrvstat.us API to fetch:
- Online/offline status
- Player count
- Server version and protocol
- MOTD with color codes
- Server icon (64x64 PNG)
- Country location

### Player Lookup
Uses Mojang and Crafatar APIs to fetch:
- Player UUID from username
- Player skin textures
- Skin head/body renders
- Username history

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags
- Descriptive titles and descriptions
- Keyword optimization

## 🚀 Deployment

The site is ready for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 📄 License

Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Studios.

© 2025 MineNepal Minecraft Tools. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or feature requests, please open an issue on GitHub.

---

**Made with ❤️ for the Minecraft community**
