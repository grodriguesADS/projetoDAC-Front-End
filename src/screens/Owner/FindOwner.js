import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';


import { withRouter } from 'react-router-dom';
import axios from 'axios';


class FindOwner extends React.Component {

    state = {
      name: '',
      email: '',
      id: '',
      users: []

    }

   delete = (userId) => {
    axios.delete('http://localhost:8080/api/owner/${userId}')
    .then( response =>
        {
            this.find();
        }
    ).catch ( error =>
        {
            console.log(error.response);
        }
    )
}
    edit = (userId) => {
        this.props.history.push('/UpdateOwner')
    }

    find = () => {
        var params = '?';

        if(this.state.id != '') {
            if (params != '?') {
                params = '${params}&';
            }

            params = '${params}id = ${this.state.id}'
        }

        if(this.state.name != '') {
            if (params != '?') {
                params = '${params}&';
            }

            params = '${params}name = ${this.state.name}'
        }

        if(this.state.email != '') {
            if (params != '?') {
                params = '${params}&';
            }

            params = '${params}email = ${this.state.email}'
        }

        axios.get('http://localhost:8080/api/owner${params}')
    }
    render() {

        return (
            <div className="App">

                <h3>Encontrar Propietário</h3>

                <div class="form-group">
                    <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Propietário: </label>
                    <input className="form-control form-control-sm" type="text" placeholder="Digite o id do propietário" id="inputSmall" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                </div>

                <br />

                <button type="button" class="btn btn-dark" onClick={this.find}>Encontrar</button>

                <br />

            </div>
        );
    }
}
export default withRouter (FindOwner);