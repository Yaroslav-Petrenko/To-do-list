import React, { Fragment } from 'react' 
import './app-header.css'

import HeaderInput from '../header-input/header-input'

const AppHeader = ({addItem}) => {
	return (
    <Fragment>
      <h1>Todo list</h1>
      <HeaderInput addItem={addItem}/>
    </Fragment>
  );
}

export default AppHeader;
