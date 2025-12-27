import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how MineNepal Tools collects, uses, and protects your information. We are committed to protecting your privacy and ensuring transparency.',
  openGraph: {
    title: 'Privacy Policy | MineNepal Tools',
    description: 'Learn how MineNepal Tools collects, uses, and protects your information.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FontAwesomeIcon icon={faShieldAlt} className="h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last Updated: December 27, 2024
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At MineNepal Tools ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
            <a href="https://tools.minenepal.xyz" className="text-green-600 hover:text-green-700 underline">
              https://tools.minenepal.xyz
            </a>
            {' '}(the "Site").
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
            please do not access the Site.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            1. Information We Collect
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            1.1 Automatically Collected Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            When you visit our Site, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address (anonymized)</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Date and time of visits</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            1.2 Information You Provide
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We do not require you to create an account or provide personal information to use our tools. However, 
            if you contact us via email or other means, we may collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
            <li>Your name (if provided)</li>
            <li>Email address</li>
            <li>Any information included in your message</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            1.3 Tool Usage Data
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            When you use our tools (e.g., server status checker, UUID lookup), we may temporarily process the 
            data you input (such as server addresses or usernames) to provide the service. This data is not 
            stored permanently and is only used to deliver the requested results.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Provide, operate, and maintain our website and tools</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our Site</li>
            <li>Develop new features, products, and services</li>
            <li>Respond to your comments, questions, and provide customer support</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Monitor and analyze usage and trends to improve user experience</li>
          </ul>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We may use cookies and similar tracking technologies to track activity on our Site and store certain 
            information. Cookies are files with small amounts of data that are sent to your browser from a website 
            and stored on your device.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use cookies for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
            <li>Remembering your preferences and settings</li>
            <li>Understanding how you use our Site</li>
            <li>Improving Site performance and user experience</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
            if you do not accept cookies, you may not be able to use some portions of our Site.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We may use third-party service providers to help us operate our Site and provide our services:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            4.1 Google AdSense
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads 
            based on your prior visits to our Site or other websites. You may opt out of personalized advertising 
            by visiting{' '}
            <a 
              href="https://www.google.com/settings/ads" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 underline"
            >
              Google Ads Settings
            </a>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            4.2 Analytics Services
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may use analytics services to monitor and analyze Site traffic. These services may use cookies and 
            other tracking technologies to collect information about your use of our Site.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your information. 
            However, please note that no method of transmission over the Internet or electronic storage is 100% secure. 
            While we strive to use commercially acceptable means to protect your information, we cannot guarantee 
            its absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            6. Data Retention
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We retain automatically collected information for as long as necessary to fulfill the purposes outlined 
            in this Privacy Policy, unless a longer retention period is required by law. Tool usage data is processed 
            in real-time and not stored permanently.
          </p>
        </section>

        {/* Your Privacy Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Your Privacy Rights
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>The right to access your personal information</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to object to processing of your information</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Children's Privacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our Site is not directed to children under the age of 13. We do not knowingly collect personal information 
            from children under 13. If you are a parent or guardian and believe your child has provided us with 
            personal information, please contact us so we can delete such information.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
            Policy periodically for any changes.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have questions or concerns about this Privacy Policy, please contact us at{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 underline">
              our contact page
            </a>{' '}
            or email us at{' '}
            <a href="mailto:contact@minenepal.xyz" className="text-green-600 hover:text-green-700 underline">
              contact@minenepal.xyz
            </a>.
          </p>
        </section>

        {/* Footer Note */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            This Privacy Policy is effective as of December 27, 2024.
          </p>
        </section>
      </div>
    </div>
  );
}
