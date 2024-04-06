import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-ubuntu',
  weight: ['300', '400', '500', '700'],
});

export default ubuntu;
