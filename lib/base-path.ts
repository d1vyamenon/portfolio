/**
 * The site can live at a sub-path (e.g. https://d1vyamenon.github.io/ux-portfolio-website-design/).
 * Next.js adds that prefix to <Link> routes on its own, but not to plain file URLs such as images,
 * videos and the resume PDF, so wrap those with `withBase`.
 *
 * NEXT_PUBLIC_BASE_PATH is set by the GitHub Pages workflow; it's empty for local dev
 * and for a custom domain.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function withBase(path: string) {
  return path.startsWith('/') ? `${basePath}${path}` : path
}
