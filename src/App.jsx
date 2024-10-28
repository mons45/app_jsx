// import React from "react";
// import Product from "./Product";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   const products = [
//     {
//       id: 1,
//       title: 'PC Portable Gamer HP VICTUS',
//       price: '7490 DH',
//       thumbnail: 'https://images.frandroid.com/wp-content/uploads/2023/12/mifcom.jpeg',
//     },
//     {
//       id: 2,
//       title: 'PC Portable Gamer HP VICTUS',
//       price: '2190 DH',
//       thumbnail: 'https://img-0.journaldunet.com/qpKv3rd5t7gg4wl2lKvxsTwQQRw=/1500x/smart/a1afcee6aacf47fc90ca1e62315de73f/ccmcms-jdn/16947297.jpg',
//     },
//     {
//       id: 3,
//       title: 'Pc Portable Chromebook Acer',
//       price: '3640 DH',
//       thumbnail: 'https://img.freepik.com/photos-gratuite/gros-plan-ordinateur-tasse-cafe-vase-fleurs-plus-encore-bureau-blanc-interieur_181624-31240.jpg',
//     },
//     {
//       id: 4,
//       title: 'PC Portable - HUAWEI',
//       price: '1270 DH',
//       thumbnail:"https://www.altyk.com/fr/107-medium_default/le-pc-portable-l15f-i3p16-n05.jpg"
//     },
  
  
//   ];

//   return (
//     <div className="container-fluid my-5 ">
//       <div className="row g-4">
//         {products.map((product) => (
//           <Product
//             key={product.id}
//             title={product.title}
//             price={product.price}
//             thumbnail={product.thumbnail}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


















import React, { useState } from "react";
import Task from '../src/Task';

function TaskList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask(""); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;