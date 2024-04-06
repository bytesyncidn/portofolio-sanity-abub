import Head from 'next/head';

import app from '~/config/app';

import { MetadataProps } from './types';

const Metadata = (props: MetadataProps) => {
  let title = props?.title ?? app.name;
  const description = props?.description ?? app.description;

  if (props?.options?.withSuffix) {
    title += ` | ${app.name}`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={(props?.keywords ?? app.keywords).join(', ')}
      />
      <meta name="application-name" content={app.name} />

      {/* Open graph */}
      <meta name="og:type" content="website" />
      <meta name="og:site-name" content={app.name} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Head>
  );
};

export default Metadata;
