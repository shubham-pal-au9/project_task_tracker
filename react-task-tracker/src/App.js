import{ useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)

  // fetch db. json data also use async await for api calling
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res .json()

      console.log(data)
    }
    fetchTasks()
  },[])
  const [tasks, setTasks] = useState([])
// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No tasks to display'}
    </div>
  );
}

export default App;
