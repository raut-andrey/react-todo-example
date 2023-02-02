import React from 'react';
import { useDispatch } from 'react-redux';

import StyledCreationBlock from './CreationBlock.styles';
import Button from '../Button';
import Input from '../Input';

import { todoActions } from '../../store/todoSlice';

const CreationBlock = () => {
  const [newTodoText, setNewTodoText] = React.useState('');

  const dispatch = useDispatch();

  const createTodo = () => {
    const title = newTodoText.trim();

    if (!title) {
      return;
    }

    dispatch(todoActions.addTodo(title));
    setNewTodoText('');
  };

  return (
    <StyledCreationBlock>
      <Button onClick={() => dispatch(todoActions.toggleAllTodos())}>
        V
      </Button>

      <Input
        className="new-todo-input"
        autoFocus
        value={newTodoText}
        onChange={(ev) => setNewTodoText(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            createTodo();
          }
        }}
      />

      <Button onClick={createTodo}>
        +
      </Button>
    </StyledCreationBlock>
  );
};

export default CreationBlock;
