'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Check, FileText, Languages, ShieldAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function PainPointsSection() {
  const t = useTranslations('PainPoints');

  const cards = [
    {
      icon: ShieldAlert,
      title: t('card1Title'),
      desc: t('card1Desc'),
      highlight: 'Title & Debt Audit',
    },
    {
      icon: AlertTriangle,
      title: t('card2Title'),
      desc: t('card2Desc'),
      highlight: 'Municipal License Verification',
    },
    {
      icon: FileText,
      title: t('card3Title'),
      desc: t('card3Desc'),
      highlight: 'Deposit Protection Clauses',
    },
    {
      icon: Languages,
      title: t('card4Title'),
      desc: t('card4Desc'),
      highlight: 'Fluent EN / DE / PT Representation',
    },
  ];

  return (
    <section id="pain-points" className="relative py-24 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30">
            {t('tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0] leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Risk Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Decorative Oxblood Corner Ribbon */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#4A121A]/60 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#4A121A]/80 border border-[#E6C875]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#E6C875]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#F8F6F0] mb-3 group-hover:text-[#E6C875] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#C2C9D6] leading-relaxed mb-6">{card.desc}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] pt-4 border-t border-[#C5A059]/15">
                  <Check className="w-4 h-4 text-[#C5A059]" />
                  <span>{card.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
