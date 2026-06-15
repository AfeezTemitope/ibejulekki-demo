import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

// When Sanity is not connected yet (no project id in the environment), use a
// stub client so pages render their built-in placeholder content instead of
// crashing at import time.
export const client: any = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : { fetch: async () => null }

const builder = projectId
  ? imageUrlBuilder(createClient({ projectId, dataset, apiVersion, useCdn: true }))
  : null

export function urlFor(source: SanityImageSource): any {
  if (!builder) return { url: () => '' }
  return builder.image(source)
}
