import { useCallback } from 'react';

import Each from '~/components/elements/Each';
import { getDeviceUserAgentServer, UserAgentDevice } from '~/lib/utils';

import ImagePortfolioMarquee from '../ImagePortfolioMarquee';

const images = new Array(9).fill(
  'https://cdn.sanity.io/images/d8cd0qwt/production/0c6d3e1e64ca2b965073c4c030dc0f4159c6f34c-474x592.jpg',
);

const ImagePortfolioMarqueeGroup = () => {
  const device = getDeviceUserAgentServer();

  const getAttributeMarquee = useCallback(
    (index: number) => {
      if (device === UserAgentDevice.Mobile) {
        if (index === 0) {
          return {
            speed: 10,
            translate: { x: '50%' },
          };
        } else if (index === 1) {
          return {
            speed: 20,
            translate: { x: '50% - 180px' },
          };
        } else {
          return {
            speed: 15,
            translate: { x: '50% + 180px' },
          };
        }
      } else if (device === UserAgentDevice.Tablet) {
        if (index === 0) {
          return {
            speed: 10,
            translate: { x: '50%' },
          };
        } else if (index === 1) {
          return {
            speed: 20,
            translate: { x: '50% - 320px' },
          };
        } else {
          return {
            speed: 15,
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
    },
    [device],
  );

  return (
    <div>
      <Each
        list={new Array(3).fill(0)}
        render={(_, index) => (
          <ImagePortfolioMarquee
            images={images}
            {...getAttributeMarquee(index)}
          />
        )}
      />
    </div>
  );
};

export default ImagePortfolioMarqueeGroup;
