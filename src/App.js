import React, { Component } from 'react';
import Input from "./components/Input"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Currencies from "./components/Currensies";

class App extends Component {
  state={
    currencies:[],
    error: false
  }
  getCurrency = async (e)=>{
    const bankName=e.target.elements.bank.value;
    e.preventDefault()
    const PRIVAT_URL='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    if(bankName==="privat"){
      const URL= await fetch(`https://cors-anywhere.herokuapp.com/${PRIVAT_URL}`)
      const DATA= await URL.json()
      this.setState({currencies:DATA,error:false})
      console.log(this.state.currencies)
    }
    else{
      console.log("Bank doesn't exist!")
      this.setState({currencies:undefined,error:true})
    }
  }
  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Currency</p>
        </header>
        <div className="container main">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <Input getCurrency={this.getCurrency} />
            </div>
          </div>
          
            <Currencies currencies={this.state.currencies} error={this.state.error}/>
          
        </div>


      </div>
    );
  }
}

export default App;
