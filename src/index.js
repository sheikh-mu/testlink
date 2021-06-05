import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import './index.css';
ReactDOM.render(

    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  ,
  document.getElementById('root')
);

