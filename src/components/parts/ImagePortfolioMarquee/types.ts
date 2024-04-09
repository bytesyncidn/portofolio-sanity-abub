import { Media } from '~/types/sanity';

export type ImagePortfolioMarqueeProps = {
  images: Media[]
  translate?: {
    x?: string | number
    y?: string | number
  }
  speed?: number
}
