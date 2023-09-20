import React, { Fragment} from 'react';

const TodoListItem = ({ title, deleteItem, id }) => {
  return (
    <Fragment>
      {title}
      <i
        id="fa-times"
				// onClick={(e) => {
				// 	e.stopPropagation();
        //   e.defaultPrevented()
        //   deleteItem(id)
        // }
				// } 
        className="fas fa-times"
      ></i>
      <i
        id="fa-exclamation"
        // onClick={(e) => changeProperty(e, id)}
        className="fas fa-exclamation"
      ></i>
    </Fragment>
  );
};

export default TodoListItem;
