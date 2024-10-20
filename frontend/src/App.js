import logo from './logo.svg';
import './App.css';
import { AllContextProvider } from './Context/Context';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Hero } from './Pages/Hero';

import { SignInPage } from './Pages/SignIn';
import { SignUpPage } from './Pages/SignUp';
import { Navbar } from './Components/Navbar';
import { Event } from './Pages/Event';
import { EventWithFilter } from './Components/EventWithFilter';
import { Footer } from './Components/Footer';
import {  AddEventPage } from './Pages/AddEvent';
import { ArtistPage } from './Pages/Artist';



function App() {
  return (
   
    
      <HashRouter>
    <AllContextProvider>
      <Navbar /> 
     <Routes>
      <Route path="/" element={<Hero />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/event' element={<Event />} />
      <Route path='/eventfilter' element={<EventWithFilter />} />
      <Route path='/addevent' element={<AddEventPage />} />
      <Route path='/artist' element={<ArtistPage />} />
     </Routes>
     <Footer />

    </AllContextProvider>
    </HashRouter>
    
   
  );
}

export default App;
