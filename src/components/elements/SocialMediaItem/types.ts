import type { SocialMedia } from '~/types/profile';

export type SocialMediaItemProps = SocialMedia

export type SocialMediaRender = {
  label: string
  icon: React.FC<React.SVGProps<SVGElement>>
}
