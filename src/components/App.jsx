import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';
import PhoneBookPage from './Pages/PhoneBookPage';
import PrivateRoute from './PrivatRoute';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registraton" element={<RegistrationPage />} />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute>
              <PhoneBookPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
