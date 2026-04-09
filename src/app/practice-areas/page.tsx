import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore our employment law practice areas. Stillman Legal P.C. handles discrimination, harassment, wage theft, and more for NYC employees.",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden pt-[180px] pb-[130px]">
        <span className="ghost-text bottom-0 left-0 -translate-x-[5%] translate-y-[15%]">
          Practice
        </span>

        <div className="container-main relative z-10">
          <p className="section-label">Our Expertise</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[60px] lg:leading-[70px] text-white capitalize max-w-3xl mb-6">
            Defending Your Rights, Delivering{" "}
            <span className="text-gold italic">Peace of Mind</span>
          </h1>
          <p className="text-white/50 text-lg max-w-[700px]">
            We <em>exclusively</em> represent employees in labor and management disputes across New York.
            Each practice area below represents years of focused legal expertise.
          </p>
          <a href="#consultation" className="btn-primary mt-8 inline-block">
            Ask For Consultation
          </a>
        </div>
      </section>

      {/* ── PRACTICE AREAS LIST ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-navy capitalize">
              Explore Our <span className="text-gold">Practice</span> Areas
            </h2>
          </div>

          <div>
            {practiceAreas.map((area, idx) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="accordion-row group"
              >
                <span className="accordion-number">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="accordion-title group-hover:text-gold transition-colors">
                  {area.title}
                </span>
                <span className="accordion-desc">
                  {area.heroDescription.slice(0, 100)}...
                </span>
                <svg className="accordion-arrow w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container-main">
          <h2 className="font-heading text-3xl capitalize mb-4">Need Legal Help?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Contact us for a free consultation. We don&apos;t charge any fees unless we win.
          </p>
          <a href="tel:212-832-1000" className="btn-primary">
            Call 212-832-1000
          </a>
        </div>
      </section>
    </>
  );
}
