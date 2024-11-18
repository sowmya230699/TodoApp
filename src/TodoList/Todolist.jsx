import React, { useState } from 'react';
import { useTodo } from '../Context';
import "./Todolist.css"
const TodoList = () => {
  const { tasks, addTask, deleteTask, toggleComplete, editTask } = useTodo();
  const [newTask, setNewTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    addTask(newTask);
    setNewTask('');
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    editTask(editId, editText);
    setEditId(null);
    setEditText('');
  };

  return (
    <div >
      <input className='inputBox'
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button  onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editId === task.id ? (
              <>
                <input className="editBox"
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                  {task.text}
                </span>
                <button  onClick={() => handleEdit(task.id, task.text)}><i className='fa fa-pencil'></i></button>
                <input className="checkBox" type='checkbox' onChange={()=>toggleComplete(task.id,false)} />
                <button onClick={() => deleteTask(task.id, false)}><i className='fa fa-trash'></i></button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;