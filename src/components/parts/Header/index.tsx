import dynamic from 'next/dynamic';

import { getDeviceUserAgentServer, UserAgentDevice } from '~/lib/utils';

const HeaderTitle = dynamic(() => import('~/components/parts/HeaderTitle'));
const HeaderLogo = dynamic(() => import('~/components/parts/HeaderLogo'));

const Header = () => {
  const device = getDeviceUserAgentServer();

  return (
    <header className="fixed right-1/2 lg:right-10 top-10 translate-x-1/2 lg:translate-x-0 z-10">
      {[UserAgentDevice.Mobile, UserAgentDevice.Tablet].includes(device) ? (
        <HeaderLogo />
      ) : (
        <HeaderTitle />
      )}
    </header>
  );
};

export default Header;
