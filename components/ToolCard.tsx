'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faServer,
  faNetworkWired,
  faCodeBranch,
  faPalette,
  faUser,
  faWandMagicSparkles,
  faImage,
  faChartLine,
  faStopwatch,
  faShieldHalved,
  faCodeCompare,
  faUserCheck,
  faImages,
  faChartBar,
  faClockRotateLeft,
  faFlask,
  faTableCells,
  faSeedling,
  faTree,
  faArrowsLeftRight,
  faMap,
  faShuffle,
  faDice,
  faNewspaper,
  faCube,
} from '@fortawesome/free-solid-svg-icons';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

const iconMap: Record<string, IconDefinition> = {
  server: faServer,
  'network-wired': faNetworkWired,
  'code-branch': faCodeBranch,
  palette: faPalette,
  user: faUser,
  sparkles: faWandMagicSparkles,
  image: faImage,
  'chart-line': faChartLine,
  stopwatch: faStopwatch,
  'shield-halved': faShieldHalved,
  'code-compare': faCodeCompare,
  'user-check': faUserCheck,
  images: faImages,
  'chart-bar': faChartBar,
  'clock-rotate-left': faClockRotateLeft,
  flask: faFlask,
  'table-cells': faTableCells,
  'treasure-chest': faCube,
  seedling: faSeedling,
  tree: faTree,
  'arrows-left-right': faArrowsLeftRight,
  map: faMap,
  shuffle: faShuffle,
  dice: faDice,
  photos: faImages,
  newspaper: faNewspaper,
};

export default function ToolCard({ title, description, icon, href }: ToolCardProps) {
  const iconDefinition = iconMap[icon] || faServer;

  return (
    <Link href={href}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 group">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={iconDefinition} className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
