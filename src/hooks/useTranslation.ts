// Compatibility wrapper for next-intl
import { useTranslations } from 'next-intl';

export function useTranslation() {
  const t = useTranslations();
  
  return {
    t: (key: string) => t(key),
    i18n: {
      language: 'zh', // This will be handled by next-intl middleware
      changeLanguage: () => {}, // Not needed in next-intl
    },
  };
}
