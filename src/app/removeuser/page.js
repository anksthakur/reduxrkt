"use client"
import React from "react"; // Import React
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function Page(){
    const userData = useSelector((data)=>data.usersData.users) || []; // Adding null check
    const dispatch = useDispatch(); // Get dispatch function from useDispatch hook

    console.log(userData)
    return(
        <div className="display-user">
            <h1> Remove user page </h1>
            {
                userData.map((item, index)=>(
                    <div className="user-item" key={index}> {/* Adding key prop */}
                        <span>{item.name}</span>
                        <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}


