'use client';

import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function LocationSection() {
  const t = useTranslations('Location');

  return (
    <section id="location" className="relative py-24 bg-[#121824]/80 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30">
                {t('tagline')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0]">
                {t('title')}
              </h2>
              <p className="text-base text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                <div className="w-12 h-12 rounded-xl bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {t('addressTitle')}
                  </span>
                  <span className="text-base font-serif font-bold text-[#F8F6F0] whitespace-pre-line mt-1">
                    {t('address')}
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                <div className="w-12 h-12 rounded-xl bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {t('phoneTitle')}
                  </span>
                  <a
                    href="tel:+351961127361"
                    className="text-lg font-serif font-bold text-[#E6C875] hover:text-[#F8F6F0] transition-colors mt-1"
                  >
                    {t('phone')}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                <div className="w-12 h-12 rounded-xl bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {t('emailTitle')}
                  </span>
                  <a
                    href="mailto:Larrydurei-44324L@adv.oa.pt"
                    className="text-base font-serif font-semibold text-[#F8F6F0] hover:text-[#E6C875] transition-colors mt-1"
                  >
                    {t('email')}
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card">
                <div className="w-12 h-12 rounded-xl bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {t('hoursTitle')}
                  </span>
                  <span className="text-sm font-medium text-[#C2C9D6] whitespace-pre-line mt-1">
                    {t('hours')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Avenue Image & Map Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden glass-card gold-border-glow">
              <Image
                src="/images/avenida-facade.jpg"
                alt="Av. da Liberdade 3 Lisbon Office Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent" />

              {/* Overlaid Office Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B0F17]/95 backdrop-blur-md border border-[#C5A059]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                    Ordem dos Advogados Portugueses
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#F8F6F0]">
                    Larry Durei · Cédula Nº 44324L
                  </h4>
                  <p className="text-xs text-[#8E9AAF]">
                    Av. da Liberdade 3, 3º andar, sala 1, Lisboa
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Av.+da+Liberdade+3,+1250-139+Lisboa"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs font-bold text-[#0B0F17] bg-[#C5A059] hover:bg-[#E6C875] rounded-full shrink-0 flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
