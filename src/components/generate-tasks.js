
import { tasks } from "../storage/tasks";

let curTasks = [];
let completedTasks = []; 


export const GenerateTasks = () => {
  

  // helper func, pick a new random task
  const PickNewTask = () => {
    
    let taskID;

    if (tasks.length === completedTasks.length || tasks.length === curTasks.length) { // early return if there are no more available tasks
      return <li>No new tasks</li>
    } else {
      do {
        taskID = Math.floor(Math.random()*tasks.length); // randomly assign a new task ID
      if (!curTasks.includes(taskID)) {
        curTasks.unshift(taskID);
        return <li>{tasks[taskID]} | ID: {taskID}</li>
      }
    } while (curTasks.includes(taskID))
      }
    }


  return (
    <div>
      <PickNewTask />
      <PickNewTask />
      <PickNewTask />
    </div>
  )
}