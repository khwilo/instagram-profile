import styled from 'styled-components';

import FeaturedStories from './featured';
import TopNav from './topNav';

export default () => {
  return (
    <Main className='main flex-col'>
      <TopNav />
      <section className='main__content flex-col'>
        <FeaturedStories />
        <article className='article article--photo-feed'>photo feed</article>
      </section>
    </Main>
  );
};

const Main = styled.main`
  padding: 1em 0 1.5em;
`;
