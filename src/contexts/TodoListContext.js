import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {

  const [todos, setTodos] = useState([
    {title: 'Plan the family trip', id: 1 , completed: true, subtasks: []},
		{title: 'Go shopping for dinner', id: 2 , completed: false, subtasks: []},
		{title: 'Go for a walk', id: 3, completed: false, subtasks: []}
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      subtasks: []
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompletion = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const addSubtask = (todoId, title) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        const newSubtask = {
          id: Date.now(),
          title,
          completed: false
        };
        return {
          ...todo,
          subtasks: [...todo.subtasks, newSubtask]
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const toggleSubtaskCompletion = (todoId, subtaskId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        const updatedSubtasks = todo.subtasks.map(subtask => {
          if (subtask.id === subtaskId) {
            return {
              ...subtask,
              completed: !subtask.completed
            };
          }
          return subtask;
        });

        return {
          ...todo,
          subtasks: updatedSubtasks
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };


	return(
		<TodoListContext.Provider value={{ todos, addTodo, toggleTodoCompletion, addSubtask, toggleSubtaskCompletion }} >
			{children}
		</TodoListContext.Provider>
	)
};

export default TodoListContextProvider;
