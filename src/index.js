import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { APIDisplay } from './APIDisplay';
import APIDisplayWithClass from './APIDisplayWithClass';
import FormFunction from './FormFunction';
import { Ecommerce } from './Ecommerce';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProps from './MyProps';
import FormInClass from './FormInClass';
import SingUpForm from './SingUpForm';
import AutoLayoutExample from './AutoLayoutExample';
import DataManagement from './DataManagement';
import CustomerData from './CustomerData';
import { FormWithBoostrap } from './FormWithBoostrap';
import MyFormUser from './MyFormUser';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import ShowMoreTextToggle from './ShowMoreTextToggle';
import MyParet from './MyParet';
import MyData from './MyData';
import MyTY from './MyTY';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>

        <Counter/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
