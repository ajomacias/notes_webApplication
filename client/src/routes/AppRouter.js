import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import '../styles/styles.css';
import Login from '../components/Login';
import NotLog from '../pages/NotLog';
import NotFound from '../pages/NotFound';
import Register from '../components/Register';
import Home from '../pages/Home';
import Layout from '../layout/Layout.jsx';
import Private from '../auth/VerifyUser';
import Public from './publicRoutes';
import Note from '../components/Note';
import CardNote from '../components/CardNote';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Private><Home /></Private>} />
                    <Route path="/n/:id" element={<Private><Note /></Private>} />
                    <Route path="/n" element={<Private><CardNote /></Private>} />
                    <Route path="/login" element={<Public><Login /> </Public>} />
                    <Route path="/notLog" element={<NotLog />} />
                    <Route path="/register" element={<Public><Register /> </Public>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                </Layout>
            
        </BrowserRouter>

    );
}

export default AppRouter;