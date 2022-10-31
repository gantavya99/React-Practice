import React from 'react';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
const [name,setName]=useState([]);
const [text,setText]=useState("");
const fetchData=()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response=>{
    console.log(response.data);
    setName(response.data);
  }))
}
useEffect(() => {
 fetchData();
}, [])
const searchName=(text)=>{
  let matches=[];
   matches=name.includes((name)=>{
    const regex=new RegExp(`${text}`,`gi`);
    return name.match(regex);
  })
  console.log(matches);
  setText(text);
};
  return (
    <div className="App">
      <button className="btn" onClick={fetchData}> Fetch Data</button>
      <input onChange={(e)=>searchName(e.target.value)} placeholder="Enter a name"/>
      {name.map(value=>(
        <p key={value.id}>{value.username}</p>
      ))}
    </div>
  );
}

export default App;
