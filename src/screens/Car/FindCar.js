import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';

export default class App extends React.Component {

    state = {
        id: "",
        licensePlate: "",
        returnCar: ""
    }

    add = () => {
        const returnCar = "ID: " + this.state.id + " Carro: " + this.state.licensePlate;
        this.setState({ returnCar })
    }

    render() {
        return (
            <div className="App">

                <h3>Encontrar Carro</h3>

                <div class="form-group">
                    <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Carro: </label>
                    <input className="form-control form-control-sm" type="text" placeholder="Digite o id do carro" id="inputSmall" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                </div>

                <br />

                <button type="button" class="btn btn-dark" onClick={this.add}>Encontrar</button>

                <br />

                <h6>Carro Encontrado: {this.state.returnCar} </h6>
            </div>
        );
    }
}