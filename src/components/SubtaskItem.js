import React from 'react';
const SubtaskItem = ({ subtask, toggleSubtaskCompletion }) => {
  const handleToggleSubtaskCompletion = () => {
    toggleSubtaskCompletion(subtask.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={subtask.completed}
        onChange={handleToggleSubtaskCompletion}
      />
      <span>{subtask.title}</span>
    </div>
  );
};

export default SubtaskItem;
