"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchableItem {
  title: string;
  href: string;
  category: string;
  content: string;
}

const searchIndex: SearchableItem[] = [
  // Employment practice areas
  { title: "Wage Manipulation", href: "/practice-areas/wage-manipulation", category: "Employment Law", content: "wage theft unpaid overtime minimum wage employers manipulating timetable data hourly wages compensation state federal law" },
  { title: "Racial Discrimination", href: "/practice-areas/racial-discrimination", category: "Employment Law", content: "race skin color adverse treatment harassment racial background Civil Rights Act protected class EEOC complaints firing wrongful dismissal demotion unequal pay" },
  { title: "Disability Discrimination", href: "/practice-areas/disability-discrimination", category: "Employment Law", content: "ADA Americans with Disabilities Act accommodation impairment life activities physical mental employer reasonable accommodation EEOC" },
  { title: "Pregnancy Discrimination", href: "/practice-areas/pregnancy-discrimination", category: "Employment Law", content: "pregnant maternity leave childbirth pregnancy-related conditions PWFA Pregnancy Workers Fairness Act workplace accommodation NYC HRL" },
  { title: "Age Discrimination", href: "/practice-areas/age-discrimination", category: "Employment Law", content: "ADEA Age Discrimination Employment Act workers over 40 ageism older workers promotions retirement termination liquidated damages" },
  { title: "Gender & Sex Discrimination", href: "/practice-areas/gender-sex-discrimination", category: "Employment Law", content: "sexual harassment gender glass ceiling pay gap female male hostile work environment Title VII retaliation quid pro quo" },
  { title: "Sexual Orientation Discrimination", href: "/practice-areas/sexual-orientation-discrimination", category: "Employment Law", content: "gay lesbian bisexual trans LGBTQ SONDA sexual orientation workplace discrimination Title VII same-sex partner benefits" },
  { title: "Religious Discrimination", href: "/practice-areas/religious-discrimination", category: "Employment Law", content: "religion faith prayer religious beliefs accommodation religious clothing leave religious events harassment hostile work environment" },
  { title: "Retaliation", href: "/practice-areas/retaliation-discrimination", category: "Employment Law", content: "retaliation whistleblower complaint filing report claim termination demotion punishment employer adverse action protected activity" },
  { title: "Hair Discrimination", href: "/practice-areas/hair-discrimination", category: "Employment Law", content: "CROWN Act natural hair hairstyles locs braids twists cornrows afros grooming policy racial ethnic Black culture Sikhs Muslims" },
  { title: "Nationality Discrimination", href: "/practice-areas/nationality-discrimination", category: "Employment Law", content: "national origin ethnicity accent language discrimination English-only policy immigrant country of origin cultural" },
  { title: "Workplace Disability Accommodation", href: "/practice-areas/workplace-disability-accommodation", category: "Employment Law", content: "ADA reasonable accommodation disabled workers modification adjustment employer undue hardship assistive technology schedule" },
  // Immigration
  { title: "Green Card Applications", href: "/immigration/green-card", category: "Immigration", content: "green card permanent resident family-based employment-based USCIS eligibility immigration status children US citizens" },
  { title: "Citizenship Applications", href: "/immigration/citizenship", category: "Immigration", content: "citizenship naturalization Form N-400 English test civics US government moral character permanent resident 5 years" },
  { title: "Asylum Applications", href: "/immigration/asylum", category: "Immigration", content: "asylum refugee persecution fear home country religion race nationality political opinion social group one year" },
  { title: "Family Visas", href: "/immigration/naturalization", category: "Immigration", content: "family visa sponsor permanent resident citizen petition preference visa unmarried married children siblings" },
  { title: "DACA", href: "/immigration/daca", category: "Immigration", content: "Deferred Action Childhood Arrivals Dreamers undocumented renewal USCIS deportation work authorization" },
  { title: "Immigration Waivers", href: "/immigration/waivers", category: "Immigration", content: "waiver inadmissibility unlawful presence extreme hardship I-601A provisional green card bar" },
  { title: "LGBTQ+ Marriage & Immigration", href: "/immigration/lgbtq-marriage", category: "Immigration", content: "same-sex marriage fiancee visa spouse green card LGBTQ immigration rights equal" },
  // Main pages
  { title: "About Stillman Legal", href: "/about", category: "Firm", content: "Lina Stillman founding attorney employment lawyer New York decade experience Rutgers education bar admissions courts" },
  { title: "Contact Us", href: "/contact", category: "Firm", content: "contact phone 212-832-1000 email address 42 Broadway 12th Floor New York NY 10004 free consultation confidential" },
  { title: "Privacy Policy", href: "/privacy-policy", category: "Firm", content: "privacy policy personal information confidential attorney-client relationship" },
];

export function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  function handleSearch(value: string) {
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      return;
    }
    const terms = value.toLowerCase().split(/\s+/);
    const matched = searchIndex.filter((item) => {
      const haystack = `${item.title} ${item.category} ${item.content}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
    setResults(matched);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[120px]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search panel */}
      <div className="relative w-full max-w-[700px] mx-4">
        <div className="bg-white shadow-2xl">
          {/* Input */}
          <div className="flex items-center border-b border-gray-200 px-6">
            <svg
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search pages, practice areas, legal topics..."
              className="w-full px-4 py-5 text-lg text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-navy transition-colors p-1"
              aria-label="Close search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Results */}
          {query.trim().length >= 2 && (
            <div className="max-h-[400px] overflow-y-auto">
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-6 py-4 hover:bg-gold-10 transition-colors group"
                    >
                      <div>
                        <p className="text-navy font-medium group-hover:text-gold transition-colors">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-6 py-8 text-center">
                  <p className="text-gray-400">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-gray-300 text-sm mt-1">Try different keywords</p>
                </div>
              )}
            </div>
          )}

          {/* Hint when empty */}
          {query.trim().length < 2 && (
            <div className="px-6 py-6">
              <p className="text-gray-300 text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {["discrimination", "harassment", "wage theft", "green card", "asylum", "DACA"].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 hover:bg-gold-10 hover:text-gold transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
