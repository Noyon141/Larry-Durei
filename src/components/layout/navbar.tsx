'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, Phone, Scale, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
  const t = useTranslations('Nav');
  const contextLocale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLocale, setActiveLocale] = useState<'en' | 'pt'>(
    contextLocale === 'pt' ? 'pt' : 'en'
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active locale with current URL path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isPt = window.location.pathname.startsWith('/pt');
      setActiveLocale(isPt ? 'pt' : 'en');
    }
  }, [contextLocale]);

  const switchLocale = (targetLocale: 'en' | 'pt') => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const isCurrentlyPt = currentPath.startsWith('/pt');
    const currentActive = isCurrentlyPt ? 'pt' : 'en';

    if (targetLocale === currentActive) return;

    // Strip current locale prefix (/en or /pt)
    const pathWithoutLocale = currentPath.replace(/^\/(en|pt)(\/|$)/, '/');
    const cleanPath = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
    const hash = typeof window !== 'undefined' ? window.location.hash || '' : '';
    
    const newUrl = `/${targetLocale}${cleanPath === '/' ? '' : cleanPath}${hash}`;
    
    // Direct location navigation triggers full server-side locale layout re-hydration
    window.location.href = newUrl;
  };

  const navItems = [
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 xl:gap-8">
        {/* Brand Logo Container */}
        <a href={`/${activeLocale}`} className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center group-hover:border-[#C5A059] transition-colors shrink-0">
            <Scale className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#F8F6F0] group-hover:text-[#E6C875] transition-colors whitespace-nowrap">
              LARRY DUREI
            </span>
            <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold whitespace-nowrap">
              Advogado · OA 44324L
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-8 shrink-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm font-medium text-[#C2C9D6] hover:text-[#E6C875] transition-colors tracking-wide whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls (Locale Switcher & Contact) */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center bg-[#121824] border border-[#C5A059]/40 rounded-full p-1 text-xs shrink-0 shadow-inner">
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
          </div>

          {/* Direct Line Phone */}
          <a
            href="tel:+351961127361"
            className="flex items-center gap-2 text-xs font-semibold text-[#E6C875] hover:text-[#F8F6F0] px-3 py-2 rounded-lg bg-[#182030]/80 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all shrink-0 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden lg:inline">+351 961 127 361</span>
          </a>

          {/* Book Consultation Button */}
          <a
            href="#consult-form"
            className="px-4 py-2 text-xs font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] hover:from-[#F8F6F0] hover:to-[#E6C875] rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shrink-0 whitespace-nowrap"
          >
            {t('bookConsult')}
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          <div className="flex items-center bg-[#121824] border border-[#C5A059]/40 rounded-full p-1 text-xs shrink-0 shadow-inner">
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
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#182030] text-[#F8F6F0] border border-[#C5A059]/30 shrink-0 cursor-pointer"
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-medium text-[#F8F6F0] hover:text-[#C5A059] py-1 border-b border-[#182030]"
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
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-bold text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] rounded-xl shadow-md"
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
