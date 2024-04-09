import Image from 'next/image';
import { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

import { urlForImage } from '~/lib/sanity/sanity.image';
import {
  generateRandomKey,
  getDeviceUserAgentServer,
  UserAgentDevice,
} from '~/lib/utils';

import { ImagePortfolioMarqueeProps } from './types';

const ImagePortfolioMarquee = ({
  images,
  translate,
  speed,
}: ImagePortfolioMarqueeProps) => {
  const device = getDeviceUserAgentServer();

  const getTranslateValue = (value?: string | number) => {
    const transalteValue = value ?? 0;

    if (typeof transalteValue === 'string') return transalteValue;

    return transalteValue + 'px';
  };

  const containerClassName = useMemo(() => {
    if ([UserAgentDevice.Mobile, UserAgentDevice.Tablet].includes(device)) {
      return 'origin-left w-[110vh] rotate-90 fixed left-1/2';
    }

    return 'fixed top-1/2 left-1/2 rotate-45 origin-center w-[150vw]';
  }, [device]);

  return (
    <div
      className={containerClassName}
      style={{
        translate: `calc(-50% + ${getTranslateValue(translate?.x)}) calc(-50% + ${getTranslateValue(translate?.y)})`,
      }}
    >
      <Marquee autoFill speed={speed}>
        {images.map((image) => (
          <div
            key={generateRandomKey()}
            className="aspect-square h-[200px] md:h-[350px] xl:h-[335px] mr-4 lg:mr-8 flex justify-center"
          >
            <Image
              src={urlForImage(image.mainImage)?.url() ?? 'https://placehold.co/265x335.png'}
              alt={image.title}
              width="265"
              height="335"
              priority
              className="w-[158px] h-[200px] md:w-[277px] md:h-[350px] xl:w-[265px] xl:h-[335px] -rotate-90 object-cover rounded-xl shadow-abub-down ld:shadow-abub-left"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImagePortfolioMarquee;
