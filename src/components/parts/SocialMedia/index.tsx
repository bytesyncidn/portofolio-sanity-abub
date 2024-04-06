import cn from 'classnames';

import Each from '~/components/elements/Each';
import SocialMediaItem from '~/components/elements/SocialMediaItem';
import { socialMedia } from '~/constants/profile';

import { POSITION_CLASSNAME, ROUNDED_CLASSNAME } from './constants';
import { SocialMediaProps } from './tyes';

const SocialMedia = ({
  position = 'left',
  rounded = 'right',
  className,
}: SocialMediaProps) => {
  return (
    <div
      className={cn(
        'fixed bottom-10 py-4 px-10 bg-white',
        ROUNDED_CLASSNAME[rounded],
        POSITION_CLASSNAME[position],
        className,
      )}
    >
      <div className="flex gap-8">
        <Each list={socialMedia} render={SocialMediaItem} />
      </div>
    </div>
  );
};

export default SocialMedia;
