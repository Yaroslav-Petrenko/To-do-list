import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ todoList, changeItem }) => {
  const elem = todoList.map(({ title, id, important, complete }) => {
    let classNames = '';
    if (important) classNames += ' important';
    if (complete) classNames += ' complete';

    return (
      <li
        className={classNames}
        key={id}
        id="to-do-item"
        onClick={(e) => changeItem(e, id)}
      >
        <TodoListItem
          title={title}
          id={id}
          complete={complete}
        />
      </li>
    );
  });

  return <ul className="ul-list">{elem}</ul>;
};

export default TodoList;
