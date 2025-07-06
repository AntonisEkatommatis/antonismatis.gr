import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Script from 'next/script';

export function generateStaticParams() {
  return [{ locale: 'el' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (await params).locale;
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}/index.json`)).default;
  } catch {
    notFound();
  }

  // Δομημένα δεδομένα για Person
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Αντώνης Εκατομμάτης',
    alternateName: 'Antonis Ekatommatis',
    url: 'https://antonismatis.gr',
    image: 'https://antonismatis.gr/profile.jpg',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'ΚΟΚΟΛΙΑΣ',
    },
    sameAs: [
      'https://github.com/AntonisEkatommatis',
      'https://www.linkedin.com/in/antonis-ekatommatis-b9b103333/',
    ],
    knowsAbout: ['Web Development', 'React', 'Node.js', 'Python', 'JavaScript', 'Java'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Χίος',
      addressCountry: 'Ελλάδα',
    },
  };

  // Δομημένα δεδομένα για WebSite
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Αντώνης Εκατομμάτης | Portfolio',
    url: 'https://antonismatis.gr',
    description: 'Προσωπικό portfolio του Αντώνη Εκατομμάτη - Software Engineer με εξειδίκευση σε React, Node.js, Python και JavaScript.',
    inLanguage: locale === 'el' ? 'el-GR' : 'en-US',
    author: {
      '@type': 'Person',
      name: 'Αντώνης Εκατομμάτης',
    },
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </div>
    </NextIntlClientProvider>
  );
} 