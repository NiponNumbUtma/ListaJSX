import React, { useRef, useState } from 'react';
import Checkboxes from "../components/Checkbox";

function Todo() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]); 
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editingText, setEditingText] = useState(""); 

  const addTask = () => {
    const taskText = inputRef.current.value;
    if (taskText) {
      setTasks([...tasks, taskText]);
      inputRef.current.value = "";
    }
  };

  const [checked, setChecked]=useState(false)

    const handleChecked = () => {
        setChecked(!checked)
    }

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editingText;
    setTasks(updatedTasks);
    setEditingIndex(null); 
  };

  return (
    <div>
      <h1 style={{color:"yellow"}}>Lista por hacer</h1>
      <div className="container" style={{ display: "flex", gap: "1rem"}}>
        <input type="text" ref={inputRef} />
        <button onClick={addTask} style={{color:"white"}}>Agregar</button>
      </div>
      <div>
        <h2 style={{color:"yellow"}}>Lista</h2>
        <ul>
          
          {tasks.map((task, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  
                  <button onClick={() => saveTask(index)} style={{color:"blue"}}>Guardar</button>
                </>
              ) : (
                <>
                <Checkboxes></Checkboxes>
                {task}
                  <button onClick={() => deleteTask(index)} style={{color:"red"}}>Eliminar</button>
                  <button onClick={() => editTask(index)} style={{color:"aliceblue"}}>Actualizar</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
