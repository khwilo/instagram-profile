import styled from 'styled-components';

import FeaturedStories from './featured';
import PhotoFeed from './photoFeed';
import TopNav from './topNav';

export default () => {
  return (
    <Main className='main flex-col'>
      <TopNav />
      <section className='main__content flex-col'>
        <FeaturedStories />
        <PhotoFeed />
      </section>
    </Main>
  );
};

const Main = styled.main`
  padding: 1em 0 1.5em;
`;
