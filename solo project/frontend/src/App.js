// src/App.js
import React, { useState } from 'react';
import Home from './componenets/Home.js';
import AboutUs from './componenets/AboutUs.js';
import AddAccessories from './componenets/AddAccessories.js';
// import SearchBar from './componenets/SearchBar.js';
import AllAccessories from './componenets/AllAccessories.js';

import './App.css';

function App() {
  const [view, setView] = useState('Home');

  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-item is-active" onClick={() => setView("Home")}>
          Home
        </div>
        <div className="nav-item" onClick={() => setView("AboutUs")}>
          About Us
        </div>
        <div className="nav-item" onClick={() => setView("AllAccessories")}>
          AllAccessories
        </div>
        <div className="nav-item" onClick={() => setView("AddAccessories")}>
          AddAccessories
        </div>
        <div className="nav-item" active-color="black">
          <input type="text" />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home />}
      {view === "AllAccessories" && <AllAccessories />}
      {view === "AboutUs" && <AboutUs />}
      {view === "AddAccessories" && <AddAccessories onProductAdded={() => changeView("AllAccessories")} />}
      <div></div>
    </div>
  );
}

export default App;


