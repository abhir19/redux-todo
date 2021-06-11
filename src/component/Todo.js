import React,{useState} from 'react'
import{useDispatch,useSelector} from 'react-redux';
import {addTodo,deleteTodo} from '../Actions/actions'

const Todo = () => {
   const [inputData,setinputData] = useState('');
   const disptach=useDispatch();
   const list =useSelector((state)=>state.Reducers.list);
    return (
        <div>
           <h1>create todo</h1>
      <div>
        <input type="text" placeholder="create" value={inputData} onChange={(event)=>setinputData(event.target.value)}/>
        <button onClick={()=>disptach(addTodo(inputData),setinputData(''))}>click me</button>
      </div> 
      <div>
          {
              list.map((elem)=>{
                  return(
                  <div key={elem.id}>
                      <h1>{elem.data}</h1>
                      <button onClick={()=>{disptach(deleteTodo(elem.id))}}>Delete</button>
                      </div>)
              })
          }
      </div>
        </div>
    )
}

export default Todo;
