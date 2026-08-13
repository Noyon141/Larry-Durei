'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export function Navbar() {
  const t = useTranslations('Nav');
  const contextLocale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLocale, setActiveLocale] = useState<'en' | 'pt'>(
    contextLocale === 'en' ? 'en' : 'pt',
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active locale with current URL path (default to pt)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isEn = window.location.pathname.startsWith('/en');
      setActiveLocale(isEn ? 'en' : 'pt');
    }
  }, [contextLocale]);

  const switchLocale = (targetLocale: 'en' | 'pt') => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const isCurrentlyEn = currentPath.startsWith('/en');
    const currentActive = isCurrentlyEn ? 'en' : 'pt';

    if (targetLocale === currentActive) return;

    // Strip current locale prefix (/en or /pt)
    const pathWithoutLocale = currentPath.replace(/^\/(en|pt)(\/|$)/, '/');
    const cleanPath = pathWithoutLocale.startsWith('/')
      ? pathWithoutLocale
      : `/${pathWithoutLocale}`;
    const hash = typeof window !== 'undefined' ? window.location.hash || '' : '';

    const newUrl = `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}${hash}`;

    // Direct location navigation triggers full server-side locale layout re-hydration
    window.location.href = newUrl;
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Allow drawer unmount animation before smooth scrolling to target ID
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = href;
      }
    }, 120);
  };

  const navItems = [
    { label: t('about'), href: '#about' },
    { label: t('practiceAreas'), href: '#expertise' },
    { label: t('whyLarry'), href: '#pain-points' },
    { label: t('process'), href: '#process' },
    { label: t('reviews'), href: '#reviews' },
    { label: t('contact'), href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-gradient-to-b from-[#0B0F17]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Official Brand Logo Container */}
        <a
          href={`/${activeLocale}`}
          className="flex items-center group shrink-0"
          aria-label="Larry Durei Advogado Home"
        >
          <div className="bg-[#F8F6F0] px-3.5 py-1.5 rounded-xl border border-[#C5A059]/40 group-hover:border-[#C5A059] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.25)] transition-all flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Larry Durei — Advogado | Lawyer | Rechtsanwalt | Advocaat"
              width={160}
              height={45}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs 2xl:text-sm font-medium text-[#C2C9D6] hover:text-[#E6C875] transition-colors tracking-wide whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls (Locale Switcher & Contact) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center bg-[#121824] border border-[#C5A059]/40 rounded-full p-1 text-xs shrink-0 shadow-inner">
            <button
              type="button"
              onClick={() => switchLocale('pt')}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                activeLocale === 'pt'
                  ? 'bg-gradient-to-r from-[#E6C875] to-[#C5A059] text-[#0B0F17] shadow-md ring-1 ring-[#E6C875]'
                  : 'text-[#C2C9D6] hover:text-[#F8F6F0] hover:bg-[#182030]'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => switchLocale('en')}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                activeLocale === 'en'
                  ? 'bg-gradient-to-r from-[#E6C875] to-[#C5A059] text-[#0B0F17] shadow-md ring-1 ring-[#E6C875]'
                  : 'text-[#C2C9D6] hover:text-[#F8F6F0] hover:bg-[#182030]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct Line Phone Badge */}
          <a
            href="tel:+351961127361"
            className="flex items-center gap-2 text-xs font-semibold text-[#E6C875] hover:text-[#F8F6F0] px-3 py-2 rounded-lg bg-[#182030]/80 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all shrink-0 whitespace-nowrap"
            title="+351 961 127 361"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden 2xl:inline">+351 961 127 361</span>
          </a>

          {/* Book Consultation Button */}
          <a
            href="#consult-form"
            className="px-4 py-2 text-xs font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] hover:from-[#F8F6F0] hover:to-[#E6C875] rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shrink-0 whitespace-nowrap"
          >
            {t('bookConsult')}
          </a>
        </div>

        {/* Mobile / Tablet / Mid-Screen Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          <div className="flex items-center bg-[#121824] border border-[#C5A059]/40 rounded-full p-1 text-xs shrink-0 shadow-inner sm:hidden">
            <button
              type="button"
              onClick={() => switchLocale('pt')}
              className={`px-2.5 py-1 rounded-full font-bold cursor-pointer transition-all ${
                activeLocale === 'pt'
                  ? 'bg-gradient-to-r from-[#E6C875] to-[#C5A059] text-[#0B0F17] shadow-sm'
                  : 'text-[#C2C9D6] hover:text-[#F8F6F0]'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => switchLocale('en')}
              className={`px-2.5 py-1 rounded-full font-bold cursor-pointer transition-all ${
                activeLocale === 'en'
                  ? 'bg-gradient-to-r from-[#E6C875] to-[#C5A059] text-[#0B0F17] shadow-sm'
                  : 'text-[#C2C9D6] hover:text-[#F8F6F0]'
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#182030] text-[#F8F6F0] border border-[#C5A059]/30 shrink-0 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass-nav border-t border-[#C5A059]/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                  className="text-base font-serif font-medium text-[#F8F6F0] hover:text-[#C5A059] py-1 border-b border-[#182030] cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+351961127361"
                className="flex items-center gap-3 text-sm font-semibold text-[#E6C875] py-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                +351 961 127 361
              </a>
              <a
                href="#consult-form"
                onClick={(e) => handleMobileNavClick(e, '#consult-form')}
                className="w-full text-center py-3 text-sm font-bold text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] rounded-xl shadow-md cursor-pointer"
              >
                {t('bookConsult')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
