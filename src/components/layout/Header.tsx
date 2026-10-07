import { useState } from "react";
import { CvDownloadButton } from "../common/CvDownloadButton";
import type { SectionItem } from "../../types/portfolio";

interface HeaderProps {
  sections: SectionItem[];
  activeSection: string;
}

export function Header({ sections, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-brand-dark/75 border-b border-brand-border/60 transition-all duration-300"
        data-purpose="site-navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Monogram Brand Logo */}
          <a
            aria-label="Omar OM. Homepage"
            className="group flex items-center gap-1 text-2xl font-black tracking-tight text-white focus:outline-none"
            href="#about"
          >
            <span className="tracking-tighter font-serif">OM</span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_#3b82f6]"></span>
          </a>

          {/* Primary Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider text-slate-400 uppercase"
          >
            {sections
              .filter(({ id }) => ["about", "experience", "selected-work", "contact"].includes(id))
              .map(({ id, number, label }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    className={`relative flex items-center gap-1.5 py-1 transition-colors duration-200 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`}
                    href={`#${id}`}
                    onClick={closeMenu}
                  >
                    <span className={`text-[10px] ${isActive ? "text-brand-accent" : "text-slate-500"}`}>
                      {number}
                    </span>
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full shadow-[0_0_8px_#3b82f6]" />
                    )}
                  </a>
                );
              })}
          </nav>

          {/* Action Items & Theme Toggle */}
          <div className="flex items-center gap-3">
            <CvDownloadButton className="hidden sm:inline-flex" />

            {/* Mobile Menu Button */}
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-slate-700/80 bg-slate-900/80 text-slate-300"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span
                className={`block w-4 h-0.5 bg-slate-200 transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-slate-200 transition-transform duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-brand-dark/95 backdrop-blur-xl border-b border-brand-border p-6 flex flex-col gap-4 md:hidden">
          {sections.map(({ id, number, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="flex items-center justify-between py-3 border-b border-slate-800 text-sm font-medium text-slate-200 hover:text-white"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-brand-accent">{number}</span>
                <span>{label}</span>
              </div>
              <span className="text-slate-500">↗</span>
            </a>
          ))}
          <div className="pt-4">
            <CvDownloadButton className="w-full justify-center py-3" />
          </div>
        </div>
      )}
    </>
  );
}
