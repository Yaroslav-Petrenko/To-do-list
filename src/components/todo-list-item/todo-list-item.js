import React, { Fragment} from 'react';

const TodoListItem = ({ title }) => {
  return (
    <Fragment>
      {title}
      <i
        id="fa-times"
        className="fas fa-times"
      ></i>
      <i
        id="fa-exclamation"
        className="fas fa-exclamation"
      ></i>
    </Fragment>
  );
};

export default TodoListItem;
