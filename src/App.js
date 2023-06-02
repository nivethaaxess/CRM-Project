import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile/profile';
// import './App.css';
import Dashboard from './Dashboard/dashboard';
import LoginPage from './Login/login';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/navbar" element={<Dashboard />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
   {/* <Dashboard /> */}
    </div>
  );
}

export default App;
