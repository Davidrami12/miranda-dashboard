import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import { Bookings } from './components/Pages/Bookings/Bookings'
import { Contact } from './components/Pages/Contact/Contact'
import { Dashboard } from './components/Pages/Dashboard/Dashboard'
import { Rooms } from './components/Pages/Rooms/Rooms'
import { Users } from './components/Pages/Users/Users'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Header/>
        <Sidebar/>

        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/users" element={<Users/>}/>
          {/*<Route path="*" element ={<NotFound/>} /> */} 
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
