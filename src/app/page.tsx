import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { practiceAreas } from "@/data/practice-areas";

const stats = [
  { value: "80%", label: "Of immigrant labor abuses go unreported" },
  { value: "77%", label: "Of undocumented workers earn below minimum wage" },
  { value: "65%", label: "Of employers never pay earned overtime" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-dark min-h-screen flex items-center overflow-hidden">
        {/* Ghost text watermark */}
        <span className="ghost-text bottom-0 left-0 translate-y-[10%]">
          Justice
        </span>

        <div className="container-main relative z-10 pt-[140px] pb-[120px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            {/* Left: heading */}
            <div className="lg:max-w-[700px]">
              <p className="section-label">Employment &amp; Immigration Attorneys</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[70px] lg:leading-[80px] text-white capitalize">
                We Fight For The{" "}
                <span className="text-gold italic">Working People</span>{" "}
                Of New York
              </h1>
            </div>

            {/* Right: description + CTAs */}
            <div className="lg:max-w-[380px]">
              <p className="text-white/50 text-lg leading-relaxed mb-4">
                Illegal workplace discrimination? Sexual harassment? We will fight aggressively -- inside
                and outside the courtroom -- to protect your rights.
              </p>
              <p className="text-gold font-medium mb-8">
                No Fee Unless We Win Your Case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#consultation" className="btn-primary">
                  Get A Free Consultation
                </a>
                <a href="tel:212-832-1000" className="btn-outline">
                  Call 212-832-1000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / PROTECTION SECTION ── */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-[80px]">
            {/* Left column: text */}
            <div className="lg:w-[55%]">
              <p className="section-label">About Stillman Legal P.C.</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] lg:leading-[52px] text-navy mb-8 capitalize">
                <span className="text-gold">Protecting</span> Your Rights, Every Step of the Way
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Stillman Legal P.C. was founded by Lina Stillman, a New York City Labor and Employment
                attorney with a single focus -- fighting for and protecting the rights of employees and
                the working people of New York.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our mission is to provide New York State employees with the same sophisticated quality of
                legal representation -- the same level of experience, attention to detail, and
                individualized treatment -- that the big law firms offer their wealthy clients.
              </p>
              <p className="text-navy font-medium text-lg">
                We offer FREE consultations and do not charge any fees until we recover a settlement.
              </p>
            </div>

            {/* Right column: decorative block */}
            <div className="lg:w-[45%] flex items-end">
              <div className="w-full bg-gold-10 p-10 lg:p-14 relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold -translate-x-4 -translate-y-4" />
                <h3 className="font-heading text-2xl text-navy mb-6">What Sets Us Apart</h3>
                <div className="space-y-5">
                  {[
                    { title: "Free Consultation", desc: "We evaluate your case at no cost to you." },
                    { title: "No Fee Unless We Win", desc: "You pay nothing unless we recover a settlement." },
                    { title: "Aggressive Advocacy", desc: "We fight inside and outside the courtroom." },
                    { title: "Employee-Only Practice", desc: "We exclusively represent employees, never employers." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-1 bg-gold flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-navy text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS (Numbered accordion rows) ── */}
      <section className="relative overflow-hidden">
        <div className="container-main pb-[130px]">
          <div className="text-center mb-16">
            <p className="section-label">How We Can Help</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] text-navy capitalize">
              Legal Solutions Tailored to{" "}
              <span className="text-gold">Your</span> Needs
            </h2>
          </div>

          {/* Accordion rows */}
          <div>
            {practiceAreas.slice(0, 8).map((area, idx) => (
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
                  {area.heroDescription.slice(0, 80)}...
                </span>
                <svg className="accordion-arrow w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/practice-areas" className="link-slide text-steel hover:text-gold font-medium">
              View All Practice Areas
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="relative overflow-hidden section-padding bg-white">
        <span className="ghost-text-dark bottom-4 right-0 translate-x-[20%]">
          Results
        </span>
        <div className="container-main relative z-10">
          <div className="mb-16">
            <p className="section-label">The Reality</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] text-navy capitalize max-w-3xl">
              <span className="text-gold">Workplace abuse</span> statistics show why we fight
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <div key={stat.value} className="flex items-start gap-4 md:gap-0 md:flex-col md:items-start flex-1">
                {idx > 0 && (
                  <div className="hidden md:block vertical-divider-dark absolute left-0 top-0 bottom-0" />
                )}
                <p className="font-heading text-[64px] md:text-[80px] leading-none text-navy">
                  {stat.value}
                </p>
                <p className="text-gray-500 mt-2 text-sm max-w-[200px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-navy font-medium text-xl mt-16">
            Don&apos;t be an employee statistic.{" "}
            <a href="tel:212-832-1000" className="text-gold hover:text-gold-light transition-colors">
              Call us today at 212-832-1000
            </a>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL / WHY CHOOSE US ── */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-[80px]">
            {/* Left: quote */}
            <div className="lg:w-1/2">
              <p className="section-label">Why Choose Us</p>
              <h2 className="font-heading text-3xl md:text-4xl text-white capitalize mb-8">
                When Should You Hire A New York Employment Attorney?
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                If you&apos;re experiencing potentially illegal and discriminatory actions at work, it&apos;s
                important to know when to contact an employment lawyer to assess your situation.
              </p>
              <div className="space-y-3">
                {[
                  "You've been terminated or demoted unfairly",
                  "You're experiencing harassment or hostile work environment",
                  "Your employer is withholding wages or overtime pay",
                  "You've been denied reasonable workplace accommodations",
                  "You're being retaliated against for reporting violations",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-white/60 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="vertical-divider hidden lg:block" />

            {/* Right: quote */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <blockquote className="text-xl md:text-2xl text-white/70 leading-relaxed italic font-heading mb-8">
                &ldquo;If you have any questions about your rights in the workplace or think you have been
                denied those rights, call or contact us online immediately!&rdquo;
              </blockquote>
              <p className="text-gold font-medium">-- Lina Stillman, Founding Attorney</p>
              <a href="#consultation" className="btn-primary mt-8 self-start">
                Ask For Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMMIGRATION SERVICES ── */}
      <section className="relative section-padding overflow-hidden">
        <span className="ghost-text-dark top-8 left-0 -translate-x-[10%]">
          Immigration
        </span>
        <div className="container-main relative z-10">
          <div className="mb-16">
            <p className="section-label">Immigration Law</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] text-navy capitalize">
              Immigration <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl">
              We help immigrants navigate the complex U.S. immigration system with compassion and expertise.
            </p>
          </div>

          {/* Immigration accordion rows */}
          <div>
            {[
              { title: "Green Card Applications", href: "/immigration/green-card", desc: "Permanent resident applications and guidance" },
              { title: "Citizenship Applications", href: "/immigration/citizenship", desc: "U.S. citizenship and naturalization process" },
              { title: "Asylum Applications", href: "/immigration/asylum", desc: "Protection from persecution abroad" },
              { title: "DACA", href: "/immigration/daca", desc: "Deferred Action for Childhood Arrivals" },
              { title: "Immigration Waivers", href: "/immigration/waivers", desc: "Provisional waiver applications" },
              { title: "Family Visas", href: "/immigration/naturalization", desc: "Family-based immigration petitions" },
              { title: "LGBTQ+ Immigration", href: "/immigration/lgbtq-marriage", desc: "Marriage & fianc\u00e9(e) immigration" },
            ].map((service, idx) => (
              <Link
                key={service.href}
                href={service.href}
                className="accordion-row group"
              >
                <span className="accordion-number">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="accordion-title group-hover:text-gold transition-colors">
                  {service.title}
                </span>
                <span className="accordion-desc">
                  {service.desc}
                </span>
                <svg className="accordion-arrow w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 bg-gold-10">
        <div className="container-main text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6 capitalize">
            Know Your Rights As A New York Employee
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
            Lina Stillman has dedicated her entire legal career to the practice of labor and employment
            law. Her book offers an easily-digested guide to help New York employees understand their
            legal rights.
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            <strong>&ldquo;Knowing Your Rights -- A Guide For Working People In New York&rdquo;</strong>
          </p>
          <a href="#consultation" className="btn-primary">
            Download A Free Copy
          </a>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section id="consultation" className="relative section-padding bg-navy-dark text-white overflow-hidden">
        <span className="ghost-text bottom-0 right-0 translate-x-[15%] translate-y-[10%]">
          Contact
        </span>
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <p className="section-label">Free Case Evaluation</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white capitalize mb-4">
              Get A Free Consultation For Your Case
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Fill out the form and our team will review your case within 24 hours.
              All consultations are free and confidential.
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
