import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/TourList"

function App() {
  return (
    <main>
      <Navbar/>
      <Tourlist />
    </main>
  );
}

export default App;
