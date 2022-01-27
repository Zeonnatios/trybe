import React, {useState} from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTaskList([...taskList, task])
    setTask("")
  }

  const handleChange = (e) => {
    const {value} = e.target;
    setTask(value)
  }

  return(
    <>
      <div className="app">
        <label htmlFor="task" data-testid="task-label">
          Task:
        </label>
          <input 
            data-testid="task-input"
            type="text" 
            name="task" 
            id="task"
            value = {task}
            onChange={handleChange}
           />
        <input 
            data-testid="task-input-button"
            type="button" 
            value="Add Todo"
            onClick={addTask}
          />
        <div>
          <h2 data-testid="task-title">Todos</h2>
            <ul data-testid="task-list">
              {taskList.length > 0 && (
                taskList.map((task, index) => <li data-testid={`task-element`} key={index}>{task}</li>)
                )
              }
            </ul>
        </div>

      </div>
    </>
  )
}

export default App;
