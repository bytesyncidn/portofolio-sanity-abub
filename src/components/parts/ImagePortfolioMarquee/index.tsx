import Image from 'next/image';
// import Marquee from 'react-fast-marquee';
import Marquee from 'react-marquee-slider';

import { generateRandomKey } from '~/lib/utils';

import { ImagePortfolioMarqueeProps } from './types';

const ImagePortfolioMarquee = ({
  images,
  translate,
  speed = 0,
}: ImagePortfolioMarqueeProps) => {
  const getTranslateValue = (value?: string | number) => {
    const transalteValue = value ?? 0;

    if (typeof transalteValue === 'string') return transalteValue;

    return transalteValue + 'px';
  };

  return (
    <div
      className="top-1/2 left-1/2 rotate-45 origin-center fixed w-[150vw]"
      style={{
        translate: `calc(-50% + ${getTranslateValue(translate?.x)}) calc(-50% + ${getTranslateValue(translate?.y)})`,
      }}
    >
      {/* <Marquee autoFill speed={speed}>
        {images.map((image) => (
          <div
            key={generateRandomKey()}
            className="aspect-square h-[200px] xl:h-[335px] mr-8 flex justify-center"
          >
            <Image
              src={image}
              alt="image"
              width="265"
              height="335"
              className="aspect-[265/335] h-full object-contain -rotate-90"
            />
          </div>
        ))}
      </Marquee> */}

      <Marquee
        direction="rtl"
        velocity={25 + speed}
        resetAfterTries={2000}
        onInit={() => {}}
        onFinish={() => {}}
        scatterRandomly={false}
      >
        {images.map((image) => (
          <div
            key={generateRandomKey()}
            className="aspect-square h-[200px] xl:h-[335px] mr-8 flex justify-center"
          >
            <Image
              src={image}
              alt="image"
              width="265"
              height="335"
              className="aspect-[265/335] h-full object-contain -rotate-90"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImagePortfolioMarquee;
