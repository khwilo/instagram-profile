import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import Person from './person';
import PersonDetails from './personDetails';

export default () => {
  return (
    <Explore className='section section--explore'>
      <TopNav>
        <FontAwesomeIcon icon={faArrowLeft} className='topNav__icon' />
        <p className='topNav__title'>back to people</p>
      </TopNav>
      <Person />
      <PersonDetails />
    </Explore>
  );
};

const Explore = styled.div`
  padding: 1em 2em;
  border-left: 1px solid var(--clr-border);
  border-right: 1px solid var(--clr-border);
`;

const TopNav = styled.div`
  display: flex;
  align-items: center;
  .topNav__icon {
    color: var(--clr-gray);
  }

  .topNav__title {
    margin-left: 1rem;
    font-weight: 700;
  }
`;
