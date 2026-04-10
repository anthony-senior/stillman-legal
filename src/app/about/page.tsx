import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "About Us | NYC Employment Attorneys",
  description:
    "Learn about Stillman Legal P.C. and founder Lina Stillman, a New York City Employment Attorney fighting exclusively for the rights of working people.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-dark text-white overflow-hidden pt-[180px] pb-[130px]">
        <Image
          src="/images/lina-portrait.jpg"
          alt="Lina Stillman - Founding Attorney"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-navy-dark/40" />
        <span className="ghost-text bottom-0 left-0 -translate-x-[5%] translate-y-[15%]">
          About
        </span>

        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-[80px]">
            {/* Left: text */}
            <div className="lg:w-[55%]">
              <p className="section-label">Stillman Legal P.C.</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[60px] lg:leading-[70px] text-white capitalize mb-6">
                We Protect Your{" "}
                <span className="text-gold italic">Legacy</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed">
                Exclusively Serving New York Employees with over a decade of
                aggressive legal advocacy.
              </p>
              <a href="#consultation" className="btn-primary mt-8 inline-block">
                Ask For Consultation
              </a>
            </div>

            {/* Right: decorative block */}
            <div className="lg:w-[45%]">
              <div className="bg-white/5 border border-white/10 p-10 lg:p-14">
                <h3 className="font-heading text-2xl text-gold mb-2">Lina Stillman, Esq.</h3>
                <p className="text-white/40 text-sm font-medium mb-6">NYC Employment Lawyer &bull; Founding Attorney</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Education</p>
                    <ul className="space-y-1.5 text-white/60 text-sm">
                      <li>Rutgers University School of Law, J.D., 2010</li>
                      <li>New School, M.A. in Media Studies, 2001</li>
                      <li>Syracuse University, B.A., magna cum laude, 1997</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Bar Admissions</p>
                    <p className="text-white/60 text-sm">Pennsylvania, New York, New Jersey</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Court Admissions</p>
                    <ul className="space-y-1 text-white/60 text-sm">
                      <li>Second Circuit Court of Appeals</li>
                      <li>U.S. District Court, Southern &amp; Eastern Districts of NY</li>
                      <li>U.S. District Court, District of New Jersey</li>
                      <li>United States Supreme Court</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION SECTION with Lina's photo ── */}
      <section className="section-padding">
        <div className="container-main">
          {/* Heading with gold bar */}
          <div className="max-w-[800px] mb-4">
            <p className="section-label">Stillman Legal P.C.</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] lg:leading-[52px] text-navy capitalize">
              New York Employment Lawyers. <span className="text-gold">Exclusively</span> Serving New York Employees
            </h2>
          </div>
          <div className="w-[200px] h-[4px] bg-gold mb-16" />

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-[80px]">
            {/* Left: Lina's photo */}
            <div className="lg:w-[45%]">
              <div className="relative">
                <Image
                  src="/images/lina-portrait.jpg"
                  alt="Lina Stillman - NYC Employment Lawyer and Founding Attorney of Stillman Legal P.C."
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                {/* Decorative gold corner accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-gold hidden lg:block" />
              </div>
            </div>

            {/* Right: about text */}
            <div className="lg:w-[55%]">
              <p className="section-label">About Stillman Legal</p>
              <h3 className="font-heading text-2xl md:text-3xl text-navy mb-2">
                Fierce Legal Champions of New York Employee Rights
              </h3>
              <div className="w-[120px] h-[3px] bg-gold mb-8" />

              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  I founded my practice, Stillman Legal P.C., to serve the working people of New York --
                  exclusively!
                </p>
                <p>
                  As an employment law attorney with over a decade of experience, I have honed my skills
                  working exclusively for employees. I know all the employer&apos;s tricks and strategies,
                  and I&apos;m on your side. I strive to help employees navigate the complicated legal
                  landscape at work and advocate for them at all stages of their employment.
                </p>
                <p>
                  In today&apos;s legal environment, you must select an Employment Lawyer whose experience
                  and knowledge are most appropriate for your case. I represent clients in a wide range
                  of employment law cases, including claims for sexual harassment, discrimination, and
                  wage theft. I have dedicated my entire legal career exclusively to the practice of
                  Employment Law.
                </p>
                <p>
                  Employment Law is what I do! I love helping workers treated unfairly at work. I counsel
                  employees on their legal rights. It is my job to make sure that you can do your job,
                  free from unlawful practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE SECTION ── */}
      <section className="section-padding bg-offwhite">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-[80px] items-center">
            <div className="lg:w-[55%]">
              <h3 className="font-heading text-2xl md:text-3xl text-navy mb-2">A Diverse Perspective</h3>
              <div className="w-[120px] h-[3px] bg-gold mb-8" />
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  Having worked exclusively as an employment lawyer, I bring a unique perspective from
                  representing employees and freelancers across many sectors.
                </p>
                <p>
                  I am very familiar with the claims, defenses, strategies, and tactics used by all
                  parties that generally participate in Employment law. A large part of my practice
                  involves representing employees in class actions and collective actions challenging
                  unlawful pay practices, including wage and hour violations.
                </p>
                <p>
                  I have successfully represented clients in federal and state courts; in arbitration
                  before the Human Rights Division of the State of New York; the United States Equal
                  Employment Opportunity Commission (EEOC); the New York State Department of Labor and
                  the National Labor Relations Board.
                </p>
              </div>
            </div>
            <div className="lg:w-[45%]">
              <Image
                src="/images/nyc-skyline.jpg"
                alt="New York City - where millions of employees need an employment attorney"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <span className="ghost-text top-4 right-0 translate-x-[20%]">
          Values
        </span>
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <p className="section-label">What We Stand For</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white capitalize">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              {
                title: "No Settlement, No Fee",
                desc: "We don't get paid unless you get paid. If we are not able to recover, you don't owe us anything!",
              },
              {
                title: "Every Story Is Different",
                desc: "No two cases are the same because no two stories are the same. There are many factors involved in a lawsuit and we develop a strategy suited to your needs.",
              },
              {
                title: "We Are Client Focused",
                desc: "We listen to our clients carefully and give them the power and ability to make decisions and choose the ultimate course of their case.",
              },
              {
                title: "We Are Results Driven",
                desc: "We are always mindful of the end results and we \"keep our eye on the ball\". We believe that your best interest is always our best interest.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-navy p-10 lg:p-14">
                <h3 className="font-heading text-xl text-gold mb-4">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK + APP SECTION ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Book */}
            <div className="lg:w-1/2 bg-gold-10 p-10 lg:p-14">
              <p className="section-label">Free Download</p>
              <h3 className="font-heading text-2xl text-navy mb-4">
                &ldquo;Knowing Your Rights -- A Guide For Working People In New York&rdquo;
              </h3>
              <p className="text-gray-500 mb-8">
                An easily-digested guide to help New York employees understand their legal rights in
                the workplace. Written by Lina Stillman.
              </p>
              <a href="#consultation" className="btn-primary">
                Download A Free Copy
              </a>
            </div>

            {/* Mobile App */}
            <div className="lg:w-1/2 bg-navy-dark text-white p-10 lg:p-14">
              <p className="section-label">Mobile App</p>
              <h3 className="font-heading text-2xl mb-4">
                Fight For Your Rights -- On The Go
              </h3>
              <p className="text-white/50 mb-8">
                Download our mobile app to access legal resources, know your rights, and connect with
                our attorneys anytime, anywhere.
              </p>
              <div className="flex gap-4">
                <a href="https://apps.apple.com/in/app/fight-for-your-rights/id1620158183" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.app.law_firm" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section id="consultation" className="relative section-padding bg-navy-dark text-white overflow-hidden">
        <span className="ghost-text bottom-0 left-0 translate-y-[15%]">
          Consult
        </span>
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <p className="section-label">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white capitalize mb-4">
              Ready To Discuss Your Case?
            </h2>
            <p className="text-white/50 text-lg">
              Fill out the form below for a free, confidential consultation.
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
