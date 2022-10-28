import React from 'react';

export default class App extends React.Component {

  state = {
    owner: "",
    car: "",
    returnOwnerCar: ""
    }

    add = () => {
      const returnOwnerCar = "Propietario: " + this.state.owner + " Carro: " + this.state.car;
      this.setState({returnOwnerCar})
    }
        
    render() {
      return(
        <div className= "App">
         <label>Proprietario: </label>
          <input type = "text" value = {this.state.owner} onChange = {(e) => {this.setState({owner: e.target.value})}} />
        <br/>

        <label>Carro: </label>
         <input type = "text" value = {this.state.car} onChange = {(e) => {this.setState({car: e.target.value})}} />

         <br/>

          <button onClick={this.add}>Adicionar</button>

        <br/>

          <label>A relação adicionada: {this.state.returnOwnerCar} </label>
         </div>
         );
      }
}
 
   
  