import { draftMode } from 'next/headers';

import Each from '~/components/elements/Each';
import { readToken } from '~/lib/sanity/sanity.api';
import { getClient } from '~/lib/sanity/sanity.client';
import { getMedia } from '~/lib/sanity/sanity.queries';
import { getDeviceUserAgentServer, UserAgentDevice } from '~/lib/utils';

import ImagePortfolioMarquee from '../ImagePortfolioMarquee';

const MIN_IMAGE_LENGTH = 3;

const ImagePortfolioMarqueeGroup = async () => {
  const { isEnabled: isEnabledDraftMode } = draftMode();
  const client = getClient(isEnabledDraftMode ? { token: readToken } : undefined);
  const medias = await getMedia(client);

  const device  = getDeviceUserAgentServer();

  const getAttributeMarquee = 
    (index: number) => {
      if (device === UserAgentDevice.Mobile) {
        if (index === 0) {
          return {
            speed: 8,
            translate: { x: '50%' },
          };
        } else if (index === 1) {
          return {
            speed: 9,
            translate: { x: '50% - 180px' },
          };
        } else {
          return {
            speed: 10,
            translate: { x: '50% + 180px' },
          };
        }
      } else if (device === UserAgentDevice.Tablet) {
        if (index === 0) {
          return {
            speed: 8,
            translate: { x: '50%' },
          };
        } else if (index === 1) {
          return {
            speed: 9,
            translate: { x: '50% - 320px' },
          };
        } else {
          return {
            speed: 10,
            translate: { x: '50% + 320px' },
          };
        }
      } else {
        if (index === 0) {
          return {
            translate: { x: '200px' },
          };
        } else if (index === 1) {
          return {
            translate: { x: '-220px' },
            speed: 100,
          };
        } else {
          return {
            translate: { x: '-640px' },
            speed: 75,
          };
        }
      }
    };

  return (
    <div>
      <Each
        list={new Array(3).fill(0)}
        render={(_, index) => (
          <ImagePortfolioMarquee
            images={medias.length >= MIN_IMAGE_LENGTH ? medias : [...medias, ...(new Array(MIN_IMAGE_LENGTH - medias.length).fill(medias[0] ?? []))]}
            {...getAttributeMarquee(index)}
          />
        )}
      />
    </div>
  );
};

export default ImagePortfolioMarqueeGroup;
