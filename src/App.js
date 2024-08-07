import { useState } from 'react';
import styles from './App.module.css';
  
  function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
      event.preventDefault();
      if (toDo === "") {
        return;
      }
      setToDo("")
      setToDos((currentArray) => [toDo, ...currentArray])
    };
    return (
      <div>
        <h1 className={styles.title}>My To Dos ({toDos.length})</h1>
        <form className={styles.types}  onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={toDo}
        type='text'
          placeholder="Write your To do ..." >
        </input>
      <button>Add To Do</button>
        </form>
        <ul>
          {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        
    </div>
  );
}

export default App;
