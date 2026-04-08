"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const employmentServices = [
  { label: "Wage Manipulation", href: "/practice-areas/wage-manipulation" },
  { label: "Disability Discrimination", href: "/practice-areas/disability-discrimination" },
  { label: "Pregnancy Discrimination", href: "/practice-areas/pregnancy-discrimination" },
  { label: "Workplace Disability Accommodation", href: "/practice-areas/workplace-disability-accommodation" },
  { label: "Hair Discrimination", href: "/practice-areas/hair-discrimination" },
  { label: "Age Discrimination", href: "/practice-areas/age-discrimination" },
  { label: "Retaliation Discrimination", href: "/practice-areas/retaliation-discrimination" },
  { label: "Religious Discrimination", href: "/practice-areas/religious-discrimination" },
  { label: "Sexual Orientation Discrimination", href: "/practice-areas/sexual-orientation-discrimination" },
  { label: "Gender/Sex Discrimination", href: "/practice-areas/gender-sex-discrimination" },
  { label: "Nationality Discrimination", href: "/practice-areas/nationality-discrimination" },
  { label: "Racial Discrimination", href: "/practice-areas/racial-discrimination" },
];

const immigrationServices = [
  { label: "Green Card Applications", href: "/immigration/green-card" },
  { label: "Citizenship Applications", href: "/immigration/citizenship" },
  { label: "Asylum Applications", href: "/immigration/asylum" },
  { label: "Naturalization", href: "/immigration/naturalization" },
  { label: "DACA", href: "/immigration/daca" },
  { label: "Waivers", href: "/immigration/waivers" },
  { label: "LGBTQ+ Marriage & Fianc\u00e9(e) Immigration", href: "/immigration/lgbtq-marriage" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  const [immOpen, setImmOpen] = useState(false);

  return (
    <header className="bg-navy-dark text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10 text-sm">
          <span className="text-gold font-heading italic hidden sm:block">
            The Law Firm For The Working People
          </span>
          <a
            href="tel:212-832-1000"
            className="text-gold hover:text-gold-light transition-colors font-medium"
          >
            Call: 212-832-1000
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Stillman Legal P.C."
              width={180}
              height={111}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gold transition-colors">
              About
            </Link>

            {/* Employment dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setEmpOpen(true)}
              onMouseLeave={() => setEmpOpen(false)}
            >
              <button className="text-white hover:text-gold transition-colors flex items-center gap-1">
                Employment Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {empOpen && (
                <div className="absolute top-full left-0 bg-navy-dark border border-white/10 rounded-lg shadow-2xl py-2 min-w-[280px]">
                  {employmentServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Immigration dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setImmOpen(true)}
              onMouseLeave={() => setImmOpen(false)}
            >
              <button className="text-white hover:text-gold transition-colors flex items-center gap-1">
                Immigration Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {immOpen && (
                <div className="absolute top-full left-0 bg-navy-dark border border-white/10 rounded-lg shadow-2xl py-2 min-w-[280px]">
                  {immigrationServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-white hover:text-gold transition-colors">
              Contact
            </Link>
            <a
              href="#consultation"
              className="bg-gold text-navy-dark px-6 py-2.5 rounded font-medium hover:bg-gold-light transition-colors text-sm uppercase tracking-wider"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-2">
            <Link href="/" className="block py-2 text-white hover:text-gold" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block py-2 text-white hover:text-gold" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <div>
              <button
                className="w-full text-left py-2 text-white hover:text-gold flex justify-between"
                onClick={() => setEmpOpen(!empOpen)}
              >
                Employment Services
                <svg className={`w-4 h-4 transition-transform ${empOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {empOpen && (
                <div className="pl-4 space-y-1">
                  {employmentServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-1.5 text-sm text-white/70 hover:text-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                className="w-full text-left py-2 text-white hover:text-gold flex justify-between"
                onClick={() => setImmOpen(!immOpen)}
              >
                Immigration Services
                <svg className={`w-4 h-4 transition-transform ${immOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {immOpen && (
                <div className="pl-4 space-y-1">
                  {immigrationServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-1.5 text-sm text-white/70 hover:text-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact" className="block py-2 text-white hover:text-gold" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a
              href="#consultation"
              className="block text-center bg-gold text-navy-dark px-6 py-3 rounded font-medium mt-4 uppercase tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
