import Header from './components/Header';
import Tasks from './components/Tasks';
import{ useState } from 'react';
import AddTask from './components/AddTask';
const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'Doctor Appointment',
            day:'Mar 2nd at 3:41pm',
            reminder:true
        },
        {
            id:2,
            text:'Meeting at the college',
            day:'Jan 1st at 2:20pm',
            reminder:true
        },
        {
            id:3,
            text:'Clothes shopping',
            day:'Feb 5th at 1:30am',
            reminder:true
        }
    ]
)
// Add Task
const addTask = (task) => {
  console.log(task);
}  

// Delete Task
const deleteTask = (id) => {
  //console.log('delete',id)
  setTasks(tasks.filter((task) => task.id !== id) )
}

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    
    ))
  }


  return (   
    <div className="container"> 
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No tasks to display'}
    </div>
  );
}

export default App;
