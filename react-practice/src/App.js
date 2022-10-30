import React from 'react';
import './App.css';
import axios from "axios";
import { useEffect } from 'react';
function App() {

//Method1: Using promises
const fetchData= ()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>console.log(response.data));
}


  return (
    <div className="App">
      <button className="btn" onClick={fetchData}> Fetch Data</button>
    </div>
  );
}

export default App;
