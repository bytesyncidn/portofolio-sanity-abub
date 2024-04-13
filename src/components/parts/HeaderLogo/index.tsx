import { draftMode } from 'next/headers';
import Image from 'next/image';

import { readToken } from '~/lib/sanity/sanity.api';
import { getClient } from '~/lib/sanity/sanity.client';
import { urlForImage } from '~/lib/sanity/sanity.image';
import { getLogo } from '~/lib/sanity/sanity.queries';

const placeholderUrl = 'https://placehold.co/400x400.png';

const HeaderLogo = async () => {
  const { isEnabled: isEnabledDraftMode } = draftMode();
  const client = getClient(isEnabledDraftMode ? { token: readToken } : undefined);

  const logo = await getLogo(client);

  const logoUrl = urlForImage(logo[0].logoImage)?.url() ?? placeholderUrl;

  return (
    <Image
      src={logoUrl}
      alt="Tengen Hekaru"
      width={100}
      height={100}
      className="object-cover w-20 h-20 rounded-full"
    />
  );
};

export default HeaderLogo;
