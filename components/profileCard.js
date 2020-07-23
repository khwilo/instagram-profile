import styled from 'styled-components';

export default () => (
  <Profile className='profile'>
    <img
      src='images/profile_picture.jpg'
      alt='profile picture'
      className='profile__picture'
    />
    <div className='profile__contents'>
      <p className='profile__name text-bold'>Debby Williams</p>
      <small className='profile__location text-faint'>New York, USA</small>
    </div>
  </Profile>
);

const Profile = styled.section`
  text-align: center;
  padding: 5em 0 2em;

  .profile__picture {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #e38a8c;
    padding: 0.2em;
  }
`;
