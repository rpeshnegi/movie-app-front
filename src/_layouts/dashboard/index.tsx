import { Button, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { authActions } from '../../redux/slices/auth/auth-actions';
import { dispatch } from '../../redux/store';

const DashboardLayout: React.FC = () => {
    const handleLogout = () => {
        dispatch(authActions.LOGOUT());
    }
    return (
        <Container component="main">
            <CssBaseline />
            <h1>Movie list app</h1>
            <Button onClick={handleLogout}>Logout</Button>
            <Outlet />
        </Container>
    );
}
export default DashboardLayout
