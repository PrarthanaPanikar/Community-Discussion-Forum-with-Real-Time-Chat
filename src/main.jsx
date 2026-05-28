import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DiscussionDetail from './pages/DiscussionDetail'
import CreateDiscussion from './pages/CreateDiscussion'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Dashboard/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="discussions/new" element={<CreateDiscussion/>} />
        <Route path="discussions/:id" element={<DiscussionDetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
