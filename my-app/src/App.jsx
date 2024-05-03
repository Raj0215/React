// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
