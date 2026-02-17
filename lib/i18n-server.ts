export const locales = ['en', 'ja', 'zh'] as const;
export const defaultLocale = 'zh';

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function getMessages(locale: string) {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  try {
    return (await import(`../messages/${validLocale}.json`)).default;
  } catch {
    return (await import(`../messages/${defaultLocale}.json`)).default;
  }
}
