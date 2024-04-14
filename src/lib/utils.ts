import { UserAgent } from '~/types';
import { Media } from '~/types/sanity';

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

export const calculateSpeed = (numberOfImages : number) => {
  const baseSpeed = 10;

  const decaySpeed = 0.98;

  return baseSpeed * Math.pow(decaySpeed, numberOfImages);
};

export const splitMedia = (array: Media[], split: number) => {

  const results: Media[][] = [];

  const size = Math.floor(array.length / split);

  for (let i = 0; i < split; i++) {
    const start = i * size;
    const end = (i === split - 1) ? array.length : (i + 1) * size;

    results.push(
      array.slice(start, end)
    );
  }

  return results;
};
