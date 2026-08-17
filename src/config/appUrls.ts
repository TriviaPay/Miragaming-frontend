function readUrl(value: string | undefined, fallback?: string): string | undefined {
  const trimmed = value?.trim();
  return trimmed || fallback || undefined;
}

export const appUrls = {
  walkchamp: {
    web: readUrl(import.meta.env.VITE_WALKCHAMP_WEB_URL),
    playStore: readUrl(
      import.meta.env.VITE_WALKCHAMP_PLAY_STORE_URL,
      'https://play.google.com/store/apps/details?id=com.miragaming.walkchamp',
    ),
    appStore: readUrl(
      import.meta.env.VITE_WALKCHAMP_APP_STORE_URL,
      'https://apps.apple.com/app/walk-champ/id1234567890',
    ),
  },
  triviaCoin: {
    web: readUrl(import.meta.env.VITE_TRIVIACOIN_WEB_URL),
    playStore: readUrl(import.meta.env.VITE_TRIVIACOIN_PLAY_STORE_URL),
    appStore: readUrl(import.meta.env.VITE_TRIVIACOIN_APP_STORE_URL),
  },
  vibeLink: {
    web: readUrl(import.meta.env.VITE_VIBELINK_WEB_URL),
    playStore: readUrl(import.meta.env.VITE_VIBELINK_PLAY_STORE_URL),
    appStore: readUrl(import.meta.env.VITE_VIBELINK_APP_STORE_URL),
  },
} as const;
