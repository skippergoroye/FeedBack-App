import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const UseNavigate = () => {
  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
    console.log('hello')
    navigate('/about')
  }


  if(status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Navigate</h1>
      <button onClick={onClick}>Click</button>

      <Routes>
        <Route path='/show' element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  )
}

export default UseNavigate