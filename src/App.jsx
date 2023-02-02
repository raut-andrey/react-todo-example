import React from 'react';
import { useSelector } from 'react-redux';

import TodoContainer from './components/TodoContainer';
import CreationBlock from './components/CreationBlock';
import TodoList from './components/TodoList';
import FilterBlock from './components/FilterBlock';

import storage from './utils/storage';

const App = () => {
  const todoList = useSelector(({ todo }) => todo.todoList);
  const todoFilter = useSelector(({ todo }) => todo.todoFilter);

  React.useEffect(() => {
    storage.todoList.set(todoList);
  }, [todoList]);

  React.useEffect(() => {
    storage.todoFilter.set(todoFilter);
  }, [todoFilter]);

  return (
    <TodoContainer>
      <CreationBlock />

      <TodoList />

      <FilterBlock />
    </TodoContainer>
  );
};

export default App;
