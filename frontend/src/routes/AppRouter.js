import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../styles/global.css';
import Login from '../components/Login';
import NotLog from '../pages/NotLog';
import Layout from '../layout/Layout';
import NotFound from '../pages/NotFound';
import Register from '../components/Register';
import Home from '../pages/Home';

const App = ()=>{
    return(
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notLog" element={<NotLog />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
        
        </BrowserRouter>
    );
}

export default App;