import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Orders from './components/Orders';
import Plan from './components/Plan';
import NavbarComponent from './components/NavbarComponent';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path="plan" element={<Plan />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
  );
}


function Layout() {
  return (
    
    <Container fluid>
      <NavbarComponent/>
      <br />
      <Container><Outlet /></Container>
    </Container>
  );
}

export default App;
