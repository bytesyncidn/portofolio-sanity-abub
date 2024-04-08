import Home from '~/components/pages/Home';
import generateMetadata from '~/lib/metadata';

export const metadata = generateMetadata(
  { title: 'Tengen Hekaru' },
  { withSuffix: true },
);

const HomePage = Home;

export default HomePage;
