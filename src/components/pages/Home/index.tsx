import ImagePortfolioMarqueeGroup from '~/components/parts/ImagePortfolioMarqueeGroup';
import SocialMedia from '~/components/parts/SocialMedia';

const Home = () => {
  return (
    <div>
      <header className="fixed right-10 top-10 z-10">
        <h1 className="text-7xl font-medium">Tengen Hekaru</h1>
        <h2 className="text-5xl font-light italic mt-5">Illustration Studio</h2>
      </header>

      <main className="h-dvh overflow-hidden">
        <ImagePortfolioMarqueeGroup />

        <div className="rotate-180 fixed right-[20%] top-[45%] translate-x-1/2 scale-50 blur-sm opacity-50">
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
