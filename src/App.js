import { useState } from 'react';
import styles from './App.module.css';

  
function App() {
    // Add toDo and track toDos List
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    // Track if the task is done
  const [filter, setFilter] = useState("all"); 
    const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
      
    //implement the custom form when Submitted
      event.preventDefault();
      if (toDo === "") {
        return;
      }
    const newToDo = { text: toDo, done : false}
      setToDo("")
      setToDos((currentArray) => [newToDo, ...currentArray])
  };
  
  //when the task is Done
  const toggleDone = (index) => {
    setToDos((currentArray) =>
      currentArray.map((item, idx) =>
        idx == index ? { ...item, done: !item.done } : item))
  }
    ;
  
  //Adding filter function to classify Todo List
  const filterToDos = toDos.filter((item) => {
    if (filter === "all") return true;
    if (filter === "done") return item.done;
    if (filter === "ongoing") return !item.done;
    return true
  })
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>My To Dos ({toDos.filter((item) => !item.done).length} remaining)</h1>
        <h2>What needs to be done?</h2>
        
        
         <div>
          <button className={styles.filterButton}  onClick={() => setFilter("all")}>All Tasks</button>
          <button className={styles.filterButton} onClick={() => setFilter("done")}>Done</button>
          <button className={styles.filterButton} onClick={() => setFilter("ongoing")}>Ongoing Tasks</button>
          
        </div>
        
        <div>
      <form onSubmit={onSubmit}>
        
          
      <input className={styles.addButton}
        onChange={onChange}
        value={toDo}
        type='text'
          placeholder="Write your To do ..." >
          </input>
          
      <button className={styles.addButton}>Add To Do</button>
        </form>
        
          <ul>
            {filterToDos.map((item, index) => (
              <li key={index} className={item.done ? styles.done : ""}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleDone(index)} />
                {item.text}
              </li>
))}   
          </ul>
          
          </div>
    </div>
  );
}

export default App;
