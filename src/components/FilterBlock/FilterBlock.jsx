import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import StyledFilterBlock from './FilterBlock.styles';
import Button from '../Button';

import { filteredTodosAndCountSelector, todoActions } from '../../store/todoSlice';
import { FILTER_VALUES } from '../../utils/constants';

const FilterBlock = () => {
  const dispatch = useDispatch();
  const { activeTodosCount } = useSelector(filteredTodosAndCountSelector);
  const todoListCount = useSelector(({ todo }) => todo.todoList.length);
  const todoFilter = useSelector(({ todo }) => todo.todoFilter);

  if (!todoListCount) {
    return null;
  }

  return (
    <StyledFilterBlock>
      <b className="active-todos-counter">
        {`${activeTodosCount} item${activeTodosCount > 1 ? 's' : ''} active`}
      </b>

      <div className="filter-buttons-container">
        {Object.values(FILTER_VALUES).map((filter) => (
          <Button
            key={filter}
            onClick={() => dispatch(todoActions.setFilter(filter))}
            className={classnames({
              'filter-button--active': filter === todoFilter,
            })}
          >
            {filter}
          </Button>
        ))}
      </div>

      <Button onClick={() => dispatch(todoActions.clearCompleted())}>
        ClearCompleted
      </Button>
    </StyledFilterBlock>
  );
};

export default FilterBlock;
