import Each from '~/components/elements/Each';
import SocialMediaItem from '~/components/elements/SocialMediaItem';
import { socialMedia } from '~/constants/profile';

const SocialMedia = () => {
  return (
    <div className="fixed bottom-32 md:bottom-10 bg-white rounded-full md:rounded-s-none py-3 md:py-8 px-3 md:px-24 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0">
      <div className="flex gap-4 md:gap-8">
        <Each list={socialMedia} render={SocialMediaItem} />
      </div>
    </div>
  );
};

export default SocialMedia;
