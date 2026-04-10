import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { ConsultationForm } from "@/components/ConsultationForm";

export function generateStaticParams() {
  return practiceAreas.map((pa) => ({ slug: pa.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return { title: area.metaTitle, description: area.metaDescription };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden pt-[180px] pb-[130px]">
        {area.heroImage && (
          <>
            <Image
              src={area.heroImage}
              alt={area.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/60 to-navy-dark/40" />
          </>
        )}
        <span className="ghost-text bottom-0 left-0 -translate-x-[5%] translate-y-[15%]">
          Details
        </span>

        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="lg:max-w-[700px]">
              <p className="section-label">Employment Law</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] text-white capitalize mb-6">
                {area.heroTitle}
              </h1>
              <p className="text-white/50 text-lg leading-relaxed">
                {area.heroDescription}
              </p>
              <p className="text-gold font-medium mt-4">No Fee Unless We Win Your Case</p>
            </div>
            <div className="flex-shrink-0">
              <a href="#consultation" className="btn-primary">
                Ask For Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND (if applicable) ── */}
      {area.stats && (
        <section className="bg-navy py-16">
          <div className="container-main">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {area.stats.map((stat, idx) => (
                <div key={stat.value} className="flex items-center gap-8 flex-1">
                  {idx > 0 && <div className="vertical-divider hidden md:block" />}
                  <div>
                    <p className="font-heading text-5xl text-gold">{stat.value}</p>
                    <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            {area.calloutText && (
              <p className="text-center text-white font-medium mt-10 text-lg">{area.calloutText}</p>
            )}
          </div>
        </section>
      )}

      {/* ── ARTICLE CONTENT (Full-width, no sidebar) ── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="article-content">
            {area.sections.map((section, idx) => (
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
          {area.faqs && area.faqs.length > 0 && (
            <div className="mt-16">
              <h4 className="font-heading text-2xl text-navy mb-8">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {area.faqs.map((faq) => (
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
            Believe Your Rights Were Violated?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Contact us today for a free, confidential consultation. We don&apos;t charge any fees unless we win your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:212-832-1000" className="btn-primary">
              Call 212-832-1000
            </a>
            <a href="#consultation" className="btn-outline text-navy border-navy/30 hover:border-gold hover:text-gold">
              Fill Out Our Form
            </a>
          </div>
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
              Tell us about your {area.title.toLowerCase()} case and we&apos;ll review it within 24 hours.
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
