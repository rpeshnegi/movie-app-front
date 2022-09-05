import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const theme = createTheme();


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
