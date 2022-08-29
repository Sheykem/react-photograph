import React from 'react';

import Header from './conponents/Header';
import About from './conponents/About';
import MyServices from './conponents/MyServices';
import './scss/app.scss';

function App() {
  return (
    <div className='Header'>
      <Header />
      <About />
      <MyServices/>
    </div>
  );
}

export default App;
