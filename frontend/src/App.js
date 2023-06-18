import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header'
import Home from './Parent/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
