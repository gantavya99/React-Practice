import React from 'react';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
const [json,setJson]=useState([]);
const [name,setName]=useState("");
const [display,setDisplay]=useState(false);
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

     const showOptions=()=>{
      setDisplay(true);
     }

  return (
    <div className="App">
      {/* <button className="btn" onClick={showOptions}>Fetch Data</button> */}
      
      <input className="input1" type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter a Name..." onClick={showOptions}/>
      
      { display?json.filter((value)=>{
        if(name=="")
        return value;
        else if(value.username.toLowerCase().includes(name.toLowerCase()))
        return value;
      }).map(value=>(
        <p className="text" key={value.id}>{value.username}</p>
      )):""}
    </div>
  );
}

export default App;
