import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { immigrationServices, getImmigrationService } from "@/data/immigration";
import { ConsultationForm } from "@/components/ConsultationForm";

export function generateStaticParams() {
  return immigrationServices.map((is) => ({ slug: is.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getImmigrationService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ImmigrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getImmigrationService(slug);
  if (!service) notFound();

  const otherServices = immigrationServices.filter((is) => is.slug !== slug).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Immigration Law
            </p>
            <h1 className="font-heading text-4xl md:text-5xl mb-6">
              {service.title}
            </h1>
            <p className="text-white/70 text-lg">{service.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#consultation"
                className="bg-gold text-navy-dark px-8 py-4 rounded font-medium hover:bg-gold-light transition-colors text-center uppercase tracking-wider text-sm"
              >
                Free Consultation
              </a>
              <a
                href="tel:212-832-1000"
                className="border-2 border-white/30 text-white px-8 py-4 rounded font-medium hover:border-gold hover:text-gold transition-colors text-center text-sm"
              >
                Call 212-832-1000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
                <h3 className="font-heading text-2xl mb-4">
                  Start Your Immigration Journey Today
                </h3>
                <p className="text-white/70 mb-6">
                  Our experienced immigration attorneys will guide you through every step of the process.
                  Contact us for a free consultation.
                </p>
                <a
                  href="tel:212-832-1000"
                  className="inline-block bg-gold text-navy-dark px-8 py-3 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm"
                >
                  Call 212-832-1000
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-warm-light rounded-xl p-6">
                <h3 className="font-heading text-xl text-navy mb-4">Immigration Services</h3>
                <div className="space-y-3">
                  {otherServices.map((is) => (
                    <Link
                      key={is.slug}
                      href={`/immigration/${is.slug}`}
                      className="block text-sm text-gray-600 hover:text-steel transition-colors py-1 border-b border-gray-200 last:border-0"
                    >
                      {is.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-navy-dark rounded-xl p-6 text-white sticky top-24">
                <h3 className="font-heading text-xl text-gold mb-2">Free Consultation</h3>
                <p className="text-white/60 text-sm mb-4">
                  Speak with an experienced immigration attorney today.
                </p>
                <a
                  href="tel:212-832-1000"
                  className="block text-center bg-gold text-navy-dark px-6 py-3 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm mb-3"
                >
                  Call 212-832-1000
                </a>
                <a
                  href="#consultation"
                  className="block text-center border border-white/30 text-white px-6 py-3 rounded text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  Fill Out Our Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section id="consultation" className="py-20 md:py-28 bg-navy-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Get A Free Consultation
            </h2>
            <p className="text-white/70 text-lg">
              Tell us about your immigration needs and we&apos;ll review your case within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-800">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
