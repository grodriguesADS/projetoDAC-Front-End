import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';


import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

class UpdateOwner extends React.Component {

    state = {
        id: 0,
        name: "",
        email: "",
        password:"",
    }

    componentDidMount(){
        const params = this.props.match.params;
        const id = params.id;
        this.findById(id);
    }


    findById = (userId) => {
        axios.get(`http://localhost:8080/api/owner?id=${userId}`)
        .then ( response => {
            const user = response.data[0];
            const id = user.id;
            const username = user.username;
            const name = user.name;
            const email = user.email;

            this.setState({id , username, name, email});
        }

        ) .catch ( error => {
            console.log(error.response)
        }
        );
    }

    update = () => {
        axios.put(`http://localhost:8080/api/owner/${this.state.id}`,
        {
            name: this.state.name,
            email: this.state.email,
            password:this.state.password
        }
        ).then( response =>
            {
                console.log(response);
            }
        ).catch ( error =>
            {
                console.log(error.response);
            }
        );
    }


    
    render() {
        return (
            <div className='container'>
            <Card title = 'Atualizar Usuário'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                        <FormGroup label="Id: *" htmlFor='inputId'>
                                <input type="text"
                                id = 'inputId'
                                className='form-control'
                                value={this.state.id}
                                name = 'Id'
                                onChange={e => this.setState({ id: e.target.value })} />
                            </FormGroup>
                            <br/>
                            <FormGroup label="Nome: *" htmlFor='inputname'>
                                <input type="text"
                                id = 'inputname'
                                className='form-control'
                                value={this.state.name}
                                name = 'name'
                                onChange={e => this.setState({ name: e.target.value })} />
                            </FormGroup>
                            <br/>
                            <FormGroup label="Email: *" htmlFor='inputemail'>
                                <input type="email"
                                id = 'inputemail'
                                className='form-control'
                                value={this.state.email}
                                name = 'email'
                                onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <br/>
                            <FormGroup label="Senha: *" htmlFor='inputpassword'>
                                <input type="password"
                                id = 'inputpassword'
                                className='form-control'
                                name = 'password'
                                onChange={e => this.setState({ password: e.target.value })} />
                            </FormGroup> 
                            <br/>
                            <FormGroup label="Repita a Senha: *" htmlFor='inputPasswordRepeat'>
                                <input type="password"
                                id = 'inputPasswordRepeat'
                                className='form-control'
                                name = 'password'
                                onChange={e => this.setState({ passwordRepeat: e.target.value })} />
                            </FormGroup> 
                            <br/>   
                            <button className='btn btn-sucess' onClick={this.update} type = 'button'>Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        );
    }
}


export default withRouter(UpdateOwner);
