import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.css';
import './App.css';

import CreateUser from './screens/CreateUser/CreateUser';
import NavBar from './components/NavBar';

export default class App extends React.Component {

  render() {
    return(
     <div>
      <NavBar />
      <CreateUser />
     </div>
    )
  }
}


