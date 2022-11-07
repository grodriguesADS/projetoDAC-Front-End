import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';


import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DeleteOwner extends React.Component {

    state = {
        id: '',
    }

    delete = () => {
        axios.delete('http://localhost:8080/api/owner/${this.state.id}')
        .then( response =>
            {
                console.log(response);
            }
        ).catch ( error =>
            {
                console.log(error.response);
            }
        )
    }

    render() {
        return (
            <div className="App">

                <h3>Deletar Propietário</h3>

                <div class="form-group">
                    <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Propietário: </label>
                    <input className="form-control form-control-sm" type="text" placeholder="Digite o id do propietário" id="inputSmall" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                </div>

                <br />

                <button type="button" class="btn btn-dark" onClick={this.delete}>Deletar</button>

                <br />
            </div>
        );
    }
}

export default withRouter (DeleteOwner);