import { faSearch, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default () => (
  <TopNav>
    <SearchBar className='main__search'>
      <FontAwesomeIcon icon={faSearch} className='icon icon--search' />
      <input
        type='text'
        id='search'
        name='search'
        placeholder='search'
        aria-label='search'
      />
    </SearchBar>
    <FontAwesomeIcon icon={faBell} className='icon icon--notification' />
    <FontAwesomeIcon icon={faBars} className='icon icon--bars' />
  </TopNav>
);

const TopNav = styled.div`
  padding: 0 1.5em 1em 2em;
  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--clr-border);

  .icon--notification {
    margin-left: auto;
  }

  .icon--bars {
    margin-left: 1.5rem;
  }
`;

const SearchBar = styled.div`
  position: relative;

  #search {
    padding: 0.5em 0;
    border: 1px solid #f5f5f5;
    border-radius: 20px;
    width: 400px;
    background-color: #f5f5f5;
  }

  #search::placeholder {
    transform: translateX(30px);
    text-transform: capitalize;
    color: var(--clr-black);
    font-weight: 700;
  }

  .icon--search {
    position: absolute;
    top: 8px;
    margin-left: 0.5rem;
  }
`;
