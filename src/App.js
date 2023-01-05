import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import { GenerateTasks } from './components/generate-tasks';
import { tasks } from './storage/tasks';


// indexes of current tasks
let curTasks = [];
console.log('beforebefore', curTasks)


//indexes of completed tasks
let completedTasks = []; 

// build page
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        <TasksEmbed />
        </p>
        <p>
          <GenerateTasks />
        </p>
        
      </header>
    </div>
  );
}

// empty completed tasks array
const ResetTasks = () => {
  completedTasks = [];
  curTasks = [];
}

// length of completed tasks array
const NumberOfTasksComplete = () => {
  let numTasksCompleted = completedTasks.length
  return (<div>
    {numTasksCompleted}
  </div>
  )
}

// show all available tasks
const TasksEmbed = () => {
  const TaskDivs = () => {
    return (
      <div>
        <ul> {tasks.map(t => { // list element with all tasks
          return <li id="all-tasks">
            {t}
          </li>
          })}
        </ul>
    </div>)
  }

  return ( 
    <div>
      <h1> 
        All possible tasks: 
      </h1>
      <p>
        <TaskDivs />
      </p>
    </div>
  )
}



const CompletedTasksEmbed = () => {
  return (
    <div>
    
    </div>
  )
}


const showCurTasks = () => {

  return (
    <div>
      <p>

      </p>
      <p>

      </p>
    </div>
  )
}


// export function PickNewTask
// export let curTasks
export default App;
