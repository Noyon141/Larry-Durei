'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function AboutSection() {
  const t = useTranslations('About');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 bg-[#0F1420] border-t border-[#C5A059]/20">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30">
            {t('tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0] leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Primary Collapsed Overview Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-[#C5A059]/30 shadow-2xl bg-[#121824]/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo & Registration Badge */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-2xl gold-border-glow group">
                <Image
                  src="/images/larry-durei.jpg"
                  alt="Dr. Larry Herbert Gershon Durei"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182030] border border-[#C5A059]/30 text-xs font-semibold text-[#E6C875] text-center">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{t('badgeBar')}</span>
              </div>
            </div>

            {/* Right Overview Details */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
                  Larry Herbert Gershon Durei
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#C5A059] uppercase tracking-wider mt-1">
                  Advogado Inscrito na Ordem dos Advogados · Lisboa, Portugal
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#C2C9D6] leading-relaxed">
                {t('overviewText')}
              </p>

              {/* Key Credentials Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0F17]/80 border border-[#C5A059]/20 text-xs text-[#F8F6F0]">
                  <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>FDUL Law Degree (2004) & ISCTE Master's (2012)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0F17]/80 border border-[#C5A059]/20 text-xs text-[#F8F6F0]">
                  <Globe2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Fluent in German, Dutch, English & Portuguese</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0F17]/80 border border-[#C5A059]/20 text-xs text-[#F8F6F0]">
                  <Briefcase className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Former Head of Legal (APAMB) & AHK Legal Advisor</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0F17]/80 border border-[#C5A059]/20 text-xs text-[#F8F6F0]">
                  <BookOpen className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Published Legal Treatises on Agency & Labor Law</span>
                </div>
              </div>

              {/* Action Toggle Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] via-[#C5A059] to-[#B89343] hover:from-[#F8F6F0] hover:to-[#E6C875] rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isExpanded ? t('collapseBtn') : t('expandBtn')}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#0B0F17]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#0B0F17]" />
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/larry-durei-66253241/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#182030] text-[#C5A059] hover:text-[#F8F6F0] hover:bg-[#C5A059]/20 border border-[#C5A059]/30 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:larrydurei-44324l@adv.oa.pt"
                    className="p-2.5 rounded-full bg-[#182030] text-[#C5A059] hover:text-[#F8F6F0] hover:bg-[#C5A059]/20 border border-[#C5A059]/30 transition-all"
                    aria-label="Email Larry Durei"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Detailed Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="mt-8 pt-8 border-t border-[#C5A059]/20 space-y-8"
              >
                {/* Academic Timeline Grid */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xl font-bold text-[#F8F6F0] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#C5A059]" />
                    <span>{t('academicTitle')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                        2004 · FDUL Lisbon
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('acad1')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                        Erasmus Scholar · Brazil
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('acad2')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                        2009 · Postgraduate
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('acad3')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                        2012 · Master's (LL.M.)
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('acad4')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Career */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xl font-bold text-[#F8F6F0] flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#C5A059]" />
                    <span>{t('careerTitle')}</span>
                  </h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#E6C875] uppercase tracking-wider">
                        2004 – 2007 · AHK Portugal
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('car1')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#E6C875] uppercase tracking-wider">
                        2007 – 2014 · APAMB
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('car2')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 space-y-1">
                      <span className="text-xs font-bold text-[#E6C875] uppercase tracking-wider">
                        2014 – Present · Lisbon Office
                      </span>
                      <p className="text-xs sm:text-sm text-[#C2C9D6] leading-relaxed">
                        {t('car3')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Publications & Repositories */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xl font-bold text-[#F8F6F0] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#C5A059]" />
                    <span>{t('publicationsTitle')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                          Book Treatise (2007)
                        </span>
                        <h5 className="font-serif text-base font-bold text-[#F8F6F0] mt-1">
                          {t('pub1Title')}
                        </h5>
                        <p className="text-xs text-[#8E9AAF] mt-1">{t('pub1Meta')}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-[#C5A059]/20 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                          Master's Thesis (2012)
                        </span>
                        <h5 className="font-serif text-base font-bold text-[#F8F6F0] mt-1">
                          {t('pub2Title')}
                        </h5>
                        <p className="text-xs text-[#8E9AAF] mt-1">{t('pub2Meta')}</p>
                      </div>
                      <a
                        href="https://repositorio.iscte-iul.pt/bitstream/10071/5494/1/Tese%20-%20O%20Contrato%20de%20Agencia%20VERSAO%20FINAL.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#E6C875] hover:text-[#F8F6F0] transition-colors"
                      >
                        <span>{t('pub2LinkText')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/larry-durei-66253241/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#182030] text-[#E6C875] hover:text-[#F8F6F0] border border-[#C5A059]/30 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#C5A059]" />
                    <span>{t('linkedinBtn')}</span>
                  </a>
                  <a
                    href="mailto:larrydurei-44324l@adv.oa.pt"
                    className="px-5 py-2.5 rounded-full bg-[#182030] text-[#E6C875] hover:text-[#F8F6F0] border border-[#C5A059]/30 text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C5A059]" />
                    <span>{t('emailBtn')}</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
