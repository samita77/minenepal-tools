import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers regarding the use of MineNepal Tools. Please read these disclaimers carefully before using our services.',
  openGraph: {
    title: 'Disclaimer | MineNepal Tools',
    description: 'Important disclaimers regarding the use of MineNepal Tools.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FontAwesomeIcon icon={faExclamationTriangle} className="h-16 w-16 text-yellow-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last Updated: December 27, 2024
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The information provided by MineNepal Tools (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on{' '}
            <a href="https://tools.minenepal.xyz" className="text-green-600 hover:text-green-700 underline">
              https://tools.minenepal.xyz
            </a>{' '}
            (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in 
            good faith, however we make no representation or warranty of any kind, express or implied, regarding 
            the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
        </section>

        {/* No Affiliation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            1. No Affiliation with Mojang or Microsoft
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              IMPORTANT NOTICE
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              MineNepal Tools is NOT affiliated with, endorsed by, sponsored by, or associated with Mojang Studios, 
              Mojang AB, or Microsoft Corporation in any way. We are an independent, third-party tool provider.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Minecraft® is a registered trademark of Mojang Studios. All Minecraft-related content, including but not 
            limited to game assets, textures, names, and terminology, are the property of Mojang Studios and are used 
            in accordance with Mojang&apos;s Brand and Asset Guidelines.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Any use of Minecraft-related content on this Site is for informational and utility purposes only and does 
            not imply any endorsement or partnership.
          </p>
        </section>

        {/* External Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            2. External Links Disclaimer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Site may contain links to external websites that are not provided or maintained by or in any way 
            affiliated with MineNepal Tools. Please note that we do not guarantee the accuracy, relevance, timeliness, 
            or completeness of any information on these external websites.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We have no control over the nature, content, and availability of external sites. The inclusion of any 
            links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
        </section>

        {/* Accuracy of Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. Accuracy of Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            While we strive to provide accurate and up-to-date information through our tools and services, we make 
            no warranties or representations as to the accuracy, completeness, or reliability of any information 
            displayed on the Site.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The data displayed through our tools is obtained from various sources, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
            <li>Mojang&apos;s official APIs</li>
            <li>Third-party Minecraft server status APIs</li>
            <li>User-provided input data</li>
            <li>Publicly available Minecraft information</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We are not responsible for any errors, inaccuracies, or omissions in the data provided by these sources. 
            Information may be outdated, incomplete, or incorrect due to factors beyond our control, such as API 
            changes, server downtime, or network issues.
          </p>
        </section>

        {/* No Professional Advice */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4. No Professional Advice
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The information on the Site is provided for informational and entertainment purposes only. It is not 
            intended as professional advice, and should not be construed as such. You should consult appropriate 
            professionals for specific advice tailored to your situation.
          </p>
        </section>

        {/* Use at Your Own Risk */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5. Use at Your Own Risk
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS 
            A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE 
            SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This includes, but is not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Loss of data or game progress</li>
            <li>Server management decisions based on our tools</li>
            <li>Any actions taken based on information from our tools</li>
            <li>Financial losses resulting from use of our services</li>
            <li>Violations of third-party terms of service</li>
          </ul>
        </section>

        {/* Service Availability */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            6. Service Availability
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We make no guarantees regarding the availability, reliability, or uptime of our services. The Site and 
            all tools may be unavailable at any time due to maintenance, technical issues, or other factors beyond 
            our control. We reserve the right to modify, suspend, or discontinue any part of the Site at any time 
            without notice.
          </p>
        </section>

        {/* Third-Party APIs and Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Third-Party APIs and Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Many of our tools rely on third-party APIs and services, including but not limited to Mojang&apos;s official 
            APIs. We have no control over these third-party services and cannot guarantee their availability, 
            accuracy, or continued operation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Changes to third-party APIs or services may affect the functionality of our tools. We are not responsible 
            for any disruptions caused by third-party service changes, outages, or discontinuations.
          </p>
        </section>

        {/* Rate Limiting and Fair Use */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Rate Limiting and Fair Use
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To ensure fair access for all users and comply with third-party API terms, we may implement rate limiting 
            on our tools. Excessive or abusive use of our services may result in temporary or permanent restrictions 
            on your access.
          </p>
        </section>

        {/* User Responsibility */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            9. User Responsibility
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You are solely responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Verifying the accuracy of information before taking action based on it</li>
            <li>Complying with Mojang&apos;s Terms of Service and EULA</li>
            <li>Complying with the terms of service of any Minecraft servers you interact with</li>
            <li>Ensuring your use of our tools does not violate any laws or regulations</li>
            <li>Protecting your own data and privacy when using our services</li>
          </ul>
        </section>

        {/* Changes to Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10. Changes to This Disclaimer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We reserve the right to update or modify this Disclaimer at any time without prior notice. Changes will 
            be effective immediately upon posting to the Site. Your continued use of the Site following the posting 
            of changes constitutes your acceptance of such changes.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            11. Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have any questions about this Disclaimer, please contact us at{' '}
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
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center font-semibold mb-2">
              BY USING MINENEPAL TOOLS, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS DISCLAIMER AND AGREE TO ITS TERMS.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              This Disclaimer is effective as of December 27, 2024.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
