import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";

const practiceAreas = [
  {
    title: "Wage Manipulation",
    description: "Protecting employees from wage theft, unpaid overtime, and minimum wage violations.",
    href: "/practice-areas/wage-manipulation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    title: "Racial Discrimination",
    description: "Standing against workplace racial discrimination and fighting for equal treatment.",
    href: "/practice-areas/racial-discrimination",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
      </svg>
    ),
  },
  {
    title: "Sexual Harassment",
    description: "Aggressive representation for victims of workplace sexual harassment.",
    href: "/practice-areas/gender-sex-discrimination",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Disability Discrimination",
    description: "Ensuring employers comply with disability accommodation requirements.",
    href: "/practice-areas/disability-discrimination",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Age Discrimination",
    description: "Protecting workers from age-based discrimination and wrongful termination.",
    href: "/practice-areas/age-discrimination",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    title: "Pregnancy Discrimination",
    description: "Defending the rights of pregnant employees in the workplace.",
    href: "/practice-areas/pregnancy-discrimination",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "80%", label: "Of immigrant labor abuses go unreported" },
  { value: "77%", label: "Of undocumented workers earn below minimum wage" },
  { value: "65%", label: "Of employers never pay earned overtime" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark opacity-90" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-6">
              Employment &amp; Immigration Attorneys
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              We Fight For The
              <span className="text-gold italic"> Working People</span>
              <br />Of New York
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl">
              Illegal workplace discrimination? Sexual harassment? We will fight aggressively -- inside
              and outside the courtroom -- to protect your rights.
            </p>
            <p className="text-gold font-medium text-lg mb-8">
              No Fee Unless We Win Your Case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consultation"
                className="bg-gold text-navy-dark px-8 py-4 rounded font-medium hover:bg-gold-light transition-colors text-center uppercase tracking-wider"
              >
                Get A Free Consultation
              </a>
              <a
                href="tel:212-832-1000"
                className="border-2 border-white/30 text-white px-8 py-4 rounded font-medium hover:border-gold hover:text-gold transition-colors text-center"
              >
                Call 212-832-1000
              </a>
            </div>
          </div>
        </div>
        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">
              About Stillman Legal P.C.
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8">
              A New York Employment Lawyer Who Will Advocate Fiercely On Your Behalf
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stillman Legal P.C. was founded by Lina Stillman, a New York City Labor and Employment
              attorney with a single focus -- fighting for and protecting the rights of employees and
              the working people of New York.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our mission is to provide New York State employees with the same sophisticated quality of
              legal representation -- the same level of experience, attention to detail, and
              individualized treatment -- that the big law firms offer their wealthy clients.
            </p>
            <p className="text-navy font-medium text-lg">
              We offer FREE consultations and do not charge any fees until we recover a settlement.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-28 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">
              How We Can Help
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
              Our Employment Law Practice Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stillman Legal P.C. <em>exclusively</em> represents employees in labor and management disputes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gold/30"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center text-steel group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-6">
                  {area.icon}
                </div>
                <h3 className="font-heading text-xl text-navy mb-3 group-hover:text-steel transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-2 text-steel text-sm font-medium mt-4 group-hover:text-gold transition-colors">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-steel hover:text-navy font-medium transition-colors"
            >
              View All Practice Areas
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              The Reality of Workplace Abuse
            </h2>
            <p className="text-white/60">
              These statistics show why we fight -- and why you should too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="text-center p-8 rounded-xl border border-white/10 bg-white/5"
              >
                <p className="font-heading text-5xl md:text-6xl text-gold mb-4">{stat.value}</p>
                <p className="text-white/70 uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-medium">
            Don&apos;t be an employee statistic.{" "}
            <a href="tel:212-832-1000" className="text-gold hover:text-gold-light transition-colors">
              Call us today at 212-832-1000
            </a>
            . Get a free case evaluation.
          </p>
        </div>
      </section>

      {/* Why hire us */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">
                Why Choose Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8">
                When Should You Hire A New York Employment Attorney?
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  If you&apos;re experiencing potentially illegal and discriminatory actions at work, it&apos;s
                  important to know when to contact an employment lawyer to assess your situation.
                </p>
                <div className="space-y-4">
                  {[
                    "You've been terminated or demoted unfairly",
                    "You're experiencing harassment or hostile work environment",
                    "Your employer is withholding wages or overtime pay",
                    "You've been denied reasonable workplace accommodations",
                    "You're being retaliated against for reporting violations",
                    "You're facing discrimination based on a protected characteristic",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-warm-light rounded-2xl p-8 md:p-12">
              <h3 className="font-heading text-2xl text-navy mb-2">What Sets Us Apart</h3>
              <div className="w-12 h-1 bg-gold mb-8" />
              <div className="space-y-6">
                {[
                  { title: "Free Consultation", desc: "We evaluate your case at no cost to you." },
                  { title: "No Fee Unless We Win", desc: "You pay nothing unless we recover a settlement on your behalf." },
                  { title: "Aggressive Advocacy", desc: "We fight inside and outside the courtroom to protect your rights." },
                  { title: "Employee-Only Practice", desc: "We exclusively represent employees, never employers." },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-medium text-navy mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Services */}
      <section className="py-20 md:py-28 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">
              Immigration Law
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
              Immigration Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help immigrants navigate the complex U.S. immigration system with compassion and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Green Card", href: "/immigration/green-card", desc: "Permanent resident applications" },
              { title: "Citizenship", href: "/immigration/citizenship", desc: "U.S. citizenship applications" },
              { title: "Asylum", href: "/immigration/asylum", desc: "Protection from persecution" },
              { title: "DACA", href: "/immigration/daca", desc: "Deferred Action for Childhood Arrivals" },
              { title: "Naturalization", href: "/immigration/naturalization", desc: "Path to becoming a citizen" },
              { title: "Waivers", href: "/immigration/waivers", desc: "Immigration waiver applications" },
              { title: "LGBTQ+ Immigration", href: "/immigration/lgbtq-marriage", desc: "Marriage & fianc\u00e9(e) petitions" },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-gold/30"
              >
                <h3 className="font-heading text-lg text-navy mb-2 group-hover:text-steel transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section id="consultation" className="py-20 md:py-28 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">
                Free Case Evaluation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Get A Free Consultation For Your Case
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Fill out the form and our team will review your case within 24 hours.
                All consultations are free and confidential.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Call us directly</p>
                    <a href="tel:212-832-1000" className="text-gold font-medium hover:text-gold-light transition-colors">
                      212-832-1000
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email us</p>
                    <a href="mailto:Info@StillmanLegalPC.com" className="text-gold font-medium hover:text-gold-light transition-colors">
                      Info@StillmanLegalPC.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Visit our office</p>
                    <p className="text-white/80">42 Broadway, 12th Floor, New York, NY 10004</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-800">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Know your rights CTA */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
              Know Your Rights As A New York Employee
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              New York Employment Attorney and founder of Stillman Legal P.C., Lina Stillman, has
              dedicated her entire legal career to the practice of labor and employment law and to
              helping employees exclusively.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Her book <strong>&ldquo;Knowing Your Rights -- A Guide For Working People In New York&rdquo;</strong> offers
              an easily-digested guide to help New York employees understand their legal rights in the
              workplace.
            </p>
            <a
              href="#consultation"
              className="inline-block bg-navy text-white px-8 py-4 rounded font-medium hover:bg-navy-light transition-colors uppercase tracking-wider"
            >
              Download A Free Copy
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
