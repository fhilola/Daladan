import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './auth/Auth'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Auth/>}/>
    </Routes>
  )
}

export default RouteController