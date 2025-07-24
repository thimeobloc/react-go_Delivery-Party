import React from 'react';
import './App.css';
import Header from './Components/Layouts/Header/Header'; 
import Home from './Pages/Home/Home'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
