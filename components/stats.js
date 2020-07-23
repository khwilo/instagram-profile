import styled from 'styled-components';

export default () => (
  <StatsWrapper className='stats'>
    <div className='stats__post'>
      <p className='stats__count text-bold'>784</p>
      <p className='stats__title text-faint'>posts</p>
    </div>

    <div className='stats__post'>
      <p className='stats__count text-bold'>21.4k</p>
      <p className='stats__title text-faint'>followers</p>
    </div>

    <div className='stats__post text-bold'>
      <p className='stats__count'>150</p>
      <p className='stats__title text-faint'>following</p>
    </div>
  </StatsWrapper>
);

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  text-align: center;
  margin: 0 1em;

  .stats__title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;
