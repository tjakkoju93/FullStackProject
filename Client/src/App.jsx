import axios from "axios"
import './App.css'
import { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Routes ,Navigate } from "react-router-dom";
import { UseAuthContext } from "./Hooks/UseAuthContext";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";


function App() {

  const {user} = UseAuthContext()

  return (
    <div className="app">


      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to="/login"/> } />
          <Route path='/login' element={!user ?  <Login/> : <Navigate to="/"/> }/>
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
