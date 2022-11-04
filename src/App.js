import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';

export default class App extends React.Component {

  state = {
    owner: "",
    car: "",
    returnOwnerCar: ""
  }

  add = () => {
    const returnOwnerCar = "Propietário: " + this.state.owner + " Carro: " + this.state.car;
    this.setState({ returnOwnerCar })
  }

  render() {
    return (
      <div className="App">

        <div class="form-group">
          <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Propietário: </label>
          <input className="form-control form-control-sm" type="text" placeholder="Digite o nome do Propietário" id="inputSmall" value={this.state.owner} onChange={(e) => { this.setState({ owner: e.target.value }) }} />
        </div>
        <br />

        <div class="form-group">
          <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Carro: </label>
          <input className="form-control form-control-sm" type="text" placeholder="Digite a placa do carro" id="inputSmall" value={this.state.car} onChange={(e) => { this.setState({ car: e.target.value }) }} />
        </div>

        <br />

        <button type="button" class="btn btn-dark" onClick={this.add}>Adicionar</button>

        <br />

        <h6>A relação adicionada: {this.state.returnOwnerCar} </h6>
      </div>
    );
  }
}


