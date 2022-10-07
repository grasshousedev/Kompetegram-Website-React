import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Opreg from "./pages/registration/Main"

class App extends Component {

  constructor(props) {

    super(props);
    
    this.state = {

    };

    return;
  }

  render() {

    return (

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={ <Navigate to='/home' /> } />
            <Route exact path='/home' element={ <Home /> } />
            <Route exact path='/registration' element={ <Opreg /> } />
          </Routes>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
