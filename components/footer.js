import { faCog, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default () => (
  <Footer>
    <div className='icon'>
      <FontAwesomeIcon icon={faCog} />
    </div>
    <div className='icon'>
      <FontAwesomeIcon icon={faUserFriends} />
    </div>
  </Footer>
);

const Footer = styled.footer`
  display: flex;
  padding: 0 1em;
  margin-top: 5rem;

  .icon {
    background-color: #f5f5f5;
    color: var(--clr-gray);
    flex-basis: 30%;

    display: flex;
    justify-content: center;

    padding: 1em 2em;
    border-radius: 10px;
  }

  .icon + .icon {
    margin-left: 1rem;
  }
`;
