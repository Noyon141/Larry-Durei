'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Languages, MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('Hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#4A121A]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Asymmetric Column (Authoritative Copy & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-8">
            {/* OA License Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full oxblood-badge text-xs font-semibold text-[#E6C875]"
            >
              <ShieldCheck className="w-4 h-4 text-[#E6C875]" />
              <span>{t('badge')}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F6F0] leading-[1.12]"
            >
              {t('titleLine1')}{' '}
              <span className="block gold-gradient-text mt-1">{t('titleLine2')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#C2C9D6] font-normal leading-relaxed max-w-2xl"
            >
              {t('subtitle')}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#consult-form"
                className="px-8 py-4 text-sm font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] via-[#C5A059] to-[#B89343] hover:from-[#F8F6F0] hover:to-[#E6C875] rounded-full shadow-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 group"
              >
                <span>{t('ctaPrimary')}</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F17] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#expertise"
                className="px-8 py-4 text-sm font-semibold tracking-wide text-[#F8F6F0] bg-[#121824]/80 hover:bg-[#182030] border border-[#C5A059]/30 hover:border-[#C5A059] rounded-full transition-all flex items-center justify-center"
              >
                {t('ctaSecondary')}
              </a>
            </motion.div>

            {/* Stat Counters Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#C5A059]/20 w-full grid grid-cols-3 gap-4 sm:gap-8"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E6C875]">
                  {t('stat1Value')}
                </span>
                <span className="text-xs text-[#8E9AAF] mt-0.5">{t('stat1Label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
                  {t('stat2Value')}
                </span>
                <span className="text-xs text-[#8E9AAF] mt-0.5">{t('stat2Label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059] flex items-center gap-1">
                  {t('stat3Value')}
                  <Languages className="w-4 h-4 text-[#C5A059] hidden sm:inline" />
                </span>
                <span className="text-xs text-[#8E9AAF] mt-0.5">{t('stat3Label')}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Asymmetric Masonry Grid */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="grid grid-cols-12 gap-4 relative">
              {/* Primary Large Interior Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="col-span-8 relative h-72 sm:h-96 rounded-2xl overflow-hidden glass-card gold-border-glow group"
              >
                <Image
                  src="/images/hero-real-estate.jpg"
                  alt="Lisbon Luxury Property Interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-60" />
              </motion.div>

              {/* Secondary Vertical Law Office Photo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="col-span-4 relative h-72 sm:h-96 rounded-2xl overflow-hidden glass-card group mt-8"
              >
                <Image
                  src="/images/office-consultation.jpg"
                  alt="Larry Durei Lisbon Office Desk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-60" />
              </motion.div>

              {/* Bottom Wide Avenue Facade Photo */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-12 relative h-40 sm:h-48 rounded-2xl overflow-hidden glass-card group -mt-6 sm:-mt-8 z-10"
              >
                <Image
                  src="/images/avenida-facade.jpg"
                  alt="Avenida da Liberdade Lisbon Facade"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />

                {/* Overlaid Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#0B0F17]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 text-xs font-semibold text-[#E6C875]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{t('lisbonTag')}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
