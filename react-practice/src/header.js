import React from 'react';
import axios from 'axios.jsx';

const Header = () => {
const name='John';
const url=`https://api.agify.io?name=${name}`;
fetch(url).then((response)=>console.log(response));
const weather=30;
  return (
    <div className="header">The weather of Mumbai is : {weather} </div>
  )
}

export default Header