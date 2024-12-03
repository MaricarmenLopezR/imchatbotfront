import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ChatbotPage } from '../pages/ChatbotPage'

export const ChatbotRoutes = () => {
  return (
    <Routes>
    {/* Pagina principal del chat bot */}
    <Route path='/' element={ <ChatbotPage />}/>

    <Route path='/*' element={ <Navigate to="/" />}/>
  </Routes>
  )
}
