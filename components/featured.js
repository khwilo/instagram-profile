import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default () => (
  <Featured className='featured'>
    <div className='featured__top'>
      <h2 className='featured__title'>Featured Stories</h2>
      <div className='featured__select'>
        <p className='featured__choice'>All Time</p>
        <FontAwesomeIcon icon={faAngleDown} className='icon icon--down' />
      </div>
    </div>
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

  .featured__top,
  .featured__select {
    display: flex;
    align-items: center;
  }

  .featured__title {
    text-transform: capitalize;
  }

  .featured__select {
    padding: 0.2em 0.6em;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin: 0 2rem 0 auto;
  }

  .icon--down {
    margin-left: 1rem;
  }
`;

const FeaturedImages = styled.div`
  display: flex;
  margin-top: 2rem;
  .featured-image + .featured-image {
    margin-left: 1.8rem;
  }
`;

const FeaturedImage = styled.div`
  background-color: gray;
  padding: 0;
  margin: 0;
  display: flex;
  width: 16%;

  position: relative;

  img {
    opacity: 0.5;
    object-fit: cover;
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
