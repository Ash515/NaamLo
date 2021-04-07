import React from 'react';
import NameCard from './Namecard';
import './Results.css';
const ResultsContainer=({suggestednames})=>{
    const suggestedNamesjsx=suggestednames.map(suggestedName=>{
        return <NameCard suggestedName={suggestedName}/>
    })
    return(
        <div  className="results-container">
        
            {suggestedNamesjsx}
      
        </div>
    );
};

export default ResultsContainer;