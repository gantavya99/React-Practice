import React from 'react';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

const [data,setData]=useState([]);
const fetchData= ()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
  console.log(response.data)
  setData(response.data)
});
}
useEffect(() => {
 fetchData()
}, [])


  return (
    <div className="App">
      <input  className="input" type="text" placeholder='Enter your text here' />
      <button className="btn" onClick={fetchData}> Fetch Data</button>
      <div className="data">
      {data.title}
      </div>
      
      {/* {data.map((value)=>{
        return(
          <p key={value.id}>{value.title}</p>
        )
      })} */}
      
    </div>
  );
}

export default App;
