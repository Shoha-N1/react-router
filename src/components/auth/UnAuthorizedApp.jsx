import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

export default function UnAuthorizedApp() {
    const [tab, setTab] = useState()
  return(
  <>
  <div>
    <button onClick={() => setTab('register')}>Register</button>
    <button onClick={() => setTab('login')}>Login</button>
  </div>

  <div style={{display: `${tab === 'register' ? 'block' : 'none'}`}}>
    <Register />
  </div>
  <div style={{display: `${tab === 'login' ? 'block' : 'none'}`}}>
    <Login />
  </div>
  </>
  )
}
