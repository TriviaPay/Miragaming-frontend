function readUrl(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const appUrls = {
  walkchamp: {
    web: readUrl(import.meta.env.VITE_WALKCHAMP_WEB_URL),
    playStore: readUrl(import.meta.env.VITE_WALKCHAMP_PLAY_STORE_URL),
    appStore: readUrl(import.meta.env.VITE_WALKCHAMP_APP_STORE_URL),
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
