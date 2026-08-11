'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building,
  FileCheck,
  Gavel,
  Home,
  Landmark,
  Scale,
  Scroll,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function ExpertiseBentoGrid() {
  const t = useTranslations('Expertise');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const practiceAreas = [
    {
      id: 'realEstate',
      icon: Home,
      title: t('realEstate.title'),
      desc: t('realEstate.desc'),
      detail: t('realEstate.detail'),
      span: 'lg:col-span-8',
      gradient: 'from-[#C5A059]/20 via-[#182030] to-[#121824]',
    },
    {
      id: 'notarial',
      icon: FileCheck,
      title: t('notarial.title'),
      desc: t('notarial.desc'),
      detail: t('notarial.detail'),
      span: 'lg:col-span-4',
      gradient: 'from-[#4A121A]/30 via-[#182030] to-[#121824]',
    },
    {
      id: 'succession',
      icon: Scroll,
      title: t('succession.title'),
      desc: t('succession.desc'),
      detail: t('succession.detail'),
      span: 'lg:col-span-4',
      gradient: 'from-[#182030] to-[#121824]',
    },
    {
      id: 'debt',
      icon: Scale,
      title: t('debt.title'),
      desc: t('debt.desc'),
      detail: t('debt.detail'),
      span: 'lg:col-span-4',
      gradient: 'from-[#182030] to-[#121824]',
    },
    {
      id: 'executive',
      icon: Gavel,
      title: t('executive.title'),
      desc: t('executive.desc'),
      detail: t('executive.detail'),
      span: 'lg:col-span-4',
      gradient: 'from-[#182030] to-[#121824]',
    },
    {
      id: 'commercial',
      icon: Building,
      title: t('commercial.title'),
      desc: t('commercial.desc'),
      detail: t('commercial.detail'),
      span: 'lg:col-span-6',
      gradient: 'from-[#182030] to-[#121824]',
    },
    {
      id: 'public',
      icon: Landmark,
      title: t('public.title'),
      desc: t('public.desc'),
      detail: t('public.detail'),
      span: 'lg:col-span-6',
      gradient: 'from-[#182030] to-[#121824]',
    },
  ];

  const selectedArea = practiceAreas.find((a) => a.id === activeModal);

  return (
    <section id="expertise" className="relative py-24 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30">
            {t('tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0] leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {practiceAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${area.span} glass-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${area.gradient}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#C5A059]/40 flex items-center justify-center group-hover:border-[#C5A059] group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveModal(area.id)}
                      className="p-2 rounded-full bg-[#0B0F17]/60 hover:bg-[#C5A059] text-[#C2C9D6] hover:text-[#0B0F17] transition-all"
                      aria-label={t('modalButton')}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#F8F6F0] mb-3 group-hover:text-[#E6C875] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#C2C9D6] leading-relaxed mb-6">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModal(area.id)}
                    className="text-xs font-bold tracking-wide text-[#E6C875] hover:text-[#F8F6F0] flex items-center gap-1.5 transition-colors"
                  >
                    <span>{t('modalButton')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E9AAF]">
                    Larry Durei · OA 44324L
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0F17]/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card max-w-2xl w-full p-6 sm:p-8 rounded-3xl relative border border-[#C5A059]/40 shadow-2xl bg-[#121824]"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#182030] text-[#C2C9D6] hover:text-[#F8F6F0] border border-[#C5A059]/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#182030] border border-[#C5A059] flex items-center justify-center">
                  <selectedArea.icon className="w-7 h-7 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                    Detailed Legal Scope
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#C2C9D6] leading-relaxed mb-8">
                <p>{selectedArea.desc}</p>
                <div className="p-4 rounded-xl bg-[#182030]/80 border border-[#C5A059]/20 space-y-2">
                  <span className="text-xs font-bold text-[#E6C875] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    Legal Protections Included:
                  </span>
                  <p className="text-sm text-[#F8F6F0] leading-relaxed">{selectedArea.detail}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#C5A059]/20">
                <a
                  href="#consult-form"
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] rounded-full text-center hover:scale-[1.02] transition-transform"
                >
                  Consult on {selectedArea.title}
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#C2C9D6] hover:text-[#F8F6F0] text-center"
                >
                  {t('closeModal')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
