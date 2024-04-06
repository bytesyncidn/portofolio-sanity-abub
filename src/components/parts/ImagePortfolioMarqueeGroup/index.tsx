import ImagePortfolioMarquee from '../ImagePortfolioMarquee';

const images = new Array(9).fill('https://placehold.co/265x335.png');

const ImagePortfolioMarqueeGroup = () => {
  return (
    <>
      <ImagePortfolioMarquee images={images} translate={{ x: '10px' }} />
      <ImagePortfolioMarquee
        images={images}
        translate={{ x: '-410px' }}
        speed={50}
      />
      <ImagePortfolioMarquee
        images={images}
        translate={{ x: '-840px' }}
        speed={25}
      />
    </>
  );
};

export default ImagePortfolioMarqueeGroup;
