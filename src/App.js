import React, { useState, useEffect } from 'react'
import Login from './components/Login';

const App = () => {

  
    const [display, setDisplay] = useState(true)
    return (
      <div>
        <button onClick={() => setDisplay(!display)} style={{width:"auto"}}>Login Form</button>
      
        {display && <Login />}

      
      </div>
    )
  }

  

export default App
