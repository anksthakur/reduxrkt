"use client"
import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function AddUsers(){
    const [name,setName] = useState("");
    const dispatch = useDispatch();
    const userDispatch=()=>{
        // console.log(name);
        dispatch(addUser(name))
    }
    return(
        <div className="add-user">
            <h3> Add Users </h3>
            <input className="add-user-input" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Add new user"/>
            <button className="add-user-btn" onClick={userDispatch} >Add User</button>
            <Link href="/removeuser">Remove User</Link>
            <br/>
            <Link href="/todolist">Go to todo page</Link>
            <br/>
            <Link href="/apiusers">Go to API page</Link>
        </div>
    )
}