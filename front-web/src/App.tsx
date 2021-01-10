import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Home from './Home';
import Routes from './Routes';



function App() {
  return (
    <>
        <Routes />
        <ToastContainer />
   </> 
  );
}

export default App;
