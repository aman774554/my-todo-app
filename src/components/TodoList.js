import React, { useContext } from 'react'
import { NavLink  } from 'react-router-dom';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './bootstrap.css';
import Background from '../images/man.jpg';
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
  const {todos, addTodo, toggleTodoCompletion, addSubtask, toggleSubtaskCompletion} = useContext(TodoListContext);

  const addTodocopy = (title) => {
		addTodo(title);

  };

  const toggleTodoCompletioncopy = (todoId) => {
		toggleTodoCompletion(todoId);

  };

  const addSubtaskcopy = (todoId, title) => {
		addSubtask(todoId, title);

  };

  const toggleSubtaskCompletioncopy = (todoId, subtaskId) => {
		toggleSubtaskCompletion(todoId, subtaskId);

  };

  return (

    <div className="img js-fullheight" style={{backgroundImage: `url(${Background })` , height:"100vh"}}>
    <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-2">
              <h2 className="heading-section">My Todo List</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h6 className="mb-4 text-center">--Welcome Admin--</h6>
                <div className="text-center">
                  <TodoForm addTodo={addTodocopy} />
                    {todos.map(todo => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodoCompletion={toggleTodoCompletioncopy}
                        addSubtask={addSubtaskcopy}
                        toggleSubtaskCompletion={toggleSubtaskCompletioncopy}
                          />
                        ))}
                        </div>
                        <div className="social d-flex text-center">
          	          	<NavLink to="/" className="form-control btn submit p-3 m-5 bg-dark ">Logout</NavLink>
          	          </div>
              </div>
            </div>
          </div>
        </div>
  </section>

    </div>
  );
};

export default TodoList;
