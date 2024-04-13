import groq from 'groq';
import { type SanityClient } from 'next-sanity';

import { Logo, Media } from '~/types/sanity';

export const mediaQuery = groq`*[_type == "media"]`;

export const logoQuery = groq`*[_type == "logo"]`;

export const getMedia = async (client: SanityClient): Promise<Media[]> =>
  await client.fetch(mediaQuery);

export const getLogo = async (client: SanityClient): Promise<Logo[]> =>
  await client.fetch(logoQuery);
