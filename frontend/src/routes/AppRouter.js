import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../styles/global.css';
import Login from '../components/Login';
import NotLog from '../pages/NotLog';
import Layout from '../layout/Layout';
import NotFound from '../pages/NotFound';
import Register from '../components/Register';
import Home from '../pages/Home';
import Header from '../layout/Header';

const App = ()=>{
    return(
       
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notLog" element={<NotLog />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
 
    );
}

export default App;