/** Bump `CV_CACHE_BUST` when you replace the CV PDF so browsers skip a stale cached copy. */
import cvUrl from './assets/Affan Resume.pdf?url'

export const CV_CACHE_BUST = '20261028'

/** Resolved URL (Vite adds a content hash in production builds). */
export const CV_URL = cvUrl
