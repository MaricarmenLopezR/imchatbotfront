import { Route, Routes } from 'react-router-dom'
import { ChatbotRoutes } from '../chatbot/routes/ChatbotRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      {/* Chatbot
        Por ahora cualquier ruta llevara a el chatbot
      */}
      <Route path='/*' element={ <ChatbotRoutes /> }/>

      {/* Login y registro */}
      {/* <Route /> */}
    </Routes>
  )
}
