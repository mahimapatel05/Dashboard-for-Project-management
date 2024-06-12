import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Account from './components/Account';
import ProjectMembers from './components/ProjectMembers';
import Tasks from './components/Tasks';
import { AuthProvider, useAuth } from './components/AuthContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

root.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
        <Route path="/project-members" element={<PrivateRoute><ProjectMembers /></PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
      </Routes>
    </Router>
  </AuthProvider>
);
