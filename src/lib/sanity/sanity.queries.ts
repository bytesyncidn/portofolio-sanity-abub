import groq from 'groq';
import { type SanityClient } from 'next-sanity';

import { Media } from '~/types/sanity';

export const mediaQuery = groq`*[_type == "media"]`;

export const getMedia = async (client: SanityClient): Promise<Media[]> =>
  await client.fetch(mediaQuery);
