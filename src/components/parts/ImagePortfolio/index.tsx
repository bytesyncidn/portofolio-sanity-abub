import { getDeviceUserAgentServer, UserAgentDevice } from '~/lib/utils';

import ImagePortfolioMarqueeGroup from '../ImagePortfolioMarqueeGroup';

const ImagePortfolio = () => {
  const device = getDeviceUserAgentServer();

  return (
    <>
      <ImagePortfolioMarqueeGroup />

      {![UserAgentDevice.Mobile, UserAgentDevice.Tablet].includes(device) && (
        <div className="rotate-180 fixed right-[15%] top-[35%] translate-x-1/2 scale-50 blur-[5px] opacity-30 hidden lg:block z-[-1]">
          <ImagePortfolioMarqueeGroup />
        </div>
      )}
    </>
  );
};

export default ImagePortfolio;
