import React from 'react';
import TodoList from './TodoList';

import TodoListContextProvider from '../contexts/TodoListContext';

const Todo = () => {
	return(
		<div>
					<TodoListContextProvider>
            <TodoList />
						</TodoListContextProvider>
		</div>
	)
}

export default Todo;
