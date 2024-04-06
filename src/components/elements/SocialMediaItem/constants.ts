import InstagramIcon from '~/assets/icons/instagram.svg';
import PixivIcon from '~/assets/icons/pixiv.svg';
import TwitterIcon from '~/assets/icons/twitter.svg';

import { SocialMediaRender } from './types';

export const SOCIAL_MEDIA_RENDER: Record<string, SocialMediaRender> = {
  twitter: {
    label: 'Twitter',
    icon: TwitterIcon,
  },
  instagram: {
    label: 'Instagram',
    icon: InstagramIcon,
  },
  pixiv: {
    label: 'Pixiv',
    icon: PixivIcon,
  },
};
