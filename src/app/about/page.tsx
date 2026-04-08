import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "About Us | NYC Employment Attorneys",
  description:
    "Learn about Stillman Legal P.C. and founder Lina Stillman, a New York City Employment Attorney fighting exclusively for the rights of working people.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Stillman Legal P.C.
          </p>
          <h1 className="font-heading text-4xl md:text-5xl max-w-3xl">
            New York City <span className="text-gold italic">Employment Attorneys</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Exclusively Serving New York Employees
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">
                About Stillman Legal
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8">
                Fierce Legal Champions of New York Employee Rights
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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

            {/* Attorney card */}
            <div className="lg:col-span-2">
              <div className="bg-warm-light rounded-2xl p-8">
                <h3 className="font-heading text-2xl text-navy mb-2">Lina Stillman, Esq.</h3>
                <p className="text-gold text-sm font-medium mb-6">NYC Employment Lawyer &bull; Founding Attorney</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-navy text-sm uppercase tracking-wider mb-3">Education</h4>
                    <ul className="space-y-1.5 text-gray-600 text-sm">
                      <li>Rutgers University School of Law, J.D., 2010</li>
                      <li>New School, M.A. in Media Studies, 2001</li>
                      <li>Syracuse University, B.A., magna cum laude, 1997</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-sm uppercase tracking-wider mb-3">Bar Admissions</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Pennsylvania", "New York", "New Jersey"].map((bar) => (
                        <span key={bar} className="bg-navy/5 text-navy text-xs px-3 py-1 rounded-full">{bar}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-sm uppercase tracking-wider mb-3">Court Admissions</h4>
                    <ul className="space-y-1.5 text-gray-600 text-sm">
                      <li>Second Circuit Court of Appeals</li>
                      <li>U.S. District Court, Southern &amp; Eastern Districts of NY</li>
                      <li>U.S. District Court, District of New Jersey</li>
                      <li>United States Supreme Court</li>
                    </ul>
                  </div>
                </div>
                <a href="#consultation" className="block text-center bg-gold text-navy-dark px-6 py-3 rounded font-medium hover:bg-gold-light transition-colors uppercase tracking-wider text-sm mt-8">
                  Get A Free Consultation With Lina
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-28 bg-warm-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
              A Diverse Perspective
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Having worked exclusively as an employment lawyer, I bring a unique perspective from
              representing employees and freelancers across many sectors.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am very familiar with the claims, defenses, strategies, and tactics used by all
              parties that generally participate in Employment law. A large part of my practice
              involves representing employees in class actions and collective actions challenging
              unlawful pay practices, including wage and hour violations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I have successfully represented clients in federal and state courts; in arbitration
              before the Human Rights Division of the State of New York; the United States Equal
              Employment Opportunity Commission (EEOC); the New York State Department of Labor and
              the National Labor Relations Board.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-navy text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "No Settlement, No Fee",
                desc: "We don't get paid unless you get paid. If we are not able to recover, you don't owe us anything!",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                ),
              },
              {
                title: "Every Story Is Different",
                desc: "No two cases are the same because no two stories are the same. There are many factors involved in a lawsuit and we develop a strategy suited to your needs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: "We Are Client Focused",
                desc: "We listen to our clients carefully and give them the power and ability to make decisions and choose the ultimate course of their case.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                  </svg>
                ),
              },
              {
                title: "We Are Results Driven",
                desc: "We are always mindful of the end results and we \"keep our eye on the ball\". We believe that your best interest is always our best interest.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.996.44-1.773 1.405-2.01 2.58-.292 1.44.171 2.797 1.208 3.62M19.75 4.236c.995.44 1.772 1.405 2.009 2.58.292 1.44-.17 2.797-1.208 3.62M12 2.25a3 3 0 0 0-3 3v.98a1.5 1.5 0 0 0 .44 1.06l2.12 2.12a.75.75 0 0 0 1.06-.02l1.94-1.94A1.5 1.5 0 0 0 15 6.375v-1.125a3 3 0 0 0-3-3z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title} className="bg-warm-light rounded-xl p-8 flex gap-6">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed italic font-heading">
            &ldquo;If you have any questions about your rights in the workplace or think you have been
            denied those rights, call or contact us online immediately!&rdquo;
          </blockquote>
          <p className="text-gold mt-8 font-medium">-- Lina Stillman, Founding Attorney</p>
        </div>
      </section>

      {/* Book + App section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Book */}
            <div className="bg-warm-light rounded-2xl p-8 md:p-10">
              <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">Free Download</p>
              <h3 className="font-heading text-2xl text-navy mb-4">
                &ldquo;Knowing Your Rights -- A Guide For Working People In New York&rdquo;
              </h3>
              <p className="text-gray-600 mb-6">
                An easily-digested guide to help New York employees understand their legal rights in
                the workplace. Written by Lina Stillman.
              </p>
              <a href="#consultation" className="inline-block bg-navy text-white px-6 py-3 rounded font-medium hover:bg-navy-light transition-colors text-sm uppercase tracking-wider">
                Download A Free Copy
              </a>
            </div>

            {/* Mobile App */}
            <div className="bg-navy-dark text-white rounded-2xl p-8 md:p-10">
              <p className="text-gold uppercase tracking-[0.15em] text-sm font-medium mb-4">Mobile App</p>
              <h3 className="font-heading text-2xl mb-4">
                Fight For Your Rights -- On The Go
              </h3>
              <p className="text-white/70 mb-6">
                Download our mobile app to access legal resources, know your rights, and connect with
                our attorneys anytime, anywhere.
              </p>
              <div className="flex gap-3">
                <a href="https://apps.apple.com/in/app/fight-for-your-rights/id1620158183" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy-dark px-5 py-2.5 rounded font-medium hover:bg-gold-light transition-colors text-sm">
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.app.law_firm" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy-dark px-5 py-2.5 rounded font-medium hover:bg-gold-light transition-colors text-sm">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 md:py-28 bg-navy-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Ready To Discuss Your Case?
            </h2>
            <p className="text-white/70 text-lg">
              Fill out the form below for a free, confidential consultation.
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
