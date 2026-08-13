'use client';

import { Cookie, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  const handleOpenCookieModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  return (
    <footer className="bg-[#070A0F] border-t border-[#C5A059]/20 text-[#8E9AAF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#182030]">
          {/* Brand & Registration Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#F8F6F0] px-3.5 py-1.5 rounded-xl border border-[#C5A059]/40 shadow-md inline-flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Larry Durei — Advogado"
                  width={160}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-[#C2C9D6] font-serif">{t('firmName')}</p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E6C875] bg-[#121824] px-3 py-1.5 rounded-md border border-[#C5A059]/20 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>{t('registration')}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F8F6F0] uppercase tracking-wider">
              Legal Practice
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#E6C875] transition-colors">
                  About Larry Durei
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#E6C875] transition-colors">
                  Real Estate Acquisitions
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#E6C875] transition-colors">
                  Registration & Notarial Deeds
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#E6C875] transition-colors">
                  Inheritance & Succession
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#E6C875] transition-colors">
                  Court Debt Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F8F6F0] uppercase tracking-wider">
              Lisbon Office
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 text-[#C2C9D6]">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                Av. da Liberdade 3, 3º, Lisbon
              </p>
              <p className="flex items-center gap-2 text-[#E6C875]">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                +351 961 127 361
              </p>
              <p className="flex items-center gap-2 text-[#C2C9D6]">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                Larrydurei-44324L@adv.oa.pt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & GDPR Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Larry Durei. {t('rights')}
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={handleOpenCookieModal}
              className="hover:text-[#E6C875] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
            >
              <Cookie className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t('cookieSettings')}</span>
            </button>
            <a href="#consult-form" className="hover:text-[#F8F6F0] transition-colors">
              {t('privacy')}
            </a>
            <a href="#consult-form" className="hover:text-[#F8F6F0] transition-colors">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
