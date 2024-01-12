import React, { useState } from 'react'
import './task.css'
export default function Task(props) {
    const [newtask,setNewTask]=useState('')
  return (
    <div className="newtask">
      <input type="text" value={newtask} onChange={(e)=>setNewTask(e.target.value)} placeholder='add new task ..'/>
      <button>Add Task</button>
    </div>
  )
}
