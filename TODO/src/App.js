import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Tackle Your Tasks ✍️</h2>
      </div>
      <div className="input">
        <input className='input-todo' onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj)=>{
          return(
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setTodos(todos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
            <div className="right">
              <i onClick={()=>{
                setTodos(todos.filter(obj2=>{
                  if(obj2.id!==obj.id){
                    return obj2
                  }
                }))}} className="fas fa-times"></i>
            </div>
          </div>
        )})
        }
      </div>
      <div className='CDTS'>
        <h2 className='CDTS-heading'><u>Completed Tasks</u></h2>
        {todos.map((obj)=>{
          if(obj.status){
            return(
              <input className='CDTS-content' type="text" value={obj.text}/>
            )
          }
        })}
      </div>
    </div>
  );
}

export default App;