import Link from "next/link";

const practiceLinks = [
  { label: "Wage Manipulation", href: "/practice-areas/wage-manipulation" },
  { label: "Racial Discrimination", href: "/practice-areas/racial-discrimination" },
  { label: "Disability Discrimination", href: "/practice-areas/disability-discrimination" },
  { label: "Pregnancy Discrimination", href: "/practice-areas/pregnancy-discrimination" },
  { label: "Age Discrimination", href: "/practice-areas/age-discrimination" },
  { label: "Gender/Sex Discrimination", href: "/practice-areas/gender-sex-discrimination" },
];

const immigrationLinks = [
  { label: "Green Card", href: "/immigration/green-card" },
  { label: "Citizenship", href: "/immigration/citizenship" },
  { label: "Asylum", href: "/immigration/asylum" },
  { label: "DACA", href: "/immigration/daca" },
  { label: "Waivers", href: "/immigration/waivers" },
  { label: "LGBTQ+ Immigration", href: "/immigration/lgbtq-marriage" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer content */}
      <div className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-12">
            {/* Column 1: Logo + tagline + CTA */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-offwhite leading-snug mb-6">
                Let Us Help You <span className="text-gold">Fight</span> For Your Rights
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                Stillman Legal P.C. was founded to serve the working people of New York --
                exclusively. We don&apos;t charge any fees until we recover a settlement.
              </p>
              <a href="#consultation" className="btn-primary">
                Ask For Consultation
              </a>
            </div>

            {/* Column 2: Practice area links */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                {practiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-gold transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/practice-areas" className="text-gold text-sm hover:text-gold-light transition-colors inline-block mt-1">
                    View All
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact info */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6">Contact</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white/70">42 Broadway, 12th Floor</p>
                  <p className="text-white/70">New York, NY 10004</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:Info@StillmanLegalPC.com" className="text-white/70 hover:text-gold transition-colors">
                    Info@StillmanLegalPC.com
                  </a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:212-832-1000" className="text-white/70 hover:text-gold transition-colors">
                    212-832-1000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/LuchaXTusDerechos" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/LuchaPorTusDerechosCom/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/></svg>
              </a>
              <a href="https://twitter.com/StillmanLegal" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="Twitter/X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCBJYgsE7wXuku58DOlE22tw" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            {/* Copyright + disclaimer */}
            <div className="text-xs text-white/30 text-center md:text-right max-w-xl">
              <p>&copy; {new Date().getFullYear()} Stillman Legal P.C. All Rights Reserved.</p>
              <p className="mt-1">
                Attorney Advertising. Prior results do not guarantee a similar outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
