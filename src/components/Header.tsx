"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { SearchOverlay } from "./SearchOverlay";

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
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastScrollY = useRef(0);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > lastScrollY.current && currentY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container-main">
        <div className="flex justify-between items-center h-[110px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/images/logo.png"
              alt="Stillman Legal P.C."
              width={220}
              height={136}
              className="h-[70px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav - center */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-navy hover:text-gold transition-colors text-[16px]">
              Home
            </Link>
            <Link href="/about" className="text-navy hover:text-gold transition-colors text-[16px]">
              About
            </Link>

            {/* Employment dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEmpOpen(true)}
              onMouseLeave={() => setEmpOpen(false)}
            >
              <button className="text-navy hover:text-gold transition-colors flex items-center gap-1.5 text-[16px]">
                Employment Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${empOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 pt-4 transition-all duration-300 ${
                  empOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="bg-navy-dark/95 backdrop-blur-sm border border-white/10 shadow-2xl py-3 min-w-[300px]">
                  {employmentServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between px-5 py-2.5 text-sm text-white hover:text-gold hover:bg-white/5 transition-all group"
                    >
                      <span>{s.label}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Immigration dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setImmOpen(true)}
              onMouseLeave={() => setImmOpen(false)}
            >
              <button className="text-navy hover:text-gold transition-colors flex items-center gap-1.5 text-[16px]">
                Immigration Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${immOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 pt-4 transition-all duration-300 ${
                  immOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="bg-navy-dark/95 backdrop-blur-sm border border-white/10 shadow-2xl py-3 min-w-[300px]">
                  {immigrationServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between px-5 py-2.5 text-sm text-white hover:text-gold hover:bg-white/5 transition-all group"
                    >
                      <span>{s.label}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-navy hover:text-gold transition-colors text-[16px]">
              Contact
            </Link>
          </div>

          {/* Search + CTA - right */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-navy hover:text-gold transition-colors p-2"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <a href="#consultation" className="btn-primary">
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-navy p-2 relative z-10"
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
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[80vh] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pt-6 space-y-2">
            <Link href="/" className="block py-3 text-white hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block py-3 text-white hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <div>
              <button
                className="w-full text-left py-3 text-white hover:text-gold flex justify-between items-center"
                onClick={() => setEmpOpen(!empOpen)}
              >
                Employment Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${empOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${empOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 space-y-1 pb-2">
                  {employmentServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-white/60 hover:text-gold transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <button
                className="w-full text-left py-3 text-white hover:text-gold flex justify-between items-center"
                onClick={() => setImmOpen(!immOpen)}
              >
                Immigration Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${immOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${immOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 space-y-1 pb-2">
                  {immigrationServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-white/60 hover:text-gold transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/contact" className="block py-3 text-white hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <button
              onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
              className="flex items-center gap-3 py-3 text-white hover:text-gold transition-colors w-full"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Search
            </button>
            <a
              href="#consultation"
              className="block text-center btn-primary mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        </div>
      </nav>
    </header>
    <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
