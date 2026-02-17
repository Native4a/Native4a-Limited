'use client';

import { useTranslation } from '@/lib/i18n';

export default function HomePage() {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-4">
              {t('hero.subtitle')}
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            {t('homepage.serviceScope')}
          </h2>
          <p className="text-2xl">
            {t('homepage.popularMethods')}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold underline decoration-yellow-400 mb-8">
            {t('homepage.customerTestimonial')}
          </h2>
        </div>
      </section>
    </div>
  );
}
