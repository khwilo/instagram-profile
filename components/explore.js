import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import Person from './person';
import PersonDetails from './personDetails';

export default () => {
  return (
    <Explore className='section section--explore'>
      <BackNav>
        <FontAwesomeIcon icon={faArrowLeft} className='backNav__icon' />
        <p className='backNav__title'>back to people</p>
      </BackNav>
      <Person />
      <PersonDetails />
    </Explore>
  );
};

const Explore = styled.div`
  padding: 1em 2em 1.5em;
  border-left: 1px solid var(--clr-border);
  border-right: 1px solid var(--clr-border);
`;

const BackNav = styled.div`
  display: flex;
  align-items: center;
  .backNav__icon {
    color: var(--clr-gray);
  }

  .backNav__title {
    margin-left: 1rem;
    font-weight: 700;
  }
`;
