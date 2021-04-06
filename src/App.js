import React from 'react';
import Header from './Header';
import './App.css';
import Searchbox from './Searchbox';


class App extends React.Component{
  state={
    headtitle:"Naam Lo"
  };




  
    render(){
     return(
         <div >
             <Header headertext={this.state.headtitle}/>  
             <Searchbox />
             
         </div>
     );
    }
}


export default App;