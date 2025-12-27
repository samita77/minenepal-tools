import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for MineNepal Tools. By using our website and tools, you agree to these terms and conditions.',
  openGraph: {
    title: 'Terms of Service | MineNepal Tools',
    description: 'Read the Terms of Service for MineNepal Tools.',
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FontAwesomeIcon icon={faGavel} className="h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last Updated: December 27, 2024
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of MineNepal Tools 
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) website located at{' '}
            <a href="https://tools.minenepal.xyz" className="text-green-600 hover:text-green-700 underline">
              https://tools.minenepal.xyz
            </a>{' '}
            (the &quot;Site&quot;) and all related services (collectively, the &quot;Services&quot;).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these 
            Terms, please do not use our Services.
          </p>
        </section>

        {/* Use of Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            2. Use of Services
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            2.1 Permitted Use
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You may use our Services for lawful purposes only. Our tools are designed to help Minecraft players 
            and server administrators access information and utilities related to Minecraft gameplay and server management.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            2.2 Prohibited Activities
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You agree NOT to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Use the Services for any illegal purpose or in violation of any laws</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use automated systems (bots, scrapers) to access the Services excessively</li>
            <li>Interfere with or disrupt the Services or servers</li>
            <li>Transmit viruses, malware, or any other malicious code</li>
            <li>Collect or harvest information from other users without consent</li>
            <li>Use the Services to harass, abuse, or harm others</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Violate Mojang&apos;s Terms of Service or End User License Agreement</li>
          </ul>
        </section>

        {/* No Account Required */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            3. No Account Required
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our Services do not require you to create an account or provide personal information. All tools are 
            accessible without registration. However, if you contact us, you must provide accurate information.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4. Intellectual Property Rights
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            4.1 Our Content
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Site and Services, including all content, features, and functionality, are owned by MineNepal Tools 
            and are protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            4.2 Minecraft Content
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Minecraft is a trademark of Mojang Studios. We are not affiliated with, endorsed by, or associated with 
            Mojang Studios or Microsoft Corporation. All Minecraft-related content displayed through our Services 
            is owned by Mojang Studios and is used in accordance with their guidelines.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            4.3 Third-Party Data
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our Services may display data obtained from third-party APIs (such as Mojang&apos;s API). This data is 
            property of its respective owners and is displayed in accordance with their terms of service.
          </p>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            5. Disclaimer of Warranties
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              IMPORTANT: PLEASE READ CAREFULLY
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We do not warrant that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>The Services will be uninterrupted, secure, or error-free</li>
            <li>The results obtained from using the Services will be accurate or reliable</li>
            <li>Any defects or errors will be corrected</li>
            <li>The Services will meet your requirements or expectations</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            TO THE FULLEST EXTENT PERMITTED BY LAW, MINENEPAL TOOLS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY 
            OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Your use or inability to use the Services</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of the Services</li>
            <li>Any bugs, viruses, or other harmful code</li>
            <li>Any errors or omissions in content</li>
            <li>Any actions taken based on information obtained through the Services</li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            7. Third-Party Links and Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our Services may contain links to third-party websites or services that are not owned or controlled by 
            MineNepal Tools. We have no control over and assume no responsibility for the content, privacy policies, 
            or practices of any third-party websites or services. You acknowledge and agree that we shall not be 
            liable for any damage or loss caused by your use of any third-party content or services.
          </p>
        </section>

        {/* Modifications to Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8. Modifications to Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any part of the Services at any time without 
            notice or liability. We may also impose limits on certain features or restrict access to parts or all 
            of the Services without notice.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            9. Termination
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may terminate or suspend your access to the Services immediately, without prior notice or liability, 
            if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            10. Governing Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
            conflict of law provisions. Any disputes arising from these Terms or the Services shall be resolved 
            through binding arbitration or in the courts of competent jurisdiction.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            11. Changes to Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting 
            the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Services 
            after changes become effective constitutes your acceptance of the revised Terms.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            12. Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have any questions about these Terms, please contact us at{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 underline">
              our contact page
            </a>{' '}
            or email us at{' '}
            <a href="mailto:contact@minenepal.xyz" className="text-green-600 hover:text-green-700 underline">
              contact@minenepal.xyz
            </a>.
          </p>
        </section>

        {/* Severability */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            13. Severability
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will 
            remain in full force and effect.
          </p>
        </section>

        {/* Entire Agreement */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            14. Entire Agreement
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms constitute the entire agreement between you and MineNepal Tools regarding the use of the 
            Services and supersede any prior agreements.
          </p>
        </section>

        {/* Footer Note */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            By using MineNepal Tools, you acknowledge that you have read, understood, and agree to be bound by 
            these Terms of Service.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            These Terms are effective as of December 27, 2024.
          </p>
        </section>
      </div>
    </div>
  );
}
