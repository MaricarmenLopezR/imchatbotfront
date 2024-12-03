import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

/* Este es el archivo de configuracion de las rutas para la autenticación */
/* aun no esta configuraco de  las rutas principales, se configurara cuando se necesite */

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element= { <LoginPage /> } />
      <Route path='login' element= { <RegisterPage /> } />

      <Route path='/*' element= { <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
