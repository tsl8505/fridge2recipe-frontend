import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './containers/MainPage';  
import './styles/App.css';
import pua from './assets/gif/pua_ts.gif';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Define the route for the Home component */}
          <Route path="/" element={<Home />} />
          
          {/* Define the route for the MainPage */}
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home component where the Start button is located
function Home() {
  return (
    <header className="App-header">
      <img src={pua} alt="My animation" />
      <p>Fridge2Recipe</p>
      
      {/* Use Link to navigate to MainPage */}
      <Link className="App-link" to="/main">
        Start
      </Link>
    </header>
  );
}

export default App;
