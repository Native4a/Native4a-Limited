import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/config.js';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|ja|zh)/:path*'],
};
