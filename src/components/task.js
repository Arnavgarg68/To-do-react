import React, { useState } from 'react'
// import './task.css'
// import Taskitem from './taskitem';
export default function Task() {
    const [newtask, setNewTask] = useState('');
    const [taskCount, setTaskCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    const addtask = () => {
        if (newtask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newtask, completed: false }]);
            setNewTask('')
            setTaskCount(taskCount + 1)
        }
    }
    const keycheck = (ele) => {
        if (ele.code === 'Enter') {
            addtask()
        }
    }
    const updatetask = (taskId) => {
        // setTasks(tasks.map(task => 
        //     task.id === taskId ? { ...task, completed: !task.completed } : task
        //   ));
        tasks.forEach(function (task, index) {
            if (task.id === taskId) {
                const uptask = { ...task, completed: !task.completed };
                tasks[index] = uptask;
                if (!task.completed) {
                    setTaskCount(taskCount - 1);
                }
                else {
                    setTaskCount(taskCount + 1);
                }
                // task={...task, completed:!(task.completed)};
            }

        })
    }
    const deleteTask = (taskId) => {
        tasks.forEach(element => {
            if (element.id === taskId && !element.completed) {
                setTaskCount(taskCount - 1)
            }
        });
        setTasks(tasks.filter(task => task.id !== taskId));
    }
    return (<>
        <div className="newtask">
            <input type="text" value={newtask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => { keycheck(e) }} placeholder='add new task ..' />
            <button onClick={addtask}>Add Task</button>
        </div>
        <div className="taskscounter">Tasks remaining =&gt; {taskCount}</div>
        <div className="taskslist">
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id} className="taskitem">
                            <input type="checkbox" checked={task.completed} onChange={() => updatetask(task.id)} />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>);
                })}
            </ul>
        </div>
    </>
    )
}
