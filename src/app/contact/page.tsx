import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Stillman Legal P.C. for a free consultation. Call 212-832-1000 or visit us at 42 Broadway, 12th Floor, New York, NY 10004.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy text-white overflow-hidden pt-[180px] pb-[130px]">
        <span className="ghost-text bottom-0 left-0 -translate-x-[5%] translate-y-[15%]">
          Contact
        </span>

        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
            {/* Left: heading */}
            <div className="lg:w-1/2">
              <p className="section-label">Get In Touch</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] text-white capitalize">
                Get in touch <span className="text-gold">with us!</span>
              </h1>
              <p className="text-white/50 text-lg mt-4 max-w-md">
                Your immigration status doesn&apos;t matter! We can help you.
                All inquiries and consultations are kept confidential.
              </p>
            </div>

            {/* Vertical divider */}
            <div className="vertical-divider hidden lg:block mx-12" />

            {/* Right: contact info */}
            <div className="lg:flex-1">
              <div className="space-y-6">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white/80">42 Broadway, 12th Floor</p>
                  <p className="text-white/80">New York, NY 10004</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:Info@StillmanLegalPC.com" className="text-white/80 hover:text-gold transition-colors">
                    Info@StillmanLegalPC.com
                  </a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:212-832-1000" className="text-white/80 hover:text-gold transition-colors text-xl font-heading">
                    212-832-1000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM (Full-width centered) ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-navy capitalize mb-4">
              How We Can Help You
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Fill up the form and we&apos;ll be in touch very soon.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto">
            <div className="bg-gold-10 p-8 md:p-12">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
