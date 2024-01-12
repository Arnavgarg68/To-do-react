import React, { useState } from 'react'
// import './task.css'
// import Taskitem from './taskitem';
export default function Task(props) {
    const [newtask,setNewTask]=useState('');
    const [tasks,setTasks]=useState([]);
    const addtask=()=>{
        if(newtask.trim!==''){
            setTasks([...tasks,{ id: Date.now(), text: newtask, completed: false }]);
            setNewTask('')
        }
    }
    const updatetask=(taskId)=>{
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ));
    }
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
      }
  return (<>
    <div className="newtask">
      <input type="text" value={newtask} onChange={(e)=>setNewTask(e.target.value)} placeholder='add new task ..'/>
      <button onClick={addtask}>Add Task</button>
    </div>
    <div className="taskslist">
    <ul>
        {tasks.map(task=>{
            return(
            <li key={task.id} className="taskitem">
                <input type="checkbox" checked={task.completed} onClick={() => updatetask(task.id)}/>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                <button onClick={()=>deleteTask(task.id)}>Delete</button>
            </li>);
        })}
    </ul>
    </div>
    </>
  )
}
