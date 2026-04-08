import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Stillman Legal P.C. website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-gray-600 leading-relaxed">
            Stillman Legal P.C. is committed to protecting your privacy. This privacy policy
            explains how we collect, use, and safeguard your personal information when you visit
            our website or use our services.
          </p>

          <h2 className="font-heading text-2xl text-navy mt-12 mb-4">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information that you voluntarily provide to us when you fill
            out our contact form, request a consultation, or otherwise communicate with us. This
            may include your name, email address, phone number, and details about your legal
            matter.
          </p>

          <h2 className="font-heading text-2xl text-navy mt-12 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to respond to your inquiries, evaluate your potential
            legal matter, communicate with you about our services, and improve our website. We do
            not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="font-heading text-2xl text-navy mt-12 mb-4">Confidentiality</h2>
          <p className="text-gray-600 leading-relaxed">
            All information you provide through our website is treated as confidential. However,
            submitting information through our website does not create an attorney-client
            relationship. An attorney-client relationship is only established through a signed
            retainer agreement.
          </p>

          <h2 className="font-heading text-2xl text-navy mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this privacy policy, please contact us at{" "}
            <a href="mailto:Info@StillmanLegalPC.com" className="text-steel hover:text-gold transition-colors">
              Info@StillmanLegalPC.com
            </a>{" "}
            or call{" "}
            <a href="tel:212-832-1000" className="text-steel hover:text-gold transition-colors">
              212-832-1000
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
