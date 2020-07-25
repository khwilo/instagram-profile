import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export default ({ title, choice }) => (
  <SectionTop>
    <h2 className='title'>{title}</h2>
    <div className='select flex-center'>
      <p className='choice'>{choice}</p>
      <FontAwesomeIcon icon={faAngleDown} className='icon icon--down' />
    </div>
  </SectionTop>
);

const SectionTop = styled.div`
  display: flex;
  align-items: center;

  .title {
    text-transform: capitalize;
  }

  .select {
    padding: 0.2em 0.6em;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin: 0 2rem 0 auto;
  }

  .icon--down {
    margin-left: 1rem;
  }
`;
