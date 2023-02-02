import styled from 'styled-components';

export default styled.button`
  background-color: green;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
  transition: 100ms;

  :hover {
    filter: brightness(1.2);
  }

  :active {
    filter: brightness(0.8);
  }
`;
