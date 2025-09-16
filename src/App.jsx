import React from 'react';
 import Header from './Components/Header';
 import Collections from './Components/Collections';
import Technology from './Components/Technology';
import WatchDetails from './Components/WatchDetails';
import StoreLocator from './Components/StoreLocator';
import About from './Components/About';
 import Contact from './Components/Contact';
 import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Collections />
      <Technology />
      <WatchDetails />
      <StoreLocator />
       <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;