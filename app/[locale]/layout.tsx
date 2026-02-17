import { notFound } from 'next/navigation';
import { I18nProvider } from '@/lib/i18n';
import { locales, getMessages } from '@/lib/i18n-server';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} messages={messages}>
          <main>{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
