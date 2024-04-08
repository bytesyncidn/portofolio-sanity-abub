import { UserAgent } from '~/types';

export enum UserAgentDevice {
  Mobile = 'Mobile',
  Tablet = 'Tablet',
  Desktop = 'Desktop',
}

export const generateRandomKey = () => Math.random().toString(36).substring(7);

export const getIsMobileServer = () => {
  const { headers } = require('next/headers');

  const userAgentString = headers().get('x-user-agent');

  if (!userAgentString) return false;

  const userAgent: UserAgent = JSON.parse(userAgentString);

  return userAgent.device.type === 'mobile' ? true : false;
};

export const getDeviceUserAgentServer = () => {
  const { headers } = require('next/headers');

  const userAgentString = headers().get('x-user-agent');

  if (!userAgentString) return UserAgentDevice.Desktop;

  const userAgent: UserAgent = JSON.parse(userAgentString);

  if (userAgent.device.type === 'mobile') return UserAgentDevice.Mobile;
  else if (userAgent.device.type === 'tablet') return UserAgentDevice.Tablet;

  return UserAgentDevice.Desktop;
};
