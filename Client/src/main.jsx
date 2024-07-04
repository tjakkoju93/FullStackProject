import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WorkoutContext from './Context/WorkoutContext.jsx'
import  AuthContext  from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <WorkoutContext>

      <App />

    </WorkoutContext>
  </AuthContext>
)
