import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas, getPracticeArea, type PracticeArea } from "@/data/practice-areas";
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

/* ── Shared hero ────────────────────────────────────────── */
function Hero({ area }: { area: PracticeArea }) {
  return (
    <section className="bg-navy-dark text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Employment Law
          </p>
          <h1 className="font-heading text-4xl md:text-5xl mb-6">{area.heroTitle}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{area.heroDescription}</p>
          <p className="text-gold font-medium mt-4">No Fee Unless We Win Your Case</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#consultation" className="bg-gold text-navy-dark px-8 py-4 rounded font-medium hover:bg-gold-light transition-colors text-center uppercase tracking-wider text-sm">
              Free Consultation
            </a>
            <a href="tel:212-832-1000" className="border-2 border-white/30 text-white px-8 py-4 rounded font-medium hover:border-gold hover:text-gold transition-colors text-center text-sm">
              Call 212-832-1000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section renderer ───────────────────────────────────── */
function ContentSection({ section }: { section: PracticeArea["sections"][number] }) {
  return (
    <div>
      <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">{section.heading}</h2>
      <div className="space-y-4">
        {section.content.map((para, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
        ))}
      </div>
      {section.listItems && (
        <ul className="mt-4 space-y-2">
          {section.listItems.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Sidebar ───────────────────────────────────────────── */
function Sidebar({ area }: { area: PracticeArea }) {
  const otherAreas = practiceAreas.filter((pa) => pa.slug !== area.slug).slice(0, 5);
  return (
    <div className="space-y-8">
      <div className="bg-warm-light rounded-xl p-6">
        <h3 className="font-heading text-xl text-navy mb-4">Other Practice Areas</h3>
        <div className="space-y-3">
          {otherAreas.map((pa) => (
            <Link key={pa.slug} href={`/practice-areas/${pa.slug}`} className="block text-sm text-gray-600 hover:text-steel transition-colors py-1 border-b border-gray-200 last:border-0">
              {pa.title}
            </Link>
          ))}
          <Link href="/practice-areas" className="block text-sm text-steel hover:text-gold font-medium pt-2">View All</Link>
        </div>
      </div>
      <div className="bg-navy-dark rounded-xl p-6 text-white sticky top-24">
        <h3 className="font-heading text-xl text-gold mb-2">Free Consultation</h3>
        <p className="text-white/60 text-sm mb-4">Speak with an experienced attorney today.</p>
        <a href="tel:212-832-1000" className="block text-center bg-gold text-navy-dark px-6 py-3 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm mb-3">Call 212-832-1000</a>
        <a href="#consultation" className="block text-center border border-white/30 text-white px-6 py-3 rounded text-sm hover:border-gold hover:text-gold transition-colors">Fill Out Our Form</a>
      </div>
    </div>
  );
}

/* ── LAYOUT: standard (sidebar + content) ───────────── */
function LayoutStandard({ area }: { area: PracticeArea }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {area.sections.map((s) => <ContentSection key={s.heading} section={s} />)}
            <CtaBanner />
          </div>
          <Sidebar area={area} />
        </div>
      </div>
    </section>
  );
}

/* ── LAYOUT: sidebar-stats (sidebar with stat cards) ── */
function LayoutSidebarStats({ area }: { area: PracticeArea }) {
  return (
    <>
      {/* Stats band */}
      {area.stats && (
        <section className="bg-navy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {area.stats.map((stat) => (
                <div key={stat.value} className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                  <p className="font-heading text-4xl text-gold mb-2">{stat.value}</p>
                  <p className="text-white/70 uppercase tracking-wider text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
            {area.calloutText && (
              <p className="text-center text-white font-medium mt-8">{area.calloutText}</p>
            )}
          </div>
        </section>
      )}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {area.sections.map((s) => <ContentSection key={s.heading} section={s} />)}
              <CtaBanner />
            </div>
            <Sidebar area={area} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ── LAYOUT: evidence-list (full-width with evidence boxes) */
function LayoutEvidenceList({ area }: { area: PracticeArea }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {area.sections.map((section, idx) => (
          <div key={section.heading} className={`${idx > 0 ? "mt-16 pt-16 border-t border-gray-200" : ""}`}>
            <div className={idx % 2 === 0 ? "" : "bg-warm-light rounded-2xl p-8 md:p-12"}>
              <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">{section.heading}</h2>
              <div className="space-y-4">
                {section.content.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
              {section.listItems && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                  {section.listItems.map((item, i) => (
                    <div key={i} className="flex gap-3 bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                      <div className="w-6 h-6 bg-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <CtaBanner />
          </div>
          <Sidebar area={area} />
        </div>
      </div>
    </section>
  );
}

/* ── LAYOUT: faq-focus (content + FAQ accordion) ────── */
function LayoutFaqFocus({ area }: { area: PracticeArea }) {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {area.sections.map((s) => <ContentSection key={s.heading} section={s} />)}
            </div>
            <Sidebar area={area} />
          </div>
        </div>
      </section>
      {area.faqs && (
        <section className="py-20 md:py-28 bg-warm-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl text-navy text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {area.faqs.map((faq) => (
                <details key={faq.question} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-navy hover:text-steel transition-colors">
                    {faq.question}
                    <svg className="w-5 h-5 flex-shrink-0 text-gold group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ── LAYOUT: full-width (no sidebar, wide content) ──── */
function LayoutFullWidth({ area }: { area: PracticeArea }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {area.sections.map((section, idx) => (
            <div key={section.heading} className={idx > 0 ? "pt-16 border-t border-gray-200" : ""}>
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8">{section.heading}</h2>
              <div className="space-y-6">
                {section.content.map((para, i) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed">{para}</p>
                ))}
              </div>
              {section.listItems && (
                <ul className="mt-6 space-y-3">
                  {section.listItems.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 text-lg">
                      <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {/* Inline CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-heading text-2xl md:text-3xl mb-4">
            Believe Your Rights Were Violated?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Contact us today for a free, confidential consultation. We don&apos;t charge any fees unless we win your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:212-832-1000" className="bg-gold text-navy-dark px-8 py-3 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm">
              Call 212-832-1000
            </a>
            <a href="#consultation" className="border border-white/30 text-white px-8 py-3 rounded text-sm hover:border-gold hover:text-gold transition-colors">
              Fill Out Our Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── LAYOUT: two-column (alternating content/highlight) ─ */
function LayoutTwoColumn({ area }: { area: PracticeArea }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {area.sections.map((section, idx) => (
          <div key={section.heading} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
            <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">{section.heading}</h2>
              <div className="space-y-4">
                {section.content.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
              {section.listItems && (
                <ul className="mt-4 space-y-2">
                  {section.listItems.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={`bg-warm-light rounded-2xl p-8 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-navy">Key Takeaway</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {section.content[0]}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a href="tel:212-832-1000" className="text-steel hover:text-gold transition-colors font-medium text-sm">
                  Questions? Call 212-832-1000
                </a>
              </div>
            </div>
          </div>
        ))}
        <CtaBanner />
      </div>
    </section>
  );
}

/* ── CTA Banner ─────────────────────────────────────── */
function CtaBanner() {
  return (
    <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
      <h3 className="font-heading text-2xl mb-4">Don&apos;t Wait To Get Legal Help</h3>
      <p className="text-white/70 mb-6">
        Contact us for a free, confidential consultation. We don&apos;t charge any fees unless we win your case.
      </p>
      <a href="tel:212-832-1000" className="inline-block bg-gold text-navy-dark px-8 py-3 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm">
        Call 212-832-1000
      </a>
    </div>
  );
}

/* ── Consultation form section ──────────────────────── */
function ConsultationSection({ area }: { area: PracticeArea }) {
  return (
    <section id="consultation" className="py-20 md:py-28 bg-navy-dark text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Get A Free Consultation</h2>
          <p className="text-white/70 text-lg">
            Tell us about your {area.title.toLowerCase()} case and we&apos;ll review it within 24 hours.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-800">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

/* ── Page component ─────────────────────────────────── */
export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const layoutMap: Record<string, React.ComponentType<{ area: PracticeArea }>> = {
    standard: LayoutStandard,
    "sidebar-stats": LayoutSidebarStats,
    "evidence-list": LayoutEvidenceList,
    "faq-focus": LayoutFaqFocus,
    "full-width": LayoutFullWidth,
    "two-column": LayoutTwoColumn,
  };

  const LayoutComponent = layoutMap[area.layout] || LayoutStandard;

  return (
    <>
      <Hero area={area} />
      <LayoutComponent area={area} />
      <ConsultationSection area={area} />
    </>
  );
}
