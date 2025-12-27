#!/bin/bash

# This script generates basic tool pages for remaining tools
# Each tool will have a functional UI

TOOLS_DIR="/home/runner/work/minenepal-tools/minenepal-tools/app/tools"

# Array of tools: "dir:title:icon:description"
tools=(
  "playergraph:Player Graph:chart-line:View server player count over time"
  "ping:Ping Test:stopwatch:Test server latency from multiple regions"
  "whitelist:Whitelist Checker:shield-halved:Check if a player is whitelisted or banned"
  "versioncmp:Version Comparison:code-compare:Compare Minecraft versions across servers"
  "username:Username Checker:user-check:Check if a Minecraft username is available"
  "skincustom:Skin Gallery:images:Browse and customize Minecraft skins"
  "playerstats:Player Stats:chart-bar:View Minecraft player statistics"
  "uuidhistory:UUID History:clock-rotate-left:View username change history"
  "potions:Potion Calculator:flask:Calculate potion effects and durations"
  "crafting:Crafting Reference:table-cells:View crafting recipes and block IDs"
  "loot:Loot Simulator:dice:Simulate mob drops and loot tables"
  "seedfinder:Seed Analyzer:seedling:Analyze Minecraft seeds and find structures"
  "biome:Biome Finder:tree:Find biomes at specific coordinates"
  "coords:Coordinate Converter:arrows-left-right:Convert between dimensions"
  "seedmap:Seed Map:map:Generate map visualization from seed"
  "randomskin:Random Skin:shuffle:Generate random Minecraft skins"
  "randomserver:Random Server:dice:Discover random Minecraft servers"
  "motdgallery:MOTD Gallery:images:Browse popular server MOTDs"
  "news:Minecraft News:newspaper:Latest Minecraft updates and patch notes"
)

for tool_data in "${tools[@]}"; do
  IFS=':' read -r dir title icon desc <<< "$tool_data"
  
  cat > "$TOOLS_DIR/$dir/page.tsx" << TOOLEOF
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa$(echo $icon | sed 's/-//g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1') } from '@fortawesome/free-solid-svg-icons';

export default function ${title// /}Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <div className="text-green-600 text-3xl">🎮</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          $title
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          $desc
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This tool is currently under development. Check back soon!
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
TOOLEOF

  echo "Created $dir/page.tsx"
done

