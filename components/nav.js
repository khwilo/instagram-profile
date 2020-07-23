import {
  faBell,
  faChartArea,
  faHome,
  faPaperPlane,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default () => (
  <NavWrapper className='nav'>
    <ul className='nav__list flow'>
      <NavItem>
        <FontAwesomeIcon icon={faHome} />
        <a href='#' className='nav__link'>
          Feed
        </a>
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faSearch} />
        <a href='#' className='nav__link'>
          Explore
        </a>
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faBell} />
        <a href='#' className='nav__link'>
          Notification
        </a>
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faPaperPlane} />
        <a href='#' className='nav__link'>
          Direct
        </a>
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faChartArea} />
        <a href='#' className='nav__link'>
          Stats
        </a>
      </NavItem>
    </ul>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  color: var(--clr-gray);
  padding: 2em 0;
`;

const NavItem = styled.li`
  padding: 0 1em;
  &:hover {
    border-left: 3px solid #e75361;
  }

  .nav__link {
    margin-left: 1rem;
  }

  .nav__link:hover {
    color: var(--clr-black);
    font-weight: 700;
  }
`;
