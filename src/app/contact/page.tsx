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
      {/* Hero */}
      <section className="bg-navy-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl max-w-3xl">
            Contact <span className="text-gold italic">Stillman Legal</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Your immigration status doesn&apos;t matter! We can help you. All inquiries and consultations are kept confidential.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact details */}
            <div>
              <h2 className="font-heading text-3xl text-navy mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Office Address</h3>
                    <p className="text-gray-600">42 Broadway, 12th Floor</p>
                    <p className="text-gray-600">New York, NY 10004</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Phone</h3>
                    <a href="tel:212-832-1000" className="text-steel hover:text-gold transition-colors text-lg font-medium">
                      212-832-1000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Email</h3>
                    <a href="mailto:Info@StillmanLegalPC.com" className="text-steel hover:text-gold transition-colors">
                      Info@StillmanLegalPC.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-12 rounded-xl overflow-hidden h-[300px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.686694539665!2d-74.01372!3d40.706436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1719a3c4e7%3A0x7a7e8c7f6b7f7f7f!2s42%20Broadway%2C%20New%20York%2C%20NY%2010004!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stillman Legal P.C. Office Location"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-warm-light rounded-2xl p-8 md:p-10">
                <h2 className="font-heading text-2xl text-navy mb-2">Free Case Evaluation</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll review your case within 24 hours.
                </p>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
