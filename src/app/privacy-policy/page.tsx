import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Stillman Legal P.C. website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-navy-dark text-white overflow-hidden pt-[180px] pb-[80px]">
        <span className="ghost-text bottom-0 left-0 -translate-x-[5%] translate-y-[15%]">
          Policy
        </span>
        <div className="container-main relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl text-white capitalize">Privacy Policy</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="article-content max-w-[800px]">
            <p>
              Stillman Legal P.C. is committed to protecting your privacy. This privacy policy
              explains how we collect, use, and safeguard your personal information when you visit
              our website or use our services.
            </p>

            <h4>Information We Collect</h4>
            <p>
              We may collect personal information that you voluntarily provide to us when you fill
              out our contact form, request a consultation, or otherwise communicate with us. This
              may include your name, email address, phone number, and details about your legal
              matter.
            </p>

            <h4>How We Use Your Information</h4>
            <p>
              We use the information we collect to respond to your inquiries, evaluate your potential
              legal matter, communicate with you about our services, and improve our website. We do
              not sell or share your personal information with third parties for marketing purposes.
            </p>

            <h4>Confidentiality</h4>
            <p>
              All information you provide through our website is treated as confidential. However,
              submitting information through our website does not create an attorney-client
              relationship. An attorney-client relationship is only established through a signed
              retainer agreement.
            </p>

            <h4>Contact Us</h4>
            <p>
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
        </div>
      </section>
    </>
  );
}
