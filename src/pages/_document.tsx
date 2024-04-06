import Document, { Head, Html, Main, NextScript } from 'next/document';

import ubuntu from '~/assets/fonts/ubuntu';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className={`${ubuntu.variable} bg-abub-primary relative`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
