import React from 'react';
import { useTodo } from '../Context';

const History = () => {
  const { history, deleteTask, toggleComplete } = useTodo();

  return (
    <div>
      <ul>
        {history.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <input className="checkBox" type='checkbox'  onChange={()=>toggleComplete(task.id,true)} />
            <button onClick={() => deleteTask(task.id, true)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;