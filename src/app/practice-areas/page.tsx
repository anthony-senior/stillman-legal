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
      <section className="bg-navy-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Our Expertise
          </p>
          <h1 className="font-heading text-4xl md:text-5xl max-w-3xl">
            Employment Law <span className="text-gold italic">Practice Areas</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            We <em>exclusively</em> represent employees in labor and management disputes across New York.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gold/30"
              >
                <h2 className="font-heading text-xl text-navy mb-3 group-hover:text-steel transition-colors">
                  {area.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.heroDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-steel text-sm font-medium group-hover:text-gold transition-colors">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl mb-4">Need Legal Help?</h2>
          <p className="text-white/70 mb-8">
            Contact us for a free consultation. We don&apos;t charge any fees unless we win.
          </p>
          <a
            href="tel:212-832-1000"
            className="inline-block bg-gold text-navy-dark px-8 py-4 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider"
          >
            Call 212-832-1000
          </a>
        </div>
      </section>
    </>
  );
}
