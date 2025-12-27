import { MetadataRoute } from 'next';
import { tools } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tools.minenepal.xyz';
  const lastModified = new Date('2024-12-27');

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Tool pages - dynamically generated from tools data
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: tool.phase === 1 ? 0.9 : 0.8,
  }));

  return [...staticPages, ...toolPages];
}
