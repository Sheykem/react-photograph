import React from 'react';

import Header from './conponents/Header';
import About from './conponents/About';
import MyServices from './conponents/MyServices';
import MyPortfolio from './conponents/MyPortfolio';
import BanerWork from './conponents/BanerWork';
import Testimonials from './conponents/Testimonials';
import Advantages from './conponents/Advantages';
import GetInTouch from './conponents/GetInTouch';
import Footer from './conponents/Footer';

import './scss/app.scss';


function App() {      
  return (
    <div className='components'>
      <Header />
      <About />
      <MyServices />
      <MyPortfolio />
      <BanerWork />
      <Testimonials />
      <Advantages />
      <GetInTouch />
      <Footer/>
    </div>
  );
}

export default App;
