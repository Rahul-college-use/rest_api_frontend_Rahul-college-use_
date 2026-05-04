import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar />
      <Home />
    </div>
  );
}

export default App;