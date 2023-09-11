// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Layout from './components/Layout';
class App extends Component {

  render(){
    return (
      <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/petbook" element={<Layout/>}/>
        </Routes>
      </Router>
      </>
      
    );
  }
  
};

export default App;