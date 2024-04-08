import Header from '~/components/parts/Header';
import ImagePortfolio from '~/components/parts/ImagePortfolio';
import SocialMedia from '~/components/parts/SocialMedia';

const Home = () => {
  return (
    <div>
      <Header />

      <main className="h-dvh overflow-hidden">
        <ImagePortfolio />
      </main>

      <footer className="z-10">
        <SocialMedia />
      </footer>
    </div>
  );
};

export default Home;
