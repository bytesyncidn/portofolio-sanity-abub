import ImagePortfolioMarquee from '../ImagePortfolioMarquee';

const images = new Array(9).fill('https://cdn.sanity.io/images/d8cd0qwt/production/0c6d3e1e64ca2b965073c4c030dc0f4159c6f34c-474x592.jpg');

const ImagePortfolioMarqueeGroup = () => {
  return (
    <>
      <ImagePortfolioMarquee images={images} translate={{ x: '10px' }} />
      <ImagePortfolioMarquee
        images={images}
        translate={{ x: '-410px' }}
        speed={100}
      />
      <ImagePortfolioMarquee
        images={images}
        translate={{ x: '-840px' }}
        speed={75}
      />
    </>
  );
};

export default ImagePortfolioMarqueeGroup;
