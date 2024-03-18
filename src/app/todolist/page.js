"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page(){
    const [ todo,setTodo] = useState("");
    const todoData = useSelector((data)=>data.todoData.todos);
    // console.log(todoData);
    const dispatch=useDispatch();
    return(
        <div>
            <h1>Add todo</h1>
            <input type="text" onChange={(e)=>setTodo(e.target.value)} placeholder="Add new task"/>
            <button onClick={()=>dispatch(addTodos(todo))}>Add Todo</button>
            <h4>Todo List</h4>
            {
                todoData.length && todoData.map((item)=>(
                    <h6 key={item.id}>{item.name}</h6>
                ))
            }
        </div>
    )
}