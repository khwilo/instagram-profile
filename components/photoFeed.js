import styled from 'styled-components';

import SectionTop from './sectionTop';

export default () => (
  <PhotoFeed>
    <SectionTop title='Photo Feed' choice='For 2018' />
    <PhotoFeedImages>
      <img src='images/cabin.jpg' alt='' />
      <img src='images/ship.jpg' alt='' />
      <img src='images/couple-ocean.jpg' alt='' />
      <img src='images/forest-house.jpg' alt='' />
      <img src='images/man-holding-sheep.jpg' alt='' />
      <img src='images/mountain.jpg' alt='' />
    </PhotoFeedImages>
  </PhotoFeed>
);

const PhotoFeed = styled.article`
  margin-top: 4rem;
  padding: 1.5em 1.5em 1.5em 2em;
`;

const PhotoFeedImages = styled.div`
  padding-right: 1.5em;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2em;

  img {
    width: 300px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
