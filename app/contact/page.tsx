import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MineNepal Tools. We welcome your feedback, suggestions, bug reports, and partnership inquiries.',
  openGraph: {
    title: 'Contact Us | MineNepal Tools',
    description: 'Get in touch with MineNepal Tools. We welcome your feedback, suggestions, and inquiries.',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FontAwesomeIcon icon={faEnvelope} className="h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Get in touch with any questions or feedback.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-10">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faComments} className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Reach Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Email</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                For general inquiries, feedback, or support:
              </p>
              <a 
                href="mailto:contact@minenepal.xyz" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                contact@minenepal.xyz
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">GitHub</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Report bugs or request features:
              </p>
              <a 
                href="https://github.com/samita77/minenepal-tools" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        {/* What We Welcome Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What We Welcome
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">💡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feature Suggestions</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Have an idea for a new tool or feature? We're always looking to improve and expand our offerings based on community feedback.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">🐛</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Bug Reports</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Found something that's not working correctly? Let us know so we can fix it quickly.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">💬</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">General Feedback</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Share your experience using MineNepal Tools. Your feedback helps us improve the platform for everyone.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">🤝</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Partnership Inquiries</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Interested in partnering with us or have a business proposal? We're open to collaboration opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 mt-1">❓</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Support Questions</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Need help using one of our tools? We're here to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="mb-10 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Response Time</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            We typically respond to inquiries within 24-48 hours. For urgent issues, please mark your email as 
            "Urgent" in the subject line. Thank you for your patience!
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Before You Contact Us
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q: Are all tools really free?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Yes! All our tools are 100% free to use with no hidden charges or subscription fees.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q: Do I need to create an account?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                No, you can access all tools without creating an account or providing personal information.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Q: Is MineNepal Tools affiliated with Mojang?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                No, we are an independent platform and not affiliated with Mojang Studios or Microsoft Corporation.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            We value your privacy and will never share your contact information with third parties.
            Please review our{' '}
            <a href="/privacy" className="text-green-600 hover:text-green-700 underline">
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            Last Updated: December 27, 2024
          </p>
        </section>
      </div>
    </div>
  );
}
