export const SITE_URL = 'https://miragaming.com';

export const paths = {
  home: '/',
  games: '/games',
  about: '/about',
  contact: '/contact',
} as const;

const HOME_SECTIONS: Record<string, string> = {
  '/': 'home',
  '/home': 'home',
  '/games': 'games',
  '/about': 'about',
  '/contact': 'contact',
};

export function normalizePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === '/home' ? '/' : normalized;
}

export function getHomeSectionId(pathname: string): string | undefined {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return HOME_SECTIONS[normalized];
}

export function isHomePath(pathname: string): boolean {
  return Boolean(getHomeSectionId(pathname));
}

export function scrollToHomeSection(pathname: string): void {
  const sectionId = getHomeSectionId(pathname);

  window.requestAnimationFrame(() => {
    if (!sectionId || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
