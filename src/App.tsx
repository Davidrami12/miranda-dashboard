import './App.css';
import React from "react";
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// React Context
import { useAuthContext } from "./hooks/useAuthContext";

// App main components
import { AppRoutes } from './router/Routes';
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import { AppContainer, WindowContent, AppContent } from "./components/styled/AppContainer";

import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { authReady } = useAuthContext();
  const [ sidebarExpanded, setSidebarExpanded ] = useState(true);
  const [ rotated, setRotated ] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
    setRotated(!rotated);
  };
  
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

        {authReady ? <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} rotated={rotated} /> : <></>}
        
        <WindowContent>
          {authReady ? <Header sidebarExpanded={sidebarExpanded} /> : <></>}
          <AppContent sidebarExpanded={sidebarExpanded}>
            <AppRoutes authReady={authReady} />
          </AppContent>
        </WindowContent>

      </AppContainer>
    </BrowserRouter>
  );
}

export default App;