import '~/assets/styles/global.css';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import Metadata from '~/components/elements/Metadata';

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(
  () => import('~/components/parts/PreviewProvider'),
);

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;
  return (
    <>
      <Metadata />

      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
