import styled from 'styled-components';

export default styled.li`
  display: flex;
  gap: 20px;
  cursor: pointer;
  transition: 100ms;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover {
    box-shadow: 0 0 6px 2px white;
  }

  .todo-title {
    padding: 6px 0;
  }

  .todo-title,
  .todo-title-input {
    width: 100%;
  }

  .todo-toggle-btn {
    font-weight: bold;

    &--completed {
      background-color: orange;
      color: black;
    }
  }

  .todo-delete-btn {
    background-color: red;
  }
`;
