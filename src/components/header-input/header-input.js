import React, {useState} from 'react';
import './header-input.css';

const HeaderInput = ({ addItem }) => {
	
	const [inputValue, setInputValue] = useState('')

  return (
		<form onSubmit={(e) => {
			e.preventDefault()
			addItem(inputValue)
			setInputValue('')
		}}>
      <div className="input-group mb-3">
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Todo's name"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <button className="button-add-todo" type="submit" id="button-addon2">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
    </form>
  );
};

export default HeaderInput;
