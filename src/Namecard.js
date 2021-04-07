import React from 'react';
import './Namecard.css';

const namecheapurl="https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard=({suggestedName})=>{
    return (
        
        <a target="_blank" rel="noreferer"
        className="card-link" href={`${namecheapurl}${suggestedName}`}>
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        </a>
    )
}

export default NameCard;