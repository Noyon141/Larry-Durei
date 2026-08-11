'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Lock, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function LeadCTASection() {
  const t = useTranslations('LeadForm');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stage: t('stageOption1'),
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-priority lead dispatch to Larry Durei
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="consult-form" className="relative py-24 bg-[#0B0F17] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 shadow-2xl bg-[#121824]/90 relative">
          {/* Top Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30 text-xs font-semibold text-[#E6C875]">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Privileged & Confidential Counsel</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center mx-auto text-[#E6C875]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F8F6F0]">{t('successTitle')}</h3>
              <p className="text-base text-[#C2C9D6] max-w-lg mx-auto">{t('successMessage')}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 text-xs font-bold text-[#0B0F17] bg-[#C5A059] hover:bg-[#E6C875] rounded-full transition-colors"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="client-name"
                    className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block"
                  >
                    {t('nameLabel')} *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder={t('namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[#C5A059]/30 text-[#F8F6F0] placeholder-[#8E9AAF]/50 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="client-email"
                    className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block"
                  >
                    {t('emailLabel')} *
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    placeholder={t('emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[#C5A059]/30 text-[#F8F6F0] placeholder-[#8E9AAF]/50 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="client-phone"
                    className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block"
                  >
                    {t('phoneLabel')} *
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    placeholder={t('phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[#C5A059]/30 text-[#F8F6F0] placeholder-[#8E9AAF]/50 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm transition-all"
                  />
                </div>

                {/* Stage Selection */}
                <div className="space-y-2">
                  <label
                    htmlFor="client-stage"
                    className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block"
                  >
                    {t('stageLabel')}
                  </label>
                  <select
                    id="client-stage"
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[#C5A059]/30 text-[#F8F6F0] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm transition-all"
                  >
                    <option value={t('stageOption1')}>{t('stageOption1')}</option>
                    <option value={t('stageOption2')}>{t('stageOption2')}</option>
                    <option value={t('stageOption3')}>{t('stageOption3')}</option>
                    <option value={t('stageOption4')}>{t('stageOption4')}</option>
                    <option value={t('stageOption5')}>{t('stageOption5')}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="client-message"
                  className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block"
                >
                  {t('messageLabel')}
                </label>
                <textarea
                  id="client-message"
                  rows={4}
                  placeholder={t('messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[#C5A059]/30 text-[#F8F6F0] placeholder-[#8E9AAF]/50 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-8 text-sm font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] via-[#C5A059] to-[#B89343] hover:from-[#F8F6F0] hover:to-[#E6C875] rounded-xl shadow-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  <span>{t('submitting')}</span>
                ) : (
                  <>
                    <span>{t('submitBtn')}</span>
                    <ArrowRight className="w-4 h-4 text-[#0B0F17]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#8E9AAF]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Strict Lawyer-Client Confidentiality · OA Registration Nº 44324L</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
