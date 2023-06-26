import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import { Bookings } from './components/Pages/Bookings/Bookings'
import { Contact } from './components/Pages/Contact/Contact'
import { Dashboard } from './components/Pages/Dashboard/Dashboard'
import { Rooms } from './components/Pages/Rooms/Rooms'
import { Users } from './components/Pages/Users/Users'

import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  background-color: lightblue;
  width: 100%;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  min-width: 345px;
  background-color: lightgoldenrodyellow;
`;

const MainContent = styled.div`
  width: 100%;
`;
  

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      
        <SidebarContainer>
          <Sidebar/>
        </SidebarContainer>
      
        <MainContent>

          <Header/>

          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/bookings" element={<Bookings/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/rooms" element={<Rooms/>}/>
            <Route path="/users" element={<Users/>}/>
            {/*<Route path="*" element ={<NotFound/>} /> */} 
          </Routes>
        </MainContent>

      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
