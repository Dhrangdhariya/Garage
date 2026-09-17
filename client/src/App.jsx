import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Review from './pages/Review';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/main" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/reviews' element={<Review />} />
          <Route path="*" element={<h1 className="text-3xl font-bold text-center mt-20">404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
