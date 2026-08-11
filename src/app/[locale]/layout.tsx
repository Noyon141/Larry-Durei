import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { routing } from '@/i18n/routing';
import '../globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });

  return {
    title: messages?.Metadata?.title || 'Larry Durei | Real Estate Lawyer Lisbon',
    description: messages?.Metadata?.description || 'Real estate lawyer in Lisbon, Portugal.',
    metadataBase: new URL('https://larrydurei-advogado.pt'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        pt: '/pt',
      },
    },
    openGraph: {
      title: messages?.Metadata?.title,
      description: messages?.Metadata?.description,
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${jakarta.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#0B0F17] text-[#F8F6F0] antialiased selection:bg-[#C5A059] selection:text-[#0B0F17]"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisProvider>{children}</LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
