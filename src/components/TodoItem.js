import React, { useState } from 'react';
import SubtaskList from './SubtaskList';
const TodoItem = ({
  todo,
  toggleTodoCompletion,
  addSubtask,
  toggleSubtaskCompletion
}) => {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [subtaskTitle, setSubtaskTitle] = useState('');

  const handleToggleSubtasks = () => {
    setShowSubtasks(!showSubtasks);
  };

  const handleToggleTodoCompletion = () => {
    toggleTodoCompletion(todo.id);
  };

  const handleAddSubtask = (e) => {
    e.preventDefault();
    if (subtaskTitle) {
      addSubtask(todo.id, subtaskTitle);
      setSubtaskTitle('');
    }
  };

  const handleToggleSubtaskCompletion = (subtaskId) => {
    toggleSubtaskCompletion(todo.id, subtaskId);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleTodoCompletion}
        />
        <span>{todo.title}</span>
        <button className="btn btn-dark m-1 rounded p-1" onClick={handleToggleSubtasks}>
          {showSubtasks ? '-' : '+'}
        </button>
      </div>
      {showSubtasks && (
        <div className="login-wrap p-0 text-center" style={{ marginLeft: '20px' }}>
          <form onSubmit={handleAddSubtask}>
            <input
              type="text"
              value={subtaskTitle}
              onChange={(e) => setSubtaskTitle(e.target.value)}
              placeholder="Add subtask"
            />
            <button type="submit" className="btn btn-dark rounded ml-2">Add</button>
          </form>
          <SubtaskList
            subtasks={todo.subtasks}
            toggleSubtaskCompletion={handleToggleSubtaskCompletion}
          />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
