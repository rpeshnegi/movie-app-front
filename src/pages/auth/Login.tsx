import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginForm from './components/LoginForm';

import styles from "./Login.module.css"
import AppBox from '../../components/AppBox';

export default function Login() {
    return (
        <Container component="main">
            <CssBaseline />
            <AppBox className={styles['login-card']}>
                <AppBox className=''>
                    <img style={{ borderRadius: '25px' }} src='/image-girl.png' alt=''></img>
                </AppBox>
                <LoginForm />
            </AppBox>
        </Container>
    );
}
