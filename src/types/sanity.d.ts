import type { ImageAsset } from '@sanity/types';

export interface Media {
  _type: 'media'
  _id: string
  title: string
  mainImage: ImageAsset
}

export interface Logo {
  _type: 'media'
  _id: string
  title: string
  logoImage: ImageAsset
}
