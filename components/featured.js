import styled from 'styled-components';

import SectionTop from './sectionTop';

export default () => (
  <Featured className='featured'>
    <SectionTop title='Featured Stories' choice='All Time' />
    <FeaturedImages>
      <FeaturedImage className='featured-image'>
        <img src='images/boat.jpg' alt='' />
        <p className='caption'>short mems</p>
      </FeaturedImage>
      <FeaturedImage className='featured-image'>
        <img src='images/girl-summer.jpg' alt='' />
        <p className='caption'>summer echoes</p>
      </FeaturedImage>
      <FeaturedImage className='featured-image'>
        <img src='images/horse-rider.jpg' alt='' />
        <p className='caption'>rider's story</p>
      </FeaturedImage>
      <FeaturedImage className='featured-image'>
        <img src='images/bikini-girl.jpg' alt='' />
        <p className='caption'>love sample</p>
      </FeaturedImage>
      <FeaturedImage className='featured-image'>
        <img src='images/waterfall.jpg' alt='' />
        <p className='caption'>paradise city</p>
      </FeaturedImage>
    </FeaturedImages>
  </Featured>
);

const Featured = styled.article`
  padding: 1.5em 1.5em 1.5em 2em;
`;

const FeaturedImages = styled.div`
  display: flex;
  margin-top: 2rem;
  .featured-image + .featured-image {
    margin-left: 1.8rem;
  }
`;

const FeaturedImage = styled.div`
  position: relative;
  background-color: gray;
  padding: 0;
  margin: 0;
  display: flex;
  width: 16%;
  opacity: 0.65;

  img {
    object-fit: cover;
    border-radius: 6px;
  }

  .caption {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: var(--clr-white);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
`;
