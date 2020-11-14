import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Discover from './discover'
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme'
import 'fontsource-roboto';

ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
   <Route exact path="/"><App/></Route>
   <Route path="/discover"><Discover/></Route>
  </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
