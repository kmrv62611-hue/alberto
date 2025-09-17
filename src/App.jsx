import React from "react";
import Header from "./components/Header";
import Collections from "./components/Collections";
import Technology from "./components/Technology";
import WatchDetails from "./Components/WatchDetails";
import StoreLocator from "./components/StoreLocator";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Collections />
      <Technology />
      <WatchDetails />
      <StoreLocator />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
