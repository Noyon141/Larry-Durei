'use client';

import { Building2, FileCheck2, Globe2, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TrustBadges() {
  const t = useTranslations('Credentials');

  const badges = [
    { icon: ShieldCheck, title: t('barAssoc'), desc: t('licence') },
    { icon: Globe2, title: t('languages'), desc: 'English · Deutsch · Português' },
    { icon: Building2, title: t('location'), desc: 'Av. da Liberdade 3, 3º, Lisbon' },
    { icon: FileCheck2, title: t('notaryDirect'), desc: 'Conservatória do Registo Predial' },
  ];

  return (
    <section className="relative py-8 bg-[#121824]/90 border-y border-[#C5A059]/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#182030] transition-colors border border-transparent hover:border-[#C5A059]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#F8F6F0] font-serif leading-tight">
                    {badge.title}
                  </span>
                  <span className="text-xs text-[#8E9AAF] mt-0.5">{badge.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
