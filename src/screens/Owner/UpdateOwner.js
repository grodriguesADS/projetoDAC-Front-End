import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';

export default class App extends React.Component {

    state = {
        id: "",
        name: "",
        returnOwner: ""
    }

    add = () => {
        const returnOwner = "ID: " + this.state.id + " Propietário: " + this.state.name;
        this.setState({ returnOwner })
    }

    render() {
        return (
            <div className="App">

                <h3>Atualizar Propietário</h3>

                <div class="form-group">
                    <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Propietário: </label>
                    <input className="form-control form-control-sm" type="text" placeholder="Digite o id do propietário" id="inputSmall" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                </div>

                <br />

                <button type="button" class="btn btn-dark" onClick={this.add}>Alterar</button>

                <br />

                <h6>Propietário Alterado: {this.state.returnOwner} </h6>
            </div>
        );
    }
}