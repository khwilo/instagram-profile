import styled from 'styled-components';

export default () => (
  <FavoriteProfiles>
    <h3 className='title-text'>favorite profiles</h3>
    <Profiles>
      <img
        src='images/woman-smiling.jpg'
        alt=''
        className='profiles__picture'
      />
      <img
        src='images/woman-flexing.jpg'
        alt=''
        className='profiles__picture'
      />
      <img src='images/man-selfie.jpg' alt='' className='profiles__picture' />
      <img
        src='images/princess-portrait.jpg'
        alt=''
        className='profiles__picture'
      />
      <div className='profiles__picture view-more'>
        <p>+45</p>
      </div>
    </Profiles>
  </FavoriteProfiles>
);

const Profiles = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const FavoriteProfiles = styled.section`
  .profiles__picture {
    width: 18%;
    border-radius: 8px;
    object-fit: center;
  }

  .view-more {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: #343839;
    color: var(--clr-white);
  }
`;
