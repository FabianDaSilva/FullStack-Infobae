import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProtectedRoute from './utils/ProtectedRout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
