import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default () => (
  <Person className='person'>
    <img
      src='images/girl_in_jungle.jpg'
      alt='girl in a jungle'
      className='person__image'
    />
    <div className='person__title'>
      <h2 className='person__name'>Karry Woodson</h2>
      <FontAwesomeIcon icon={faCertificate} className='verification-badge' />
    </div>
    <Stats className='stats'>
      <p className='stats__photos'>899 photos</p>
      <p className='stats__followers'>16k followers</p>
    </Stats>
    <div className='person__bio text-faint'>
      Leverage agile frameworks to provide a robust synopsis for high level of
      the overviews. Iterative approaches to corporate strategy foster
      collaborative thinking to further the overall value proposition. So let
      that be the most important event in your whole life.
    </div>
  </Person>
);

const Person = styled.section`
  padding: 2em 0 1.5em;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--clr-border);

  .person__image {
    border-radius: 15px;
    height: 250px;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .person__title {
    margin: 1rem 0 0.5rem;
    display: flex;
    align-items: center;
  }

  .verification-badge {
    margin-left: 0.5rem;
    color: #e4535e;
  }
`;

const Stats = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 2rem;
  .stats__followers {
    margin-left: 1rem;
  }
`;
