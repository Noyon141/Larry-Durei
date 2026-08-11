'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star, UserCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function ReviewsSection() {
  const t = useTranslations('Reviews');
  const [filter, setFilter] = useState<'all' | 'foreign' | 'german' | 'urgent'>('all');

  const rawReviews = [
    {
      id: 'bret',
      name: 'Bret Icenogle',
      role: 'Property Purchaser in Portugal',
      location: 'International Investor',
      category: 'foreign',
      rating: 5,
      date: '3 months ago',
      content:
        'Larry Durei acted as my real estate attorney for a transaction in Portugal. Larry is exactly the lawyer you want. Not only does he know the law, he is prompt with communications, detailed, and advisory. Larry clearly explains risks and options for his clients. I couldn’t be more pleased with the support that Larry provided.',
    },
    {
      id: 'laura',
      name: 'Laura deJong',
      role: 'Lisbon Property Seller',
      location: 'Local Guide · 60 reviews',
      category: 'foreign',
      rating: 5,
      date: '2 months ago',
      content:
        'We contacted Larry because of his amazing reviews and we were so happy we did. He guided us through a very challenging and nuanced issue we faced during the sale of our Lisbon property as only a very experienced and knowledgeable real estate attorney could. He was incredibly responsive, clear and intuitive.',
    },
    {
      id: 'adrian',
      name: 'Adrian Stern',
      role: 'German Investor & Buyer',
      location: 'Property Purchase in Portugal',
      category: 'german',
      rating: 5,
      date: '2 years ago',
      content:
        'Hervorragende rechtliche Unterstützung beim Immobilienkauf in Portugal! Larry provided exceptional legal support throughout our property purchase journey. His fluency in both German and Portuguese was invaluable. Evaluated all property documents, communicated with agents & notary, and was our translator on the day of the deed.',
    },
    {
      id: 'aimee',
      name: 'Aimee Touton',
      role: 'First-time Buyer in Lisbon',
      location: 'Local Guide · 16 reviews',
      category: 'urgent',
      rating: 5,
      date: '2 years ago',
      content:
        'Larry was a great encounter. I got in touch with him over the Christmas period and he was the ONLY person to reply out of many others. From the get go, he had our best interest at heart and made sure we protected ourselves. He never got impatient and certainly did not rush us. 100% recommend!',
    },
    {
      id: 'sven',
      name: 'Sven',
      role: 'Home Buyer in Portugal',
      location: 'Local Guide · 94 reviews',
      category: 'foreign',
      rating: 5,
      date: '1 year ago',
      content:
        'I had an outstanding experience working with Larry - Real Estate Lawyer during my home purchase in Portugal. Larry guided me seamlessly from beginning to end with his extensive expertise and meticulous attention to detail. He anticipated every possible scenario, ensuring a smooth process.',
    },
    {
      id: 'peter',
      name: 'Peter Akaegbu',
      role: 'Buyer from United Kingdom',
      location: 'UK Buyer · Real Estate Portugal',
      category: 'foreign',
      rating: 5,
      date: '2 years ago',
      content:
        'As a non-speaking Portuguese, Real estate in Portugal can be challenging, but from our first online contact with Larry, he got back to us quickly. He was professional, reassuring, thorough and responded to all our questions patiently and the trust evolved naturally.',
    },
    {
      id: 'noelle',
      name: 'Noelle Liszkay',
      role: 'Property Owner in Portugal',
      location: 'Local Guide · 56 reviews',
      category: 'foreign',
      rating: 5,
      date: '1 year ago',
      content:
        'It was a great pleasure working with Larry. We are so glad we got in contact with him for the purchase of our property in Portugal, as he took all the legal stuff off our hands and handled everything for us up until the final signing. We never stressed about anything!',
    },
    {
      id: 'hiren',
      name: 'Hiren Hinsu',
      role: 'Real Estate Investor',
      location: 'Contracting Law Client',
      category: 'foreign',
      rating: 5,
      date: '2 years ago',
      content:
        'Larry is one of the best and sharpest minds on real estate and contracting law. He will give you impartial advice and make the situation crystal clear while helping you understand the odds in your favor. Generous with knowledge, time, and tactics!',
    },
    {
      id: 'fiona',
      name: 'Fiona Kate Price',
      role: 'International Buyer',
      location: 'Local Guide · 10 reviews',
      category: 'foreign',
      rating: 5,
      date: '4 years ago',
      content:
        'Larry is excellent. Highly professional yet very personable. Fluent in English and multiple European languages. Trustworthy to always take the correct and proper path, which is appreciated in dealing with the law. Highly recommended.',
    },
  ];

  const filteredReviews =
    filter === 'all' ? rawReviews : rawReviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="relative py-24 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase px-3 py-1 rounded-full bg-[#182030] border border-[#C5A059]/30">
            {t('tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F6F0] leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-[#C2C9D6] leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#C5A059] text-[#0B0F17] shadow-md'
                : 'bg-[#121824] text-[#C2C9D6] border border-[#C5A059]/20 hover:border-[#C5A059]/50'
            }`}
          >
            {t('filterAll')} (9)
          </button>
          <button
            type="button"
            onClick={() => setFilter('foreign')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === 'foreign'
                ? 'bg-[#C5A059] text-[#0B0F17] shadow-md'
                : 'bg-[#121824] text-[#C2C9D6] border border-[#C5A059]/20 hover:border-[#C5A059]/50'
            }`}
          >
            {t('filterForeign')}
          </button>
          <button
            type="button"
            onClick={() => setFilter('german')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === 'german'
                ? 'bg-[#C5A059] text-[#0B0F17] shadow-md'
                : 'bg-[#121824] text-[#C2C9D6] border border-[#C5A059]/20 hover:border-[#C5A059]/50'
            }`}
          >
            {t('filterGerman')}
          </button>
          <button
            type="button"
            onClick={() => setFilter('urgent')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              filter === 'urgent'
                ? 'bg-[#C5A059] text-[#0B0F17] shadow-md'
                : 'bg-[#121824] text-[#C2C9D6] border border-[#C5A059]/20 hover:border-[#C5A059]/50'
            }`}
          >
            {t('filterUrgent')}
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Rating & Google Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#E6C875]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E6C875] text-[#E6C875]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#8E9AAF] flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      {t('readMore')}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#C5A059]/20 absolute -top-2 -left-2 -z-10" />
                    <p className="text-sm text-[#C2C9D6] leading-relaxed italic">"{rev.content}"</p>
                  </div>
                </div>

                {/* Author Details */}
                <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-[#F8F6F0]">
                      {rev.name}
                    </span>
                    <span className="text-xs text-[#8E9AAF]">{rev.role}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#C5A059] bg-[#182030] px-2.5 py-1 rounded-md border border-[#C5A059]/20">
                    {rev.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
