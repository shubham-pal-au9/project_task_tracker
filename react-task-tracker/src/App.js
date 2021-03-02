import Header from './components/Header';
import Tasks from './components/Tasks';
import{ useState } from 'react';
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

// Delete Task
const deleteTask = (id) => {
  //console.log('delete',id)
  setTasks(tasks.filter((task) => task.id !== id) )
}

  return (   
    <div className="container"> 
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
