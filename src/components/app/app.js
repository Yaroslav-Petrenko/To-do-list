import React, { useState, useEffect } from 'react';
import './app.css';
import AppHeader from '../header/app-header';
import TodoList from '../todo-list/todo-list';
import { bounceEaseOut, animate } from './animation';

let itemId = 100;

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'Зайти в магазин за продуктами', complete: true, important: false },
		{ id: 2, title: 'Подготовиться к собеседованию', complete: false, important: false },
		{ id: 3, title: 'Покормить кота', complete: false, important: false },
		{ id: 4, title: 'Заняться самообучением', complete: false, important: false },
		{ id: 5, title: 'Покормить себя', complete: false, important: false },
		{ id: 6, title: 'Найти темную материю', complete: false, important: false },
	]);

	const addItem = (title) => {
		const newItemId = ++itemId;
		setTodoList((prev) => {
			return [
				...prev,
				{ id: newItemId, title, complete: false, important: false },
			];
		});
	};

	const toggleProperty = (id, property) => {
		const idx = todoList.findIndex((item) => item.id === id);
		const newItem = {
			...todoList[idx],
			[property]: !todoList[idx][property],
		};
		setTodoList([
			...todoList.slice(0, idx),
			newItem,
			...todoList.slice(idx + 1),
		]);
	};

	const deleteItem = (id) => {
		console.log('deleteItem', id);
		const idx = todoList.findIndex((item) => item.id === id);
		setTodoList([...todoList.slice(0, idx), ...todoList.slice(idx + 1)]);
	};

	const changeItem = (e, id) => {
		switch (e.target.id) {
			case 'to-do-item':
				toggleProperty(id, 'complete');
				break;

			case 'fa-exclamation':
				toggleProperty(id, 'important');
				break;

			case 'fa-times':
				deleteItem(id);
				break;
		}
	};

	const [styles, setStyles] = useState({
		margin: '',
	});

	useEffect(() => {
		animation();
	}, []);

	const animation = () => {
		animate({
			duration: 1000,
			timing: bounceEaseOut,
			draw: function (progress) {
				setStyles(() => {
					return {
						margin: progress * 565 - 445 + 'px auto',
					};
				});
			},
		});
	};

	return (
		<div style={styles} className="App container">
			<AppHeader addItem={addItem} />
			<TodoList
				todoList={todoList}
				changeItem={changeItem}
			/>
		</div>
	);
}

export default App;
