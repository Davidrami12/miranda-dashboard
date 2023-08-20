import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// React Context
import { useAuthContext } from "./hooks/useAuthContext";

// App main components
import { AppRoutes } from './router/Routes';
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import { AppContainer, WindowContent} from "./components/styled/AppContainer";

import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const { authReady } = useAuthContext();
  
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <AppContainer>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
          style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "70px" }}
        />

        {authReady ? <Sidebar /> : <></>}

        <WindowContent>
          {authReady ? <Header /> : <></>}
          <AppRoutes authReady={authReady} />
        </WindowContent>

      </AppContainer>
    </BrowserRouter>
  );
}

export default App;