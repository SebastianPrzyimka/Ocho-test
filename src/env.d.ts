interface ImportMetaEnv {
  /** "production" makes the site indexable and hides the test banner. Anything else = test build. */
  readonly PUBLIC_SITE_MODE?: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
