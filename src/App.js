import React from 'react';
import Header from './Header';
import './App.css';
import Searchbox from './Searchbox';
import ResultsContainer from './Results';

const name=require('@rstacruz/startup-name-generator');

class App extends React.Component{
  state={
    headtitle:"Ash's Naam Lo",
    headerexpand:true,
    suggestednames:[],
  };
  

  InputChange=(inputtext)=>{
   
    this.setState({headerexpand: !inputtext,
    suggestednames:inputtext ? name(inputtext):[]});
  };



  
    render(){
      
     return(
         <div >
             <Header headerexpand={this.state.headerexpand}
             headertext={this.state.headtitle}/>  
             
             <Searchbox Inputhandle={this.InputChange}/>
             
             <ResultsContainer suggestednames={this.state.suggestednames} />
         </div>
     );
    }
}


export default App;