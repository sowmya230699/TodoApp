import React, { createContext, useState, useContext, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const timers = tasks
      .filter(task => task.completed && !task.movedToHistory)
      .map(task => {
        const timer = setTimeout(() => {
          setHistory(prevHistory => [...prevHistory, { ...task, movedToHistory: true }]);
          setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
        }, 5 * 60 * 1000);
        return { id: task.id, timer };
      });

    return () => timers.forEach(({ timer }) => clearTimeout(timer));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id, isHistory) => {
    if (isHistory) {
      setHistory(history.filter(task => task.id !== id));
    } else {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleComplete = (id, isHistory) => {
    if (isHistory) {
      const task = history.find(task => task.id === id);
      setHistory(history.filter(task => task.id !== id));
      setTasks([...tasks, { ...task, completed: false }]);
    } else {
      setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    }
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <TodoContext.Provider value={{ tasks, history, addTask, deleteTask, toggleComplete, editTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);