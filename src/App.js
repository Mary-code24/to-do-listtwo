import './App.css';
import { ToDoListtwo } from './ToDoListtwo';
import image from './dolist.jpeg';
import imageTwo from './para.jpeg';


function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} width='200px' alt='List'/>
      </div>
<div className='container'>
      <h1>TO DO LIST</h1>
      </div>
        <ToDoListtwo />
        <div className='container'>
      <img src={imageTwo} width='200px' alt='couple' />
      </div>
    </div>
  );
}

export default App;
