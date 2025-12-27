'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const minecraftVersions = [
  { version: '1.21.4', protocol: 769, releaseDate: '2024-12-03' },
  { version: '1.21.3', protocol: 768, releaseDate: '2024-10-22' },
  { version: '1.21.1', protocol: 767, releaseDate: '2024-08-08' },
  { version: '1.21', protocol: 767, releaseDate: '2024-06-13' },
  { version: '1.20.6', protocol: 766, releaseDate: '2024-04-29' },
  { version: '1.20.4', protocol: 765, releaseDate: '2023-12-07' },
  { version: '1.20.2', protocol: 764, releaseDate: '2023-09-21' },
  { version: '1.20.1', protocol: 763, releaseDate: '2023-06-12' },
  { version: '1.20', protocol: 763, releaseDate: '2023-06-07' },
  { version: '1.19.4', protocol: 762, releaseDate: '2023-03-14' },
  { version: '1.19.3', protocol: 761, releaseDate: '2022-12-07' },
  { version: '1.19.2', protocol: 760, releaseDate: '2022-08-05' },
  { version: '1.19.1', protocol: 760, releaseDate: '2022-07-27' },
  { version: '1.19', protocol: 759, releaseDate: '2022-06-07' },
  { version: '1.18.2', protocol: 758, releaseDate: '2022-02-28' },
  { version: '1.18.1', protocol: 757, releaseDate: '2021-12-10' },
  { version: '1.18', protocol: 757, releaseDate: '2021-11-30' },
  { version: '1.17.1', protocol: 756, releaseDate: '2021-07-06' },
  { version: '1.17', protocol: 755, releaseDate: '2021-06-08' },
  { version: '1.16.5', protocol: 754, releaseDate: '2021-01-15' },
  { version: '1.16.4', protocol: 754, releaseDate: '2020-11-02' },
  { version: '1.16.3', protocol: 753, releaseDate: '2020-09-10' },
  { version: '1.16.2', protocol: 751, releaseDate: '2020-08-11' },
  { version: '1.16.1', protocol: 736, releaseDate: '2020-06-24' },
  { version: '1.16', protocol: 735, releaseDate: '2020-06-23' },
  { version: '1.15.2', protocol: 578, releaseDate: '2020-01-21' },
  { version: '1.15.1', protocol: 575, releaseDate: '2019-12-17' },
  { version: '1.15', protocol: 573, releaseDate: '2019-12-10' },
  { version: '1.14.4', protocol: 498, releaseDate: '2019-07-19' },
  { version: '1.13.2', protocol: 404, releaseDate: '2018-10-22' },
  { version: '1.12.2', protocol: 340, releaseDate: '2017-09-18' },
  { version: '1.11.2', protocol: 316, releaseDate: '2016-12-21' },
  { version: '1.10.2', protocol: 210, releaseDate: '2016-06-23' },
  { version: '1.9.4', protocol: 110, releaseDate: '2016-05-10' },
  { version: '1.8.9', protocol: 47, releaseDate: '2015-12-09' },
];

export default function VersionCheckerPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVersions = minecraftVersions.filter(v =>
    v.version.includes(searchTerm) || v.protocol.toString().includes(searchTerm)
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <FontAwesomeIcon icon={faCodeBranch} className="h-16 w-16 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Minecraft Version Checker
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          View Minecraft versions and their protocol numbers
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search version or protocol number..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Protocol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Release Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredVersions.map((v, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {v.version}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {v.protocol}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {v.releaseDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
