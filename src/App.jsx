// App.js

import React, { Component } from 'react';
import { Route , Routes } from "react-router-dom";
// import Preloader from './pages/Preloader';
import Header from './pages/Header';
// import Slider from './pages/Slider';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Becomespeaker from './pages/Becomespeaker';
import Speakers from './pages/Speakers';
import Whysponsor from './pages/Whysponsor';
import Sponsors from './pages/Sponsors';
import Exhibitor from './pages/Exhibitor';
import Registration from './pages/Registration';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';



class App extends Component {

  render() {
    return (
      <React.Fragment>      
        <Header />          
        <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/agenda" element={<Agenda />} /> 
        <Route path="/Becomespeaker" element={<Becomespeaker/>} /> 
        <Route path="/Speakers" element={<Speakers/>} />     
        <Route path="/Whysponsor" element={<Whysponsor/>} />
        <Route path="/Sponsors" element={<Sponsors/>} />
        <Route path="/Exhibitor" element={<Exhibitor/>} />  
        <Route path="/Registration" element={<Registration/>} /> 
        <Route path="/ContactUs" element={<ContactUs />} /> 
       </Routes>
       <Footer />    
      </React.Fragment>
    );
  }
}

export default App;