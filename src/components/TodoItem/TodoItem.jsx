import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import StyledTodoItem from './TodoItem.styles';
import Button from '../Button';
import Input from '../Input';

import { todoActions } from '../../store/todoSlice';

const TodoItem = (props) => {
  const [editedTitle, setEditedTitle] = React.useState(props.todo.title);
  const [isEditing, setIsEditing] = React.useState(false);

  const dispatch = useDispatch();

  const toggleStatus = () => {
    dispatch(todoActions.editTodo({
      id: props.todo.id,
      data: {
        isActive: !props.todo.isActive,
      },
    }));
  };

  const deleteTodo = () => {
    dispatch(todoActions.deleteItem(props.todo.id));
  };

  const cancelTodoEditing = () => {
    setIsEditing(false);
    setEditedTitle(props.todo.title);
  };

  const changeTodoTitle = () => {
    const newtitle = editedTitle.trim();
    if (newtitle) {
      dispatch(todoActions.editTodo({
        id: props.todo.id,
        data: {
          title: newtitle,
        },
      }));
    } else {
      setEditedTitle(props.todo.title);
    }
    setIsEditing(false);
  };

  return (
    <StyledTodoItem>
      <Button
        onClick={toggleStatus}
        className={classnames('todo-toggle-btn', {
          'todo-toggle-btn--completed': !props.todo.isActive,
        })}
      >
        {props.todo.isActive ? '⨀' : '⨂'}
      </Button>

      {isEditing
        ? (
          <Input
            className="todo-title-input"
            autoFocus
            value={editedTitle}
            onChange={(ev) => setEditedTitle(ev.target.value)}
            onBlur={changeTodoTitle}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                changeTodoTitle();
              } else if (ev.key === 'Escape') {
                cancelTodoEditing();
              }
            }}
          />
        ) : (
          <p className="todo-title" onDoubleClick={() => setIsEditing(true)}>
            {props.todo.title}
          </p>
        )
      }

      <Button
        onClick={deleteTodo}
        className="todo-delete-btn"
      >
        x
      </Button>
    </StyledTodoItem >
  );
};

export default TodoItem;
