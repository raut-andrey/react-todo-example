import { FILTER_VALUES } from './constants'

class StoreItem {
  constructor(name, defaultValue) {
    this.name = name;
    this.defaultValue = defaultValue;
  }

  get = () => {
    try {
      const storedValue = localStorage.getItem(this.name);
      const parsedValue = JSON.parse(storedValue);
      return parsedValue || this.defaultValue;
    } catch {
      return this.defaultValue
    }
  };

  set = (newValue) => {
    const stringifyedValue = JSON.stringify(newValue);
    localStorage.setItem(this.name, stringifyedValue);
  };

  remove = () => {
    localStorage.removeItem(this.name);
  };
}

const storage = {
  todoList: new StoreItem('todo-list', []),
  todoFilter: new StoreItem('todo-filter', FILTER_VALUES.all),
};

export default storage;
