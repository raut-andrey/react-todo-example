import styled from 'styled-components';

export default styled.footer`
  display: flex;
  gap: 20px;

  .active-todos-counter {
    white-space: nowrap;
  }

  .filter-buttons-container {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }

  .filter-button--active {
    background-color: #003a00;
    box-shadow: 0 0 0 1px green;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;

    & > * {
      width: 100%;
    }

    .active-todos-counter {
      text-align: center;
    }

    .filter-buttons-container {
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
