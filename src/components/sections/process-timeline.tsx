'use client';

import { motion } from 'framer-motion';
import { FileCheck, Key, Landmark, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ProcessTimeline() {
  const t = useTranslations('Process');

  const steps = [
    {
      number: t('step1Number'),
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: Shield,
    },
    {
      number: t('step2Number'),
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: FileCheck,
    },
    {
      number: t('step3Number'),
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: Landmark,
    },
    {
      number: t('step4Number'),
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: Key,
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-[#121824]/60 border-y border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30">
            {t('tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0] leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Vertical Timeline with Connecting Line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Golden Line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#C5A059] via-[#E6C875] to-[#4A121A] transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0B0F17] border-2 border-[#C5A059] flex items-center justify-center z-10 shadow-lg gold-border-glow">
                    <span className="font-serif font-bold text-sm text-[#E6C875]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}
                  >
                    <div className="glass-card p-6 sm:p-8 rounded-2xl relative group hover:border-[#C5A059]">
                      <div
                        className={`flex items-center gap-3 mb-4 ${isEven ? 'sm:justify-end' : ''}`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#182030] border border-[#C5A059]/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#C5A059]" />
                        </div>
                        <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                          Phase {step.number}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-3 group-hover:text-[#E6C875] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#C2C9D6] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
