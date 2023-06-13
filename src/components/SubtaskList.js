import React from 'react';
import SubtaskItem from './SubtaskItem';
const SubtaskList = ({ subtasks, toggleSubtaskCompletion }) => {
  return (
    <div>
      {subtasks.map(subtask => (
        <SubtaskItem
          key={subtask.id}
          subtask={subtask}
          toggleSubtaskCompletion={toggleSubtaskCompletion}
        />
      ))}
    </div>
  );
};

export default SubtaskList;
