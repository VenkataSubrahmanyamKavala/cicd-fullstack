import React, { Component } from 'react';
import './App.css'; 

import { callApi,BASEURL } from './api';

class App extends Component {
  constructor(){
    super();
    this.state={A:0,B:0,RES:0};
    this.getResponse = this.getResponse.bind(this);
  }

  add(){
    callApi("GET", BASEURL + `add/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  getResponse(res){
    this.setState({RES: res});
  }

  loadInputChange(event){
      this.setState({[event.target.name] : event.target.value});
  }

  render() {
    const {A, B, RES} = this.state;
    return (
      <>
        <header>
          <div className='title'>Simple Calculator</div>
        </header>
        <section>
          <table>
            <tr>
              <td>Enter the value of A</td>
              <td><input type='text' id='T1' name='A' value={A} onChange={(event)=>this.loadInputChange(event)} /></td>
            </tr>
            <tr>
              <td>Enter the value of B</td>
              <td><input type='text' id='T2' name='B' value={B} onChange={(event)=>this.loadInputChange(event)} /></td>
            </tr>
            <tr>
              <td>Result</td>
              <td><label id='L1'>{RES}</label></td>
            </tr>
            <tr>
              <td></td>
              <td><button onClick={()=>this.add()}>ADD</button></td>              
            </tr>
          </table>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
