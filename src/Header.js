import React from 'react';
import './Header.css';

const Header=({headertext,headerexpand})=>{
    return(
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            className={`head-image ${headerexpand ? 'head-image-expanded'
            :'head-image-contracted'
            }`} 
            alt="headerimg"/>
         <h1
                className={`head-text ${
                    headerexpand
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                {headertext}
            </h1>
        </div>
    );
};
export default Header;