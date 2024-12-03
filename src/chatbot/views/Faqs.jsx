import { useState, useRef, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Message } from '../components'

// Preguntas iniciales
const initialQuestions = [
  '¿Qué servicios ofrecen?',
  '¿Cómo se adaptan a las necesidades de cada cliente?',
  '¿Cuál es el proceso de trabajo?',
  '¿Qué resultados puedo esperar?',
  '¿Cómo miden el éxito de una campaña?'
]

// Respuestas predefinidas del bot para cada pregunta
const botResponses = {
  '¿Qué servicios ofrecen?': 'Ofrecemos una amplia gama de servicios, desde el desarrollo de marca y diseño gráfico, gestión de redes sociales y campañas publicitarias hasta programas de capacitación y comunicación. Nuestro objetivo es ayudarte a construir una marca sólida y conectar con tu audiencia de manera efectiva.',
  '¿Cómo se adaptan a las necesidades de cada cliente?': 'Creemos que cada cliente es único, por lo que ofrecemos soluciones personalizadas. Realizamos un análisis exhaustivo de tu negocio y tus objetivos para desarrollar una estrategia a medida.',
  '¿Cuál es el proceso de trabajo?': 'Nuestro proceso comienza con una reunión para entender tus necesidades y expectativas. Luego, desarrollamos una propuesta detallada y un plan de acción. A lo largo del proyecto, mantenemos una comunicación abierta y transparente contigo.',
  '¿Qué resultados puedo esperar?': 'Los resultados pueden variar dependiendo de tus objetivos y del mercado. Sin embargo, nuestros clientes suelen experimentar un aumento en el reconocimiento de marca, un mayor engagement en las redes sociales y un crecimiento en las ventas.',
  '¿Cómo miden el éxito de una campaña?': 'Utilizamos una variedad de métricas para medir el éxito de cada campaña, como el alcance, la interacción, el tráfico del sitio web y el retorno de la inversión (ROI). Te proporcionaremos informes detallados para que puedas ver los resultados de primera mano.'
}

// Componente de chat principal
export const Faqs = () => {
  const [messages, setMessages] = useState([{ text: '¿Cuál es tu pregunta? Estoy aquí para ayudarte.', isUser: false }])
  const messagesEndRef = useRef(null) // Referencia para el área de mensajes
  const [disableButtons, setDisableButtons] = useState(false) // Estado para deshabilitar botones

  // Función para manejar cuando el usuario selecciona una pregunta
  const handleQuestionClick = (question) => {
    // Agregar pregunta seleccionada como mensaje del usuario
    setDisableButtons(true) // Deshabilitar botones
    setMessages(prevMessages => [...prevMessages, { text: question, isUser: true }])

    // Responder con la respuesta predefinida del bot
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponses[question], isUser: false }
      ])
      setDisableButtons(false) // Deshabilitar botones
    }, 500)
  }

  // Desplazar scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '91vh', // Ocupa toda la altura de la pantalla
        width: { xs: '100%', lg: '100%' },
        marginTop: '64px',
        alignItems: 'center'
      }}
    >
      {/* Área de mensajes con scroll */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: 'auto',
          backgroundColor: '#F5F5F5',
          width: { xs: '100%', lg: '70%' },
          maxHeight: 'calc(90vh)' // Espacio reservado para la barra de entrada
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
        {/* Referencia para mantener el scroll al fondo */}
        <div ref={messagesEndRef} />
      </Box>

      {/* Opciones de preguntas iniciales */}
      <Box sx={{
        p: 2,
        backgroundColor: 'white',
        borderTop: '1px solid #ddd',
        width: { xs: '100%', lg: '65%' }
      }}>
        <Typography variant="subtitle1" gutterBottom>Selecciona una pregunta:</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {initialQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleQuestionClick(question)}
              sx={{ textAlign: 'left' }}
              disabled={disableButtons}
            >
              {question}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
