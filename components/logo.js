import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default () => (
  <LogoWrapper className='logo'>
    <FontAwesomeIcon icon={faInstagram} className='logo__icon' />
    <h1 className='logo__title'>Instagram</h1>
  </LogoWrapper>
);

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1em;

  .logo__icon {
    color: var(--clr-gray);
  }

  .logo__title {
    margin-left: 1.5rem;
  }
`;
