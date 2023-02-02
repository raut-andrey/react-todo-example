import { createSlice, createSelector } from '@reduxjs/toolkit';
import * as uuid from 'uuid';

import { FILTER_VALUES } from '../utils/constants';
import storage from '../utils/storage';

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todoList: storage.todoList.get(),
    todoFilter: storage.todoFilter.get(),
  },
  reducers: {
    setFilter: (store, { payload }) => {
      store.todoFilter = payload;
    },

    addTodo: (store, { payload }) => {
      const newTodo = {
        id: uuid.v4(),
        title: payload,
        isActive: true,
      };

      store.todoList.push(newTodo);
    },

    editTodo: (store, { payload }) => {
      const todoIndex = store.todoList.findIndex((todo) => todo.id === payload.id);
      store.todoList[todoIndex] = {
        ...store.todoList[todoIndex],
        ...payload.data,
      };
    },

    deleteItem: (store, { payload }) => {
      const todoIndex = store.todoList.findIndex((todo) => todo.id === payload);
      store.todoList.splice(todoIndex, 1);
    },

    clearCompleted: (store) => {
      store.todoList = store.todoList.filter((todo) => todo.isActive);
    },

    toggleAllTodos: (store) => {
      const activeTask = store.todoList.find((todo) => todo.isActive);
      const targetIsActiveValue = !activeTask;
      store.todoList = store.todoList.map((todo) => ({
        ...todo,
        isActive: targetIsActiveValue,
      }));
    },
  },
});

export const filteredTodosAndCountSelector = createSelector(
  ({ todo }) => todo.todoList,
  ({ todo }) => todo.todoFilter,
  (todoList, todoFilter) => {
    let activeTodosCount = 0;
    const filteredTodoList = todoList.filter((todo) => {
      if (todo.isActive) {
        activeTodosCount++;
      }

      if (todoFilter === FILTER_VALUES.all) {
        return true;
      }

      const targetIsActiveValue = todoFilter === FILTER_VALUES.active;
      return todo.isActive === targetIsActiveValue;
    });

    return {
      filteredTodoList,
      activeTodosCount,
    }
  }
);

export const todoActions = todoSlice.actions;

export default todoSlice;
