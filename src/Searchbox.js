import React from 'react';
import './Searchbox.css';
const Searchbox=({Inputhandle})=>{
    return(
    <div className="search-container">
      <input onChange={(event)=>Inputhandle(event.target.value)} 
      placeholder="Type keywords" className="search-input"/>

    </div>
    );
};
export default Searchbox;