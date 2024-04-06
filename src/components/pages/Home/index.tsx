import ImagePortfolioMarqueeGroup from '~/components/parts/ImagePortfolioMarqueeGroup';
import SocialMedia from '~/components/parts/SocialMedia';

const Home = () => {
  return (
    <div>
      <header className="fixed right-10 top-10 z-10">
        <h1 className="text-4xl fton-bold">Tengen Hekaru</h1>
        <h2 className="text-3xl font-light italic">Illustration Studio</h2>
      </header>

      <main className="h-dvh overflow-hidden">
        <ImagePortfolioMarqueeGroup />
        <div className="rotate-180 fixed right-1/4 top-1/4 translate-x-1/2 scale-50">
          <ImagePortfolioMarqueeGroup />
        </div>
      </main>

      <footer className="z-10">
        <SocialMedia />
      </footer>
    </div>
  );
};

export default Home;
