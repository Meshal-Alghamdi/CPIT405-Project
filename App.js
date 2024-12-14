import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Main from './pages/Main';
import ClassDetails from './pages/ClassDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/class" element={<ClassDetails/>} />

      </Routes>
    </Router>
  );
}

export default App;
