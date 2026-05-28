import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { getToken, removeToken } from './services/auth'

export default function App(){
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    setLoggedIn(!!getToken())
  }, [])

  function handleLogout(){
    removeToken()
    window.location.href = '/login'
  }

  return (
    <div>
      <header className="header">
        <div className="site-title">Community Discussion Forum</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/discussions/new">Create</Link>
          {loggedIn ? (
            <button className="secondary" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </header>
      <main className="container"><Outlet/></main>
    </div>
  )
}
