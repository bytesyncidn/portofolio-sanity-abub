import { useMemo } from 'react';

import { SOCIAL_MEDIA_RENDER } from './constants';
import { SocialMediaItemProps } from './types';

const SocialMediaItem = (props: SocialMediaItemProps) => {
  const socialMediaRender = useMemo(() => {
    const socialMediaKey = Object.keys(SOCIAL_MEDIA_RENDER);

    if (!socialMediaKey.includes(props.key)) return null;

    return SOCIAL_MEDIA_RENDER[props.key];
  }, [props.key]);

  if (!socialMediaRender) return null;

  return (
    <a
      href={props.url}
      target="_blank"
      className="flex gap-3 items-center"
      rel="noreferrer noopener"
    >
      <div className="p-3 rounded-full bg-abub-black">
        <socialMediaRender.icon className="text-2xl text-white" />
      </div>

      <div className="flex flex-col text-sm">
        <p className="font-light">{socialMediaRender.label}</p>
        <p className="font-medium">{props.value}</p>
      </div>
    </a>
  );
};

export default SocialMediaItem;
