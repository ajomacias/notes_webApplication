import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import '../styles/global.css';
import Login from '../components/Login';
import NotLog from '../pages/NotLog';
import NotFound from '../pages/NotFound';
import Register from '../components/Register';
import Home from '../pages/Home';
import Layout from '../layout/Layout.jsx';
import Private from '../auth/VerifyUser';

const AppRouter = ()=>{
    return(
        <BrowserRouter>
       <Layout>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>} />
            <Route path="/login" element={<Login />} />
            <Route path="/notLog" element={<NotLog />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
        </BrowserRouter>

    );
}

export default AppRouter;