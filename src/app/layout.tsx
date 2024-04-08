import '~/assets/styles/global.css';

import { draftMode } from 'next/headers';

import ubuntu from '~/assets/fonts/ubuntu';
import Providers from '~/components/parts/Providers';
import generateMetadata from '~/lib/metadata';
import { readToken } from '~/lib/sanity/sanity.api';

export const metadata = generateMetadata();

export default function RootLayout({ children }: React.PropsWithChildren) {
  const { isEnabled: isEnabledDraftMode } = draftMode();
  const token = isEnabledDraftMode ? readToken : '';

  return (
    <html lang="en">
      <body className={`${ubuntu.variable} bg-abub-primary relative`}>
        <Providers draftMode={isEnabledDraftMode} token={token}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
