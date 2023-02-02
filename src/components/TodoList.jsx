import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import { filteredTodosAndCountSelector } from '../store/todoSlice';

const TodoList = () => {
  const { filteredTodoList } = useSelector(filteredTodosAndCountSelector);

  return (
    <ul>
      {filteredTodoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;