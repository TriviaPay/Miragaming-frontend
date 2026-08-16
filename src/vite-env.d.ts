/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALKCHAMP_WEB_URL?: string;
  readonly VITE_WALKCHAMP_PLAY_STORE_URL?: string;
  readonly VITE_WALKCHAMP_APP_STORE_URL?: string;
  readonly VITE_TRIVIACOIN_WEB_URL?: string;
  readonly VITE_TRIVIACOIN_PLAY_STORE_URL?: string;
  readonly VITE_TRIVIACOIN_APP_STORE_URL?: string;
  readonly VITE_VIBELINK_WEB_URL?: string;
  readonly VITE_VIBELINK_PLAY_STORE_URL?: string;
  readonly VITE_VIBELINK_APP_STORE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
