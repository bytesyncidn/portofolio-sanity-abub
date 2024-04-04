import groq from 'groq'
import { type SanityClient } from 'next-sanity'

import { Media } from '~/types'

export const mediaQuery = groq`*[_type == "media"]`

export async function getMedia(client: SanityClient): Promise<Media[]> {
  return await client.fetch(mediaQuery)
}
