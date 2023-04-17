import React from "react";
import UserCard from "../components/UserCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
    const {id} = useParams();
    console.log(id);
    const [user,setUser] = useState(null);
    useEffect(()=>{
        const fetchUserData= async()=>{
            console.log("sending data");
            const res = await axios.get(`https://lostandfoundbackend-8xry.onrender.com/users/${id}`)
            setUser(res.data);
            console.log(res.data, user);
        }
        fetchUserData();
    },[id])
  return <>
    {user?<UserCard user={user}/>:null}
  </>;
  
}

export default UserProfile;
