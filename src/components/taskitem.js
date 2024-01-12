import React from 'react'

export default function Taskitem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.task.completed} />
                <span>{props.task.text}</span>
    </div>
  )
}
