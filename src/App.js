import React from 'react'
import './App.css';
import {useState} from 'react'
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
    <div>
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)}type="text" placeholder="Add item..." />
        <button onClick={()=>setToDos([...toDos,toDo])}>ADD</button>
      </div>
      <div className="todos">
        {toDos.map((value)=>{ 
          return(
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
          <button onClick={(e)=>{
                setToDos(toDos.filter(value2 => {
                  let temp;
                  if (value.id != value.id){
                    temp = value2
                  }
                  return temp;
                }));
              }} >Delete</button>
          </div>
        </div>)})}
      </div>
    </div>

    </div>
  )
}

export default App