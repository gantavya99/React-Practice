import React from 'react';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
const [json,setJson]=useState([]);
const [name,setName]=useState("");
//fetching data from API
const fetchData=()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response=>{
    console.log(response.data);
     setJson(response.data);
  }))
}
useEffect(() => {
 fetchData();
}, [])

  return (
    <div className="App">
      <button className="btn" onClick={fetchData}>Fetch Data</button>
      
      <input  type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter a Name..."/>
      
      {json.filter((value)=>{
        if(name=="")
        return value;
        else if(value.username.toLowerCase().includes(name.toLowerCase()))
        return value;
      }).map(value=>(
        <p key={value.id}>{value.username}</p>
      ))}
    </div>
  );
}

export default App;
