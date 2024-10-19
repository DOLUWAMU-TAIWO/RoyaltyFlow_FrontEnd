import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Music from './pages/Music';
import Releases from './pages/Releases';
import Analytics from './pages/Analytics';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ICloudDashboard from './pages/ICloudDashboard'; // Import iCloudDashboard

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          {/* Other routes */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Normal Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="music" element={<Music />} />
            <Route path="releases" element={<Releases />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

         {/* iCloud Dashboard Route */}
         <Route path="/icloud-dashboard" element={<ICloudDashboard />} />  {/* Make sure this is rendered */}
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
