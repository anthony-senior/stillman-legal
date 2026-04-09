import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden pt-[180px] pb-[130px]">
        <span className="ghost-text bottom-0 left-0 -translate-x-[5%] translate-y-[15%]">
          Details
        </span>

        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="lg:max-w-[700px]">
              <p className="section-label">Immigration Law</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] text-white capitalize mb-6">
                {service.title}
              </h1>
              <p className="text-white/50 text-lg leading-relaxed">
                {service.heroDescription}
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#consultation" className="btn-primary">
                Ask For Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE CONTENT (Full-width, no sidebar) ── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="article-content">
            {service.sections.map((section, idx) => (
              <div key={section.heading} className={idx > 0 ? "mt-12" : ""}>
                <h4>{section.heading}</h4>
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {section.listItems && (
                  <div className="highlight-box">
                    <h4>Key Points</h4>
                    <ul>
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQs if present */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-16">
              <h4 className="font-heading text-2xl text-navy mb-8">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="faq-item border-b border-gray-200 pb-4">
                    <summary className="flex justify-between items-center cursor-pointer py-4 font-medium text-navy hover:text-gold transition-colors">
                      {faq.question}
                      <svg className="w-5 h-5 flex-shrink-0 text-gold transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                      </svg>
                    </summary>
                    <p className="text-gray-500 leading-relaxed pb-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 bg-gold-10">
        <div className="container-main text-center">
          <h2 className="font-heading text-3xl text-navy capitalize mb-4">
            Start Your Immigration Journey Today
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our experienced immigration attorneys will guide you through every step of the process.
            Contact us for a free consultation.
          </p>
          <a href="tel:212-832-1000" className="btn-primary">
            Call 212-832-1000
          </a>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section id="consultation" className="relative section-padding bg-navy-dark text-white overflow-hidden">
        <span className="ghost-text bottom-0 right-0 translate-x-[15%] translate-y-[10%]">
          Consult
        </span>
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <p className="section-label">Free Evaluation</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white capitalize mb-4">
              Get A Free Consultation
            </h2>
            <p className="text-white/50 text-lg">
              Tell us about your immigration needs and we&apos;ll review your case within 24 hours.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white p-8 md:p-12 text-gray-800">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
