'use client';

import React, { createContext, useContext, useCallback } from 'react';

type Messages = Record<string, any>;

const I18nContext = createContext<{
  locale: string;
  messages: Messages;
  t: (key: string) => string;
}>({
  locale: 'zh',
  messages: {},
  t: (key: string) => key,
});

function getNestedValue(obj: any, path: string): string {
  const value = path.split('.').reduce((acc, part) => acc?.[part], obj);
  return typeof value === 'string' ? value : path;
}

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
}) {
  const t = useCallback(
    (key: string) => getNestedValue(messages, key),
    [messages]
  );

  return (
    <I18nContext.Provider value={{ locale, messages, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  return { t: context.t, locale: context.locale };
}

export function useLocale() {
  return useContext(I18nContext).locale;
}
