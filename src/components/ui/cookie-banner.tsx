'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Cookie, Lock, Settings, ShieldCheck, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export function CookieBanner() {
  const t = useTranslations('CookieConsent');
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check localStorage consent
    const storedConsent = localStorage.getItem('gdpr_cookie_consent');
    if (!storedConsent) {
      setShowBanner(true);
    }

    // Listen for custom trigger to open cookie settings from footer
    const handleOpenSettings = () => {
      setShowModal(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleAcceptAll = () => {
    const preferences = { necessary: true, analytics: true, timestamp: new Date().toISOString() };
    localStorage.setItem('gdpr_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectOptional = () => {
    const preferences = { necessary: true, analytics: false, timestamp: new Date().toISOString() };
    localStorage.setItem('gdpr_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    const preferences = {
      necessary: true,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('gdpr_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {/* Floating GDPR Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl max-w-[calc(100vw-2rem)] z-50 p-5 sm:p-6 rounded-3xl glass-card border border-[#C5A059]/40 shadow-2xl bg-[#121824]/95 backdrop-blur-xl text-[#F8F6F0]"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#182030] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F8F6F0]">
                    {t('title')}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#E6C875] bg-[#4A121A] px-2 py-0.5 rounded-full border border-[#E6C875]/30">
                    {t('badge')}
                  </span>
                </div>
                <p className="text-xs text-[#C2C9D6] leading-relaxed">{t('description')}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#C5A059]/15">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-3.5 sm:px-4 py-2 text-xs font-bold text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] hover:from-[#F8F6F0] hover:to-[#E6C875] rounded-full shadow-md transition-all cursor-pointer"
              >
                {t('acceptAll')}
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-[#C2C9D6] bg-[#182030] hover:text-[#F8F6F0] hover:bg-[#202B40] border border-[#C5A059]/30 rounded-full transition-colors cursor-pointer"
              >
                {t('rejectOptional')}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="p-2 text-xs text-[#8E9AAF] hover:text-[#E6C875] flex items-center gap-1 transition-colors ml-auto cursor-pointer"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">{t('customize')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Cookie Preferences Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0F17]/80 backdrop-blur-xl overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card max-w-lg w-full max-w-[calc(100vw-2rem)] p-6 sm:p-8 rounded-3xl relative border border-[#C5A059]/40 shadow-2xl bg-[#121824] text-[#F8F6F0]"
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#182030] text-[#C2C9D6] hover:text-[#F8F6F0] border border-[#C5A059]/30 cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#182030] border border-[#C5A059] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                    {t('badge')}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#F8F6F0]">
                    {t('title')}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {/* Necessary Cookies Option (Locked) */}
                <div className="p-4 rounded-2xl bg-[#0B0F17]/80 border border-[#C5A059]/20 flex items-start justify-between gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <h4 className="text-xs sm:text-sm font-bold text-[#F8F6F0]">
                        {t('necessaryTitle')}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#8E9AAF]">{t('necessaryDesc')}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#E6C875] bg-[#182030] px-2 py-1 sm:px-2.5 sm:py-1 rounded-full border border-[#C5A059]/30 shrink-0">
                    Always Active
                  </span>
                </div>

                {/* Analytics Cookies Option (Toggleable) */}
                <div className="p-4 rounded-2xl bg-[#0B0F17]/80 border border-[#C5A059]/20 flex items-start justify-between gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#F8F6F0]">
                      {t('analyticsTitle')}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#8E9AAF]">{t('analyticsDesc')}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer shrink-0 ${
                      analyticsEnabled ? 'bg-[#C5A059]' : 'bg-[#182030] border border-[#C5A059]/30'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-[#0B0F17] transition-transform ${
                        analyticsEnabled
                          ? 'translate-x-6 bg-[#0B0F17]'
                          : 'translate-x-0 bg-[#8E9AAF]'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#C5A059]/20">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-wide text-[#0B0F17] bg-gradient-to-r from-[#E6C875] to-[#C5A059] rounded-full text-center hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  {t('savePreferences')}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#C2C9D6] hover:text-[#F8F6F0] text-center cursor-pointer"
                >
                  {t('acceptAll')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
