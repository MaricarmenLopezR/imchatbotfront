import { useState, useRef, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Message } from '../components'

// Preguntas iniciales
const initialQuestions = [
  '¿Cómo sé que debo contratar servicios de Identidad México?',
  '¿Es necesario pagar grandes cantidades de dinero para tener una estrategia innovadora?',
  '¿Las FINTECH serán el futuro del dinero?',
  '¿Cuál es la tasa de rendimientos esperada al contratar sus servicios?',
  '¿Por qué el robo de identidad digital sigue siendo el delito con mayor índice de crecimiento?'
]

// Respuestas predefinidas del bot para cada pregunta
const botResponses = {
  '¿Cómo sé que debo contratar servicios de Identidad México?': 'Mientras lees este mensaje, están ocurriendo eventos en la red, millones de ellos contienen información que puede afectar drásticamente a tu organización. Por ejemplo, el fraude y las violaciones de seguridad son los delitos con mayor tasa de crecimiento en el mundo, alcanzando cifras de dos dígitos desde 2013. Sin embargo, lo que queremos hablarte va más allá: se trata de cómo organizarte para servir mejor a tus clientes. Tú, al igual que decenas de organizaciones que generan el 69 % de sus ingresos de manera eficiente, sabrás exactamente qué hacer para aprovechar las oportunidades. Estas se cuentan en millones de millones de pesos. Es un océano azul de posibilidades.',
  '¿Es necesario pagar grandes cantidades de dinero para tener una estrategia innovadora?': 'No. Definitivamente, el siglo XXI se caracteriza por ofrecer nuevos modelos de negocio, como el software como servicio (SaaS), cobrar por funciones premium mientras se ofrecen funciones básicas sin costo, utilizar plataformas que conectan a compradores y vendedores, apostar por la economía colaborativa, vender directamente a los consumidores eliminando intermediarios, o crear negocios de impacto social con soluciones sostenibles y éticas hacia los clientes. Ya sea a través de microtransacciones o crowdfunding, enfócate en el know-how, porque es la manera de evitar cientos de formas de hacer las cosas que no funcionarán para ti.',
  '¿Las FINTECH serán el futuro del dinero?': 'No. En 1887, se vivió una utopía similar cuando se propuso un lenguaje universal para simplificar la comunicación humana: el esperanto. Otro momento de éxtasis universal fue el surgimiento del internet alrededor de 1960, que prometía democratizar la comunicación humana. Sin embargo, ahora, en manos de grandes capitales, parece inalcanzable para los 575 millones de personas que viven en pobreza extrema. Desde nuestra perspectiva, lo que sí observamos es una gran competencia y un carácter renovado, versátil y ágil, algo que en muchos bancos tradicionales ya no se percibía. Si haces pagos, buscas préstamos, necesitas administrar tus finanzas personales, usar dinero digital, arrendar, rentar, vender, solicitar u ofrecer seguros, fianzas o coaseguros; si utilizas banca en línea, ATMs, TPVs, tokens, celulares o tarjetas; si quieres vender o comprar en corto, en largo, en futuros u opciones, acciones, refinanciamiento, empeño o crowdfunding… Acércate! Te ofrecemos asesoría, infraestructura, tecnología e innovación, ya sea que formes parte de un banco o una FINTECH.',
  '¿Cuál es la tasa de rendimientos esperada al contratar sus servicios?': 'La clave para elegir una consultoría de innovación rentable es realizar un análisis exhaustivo, considerando no solo el costo, sino también la calidad del servicio y su alineación con tus objetivos estratégicos. Una buena relación con el consultor puede marcar la diferencia y potenciar el éxito de tus iniciativas. Nuestras tarifas y servicios de consultoría varían en función de la complejidad del proyecto y la ubicación geográfica. Por ejemplo, en el caso de un desarrollo de océano azul en Ciudad de México, nos enfocamos únicamente en una tarifa por hora que comienza desde $500 por hora. Definir las necesidades específicas es fundamental, pero puede ser un proceso extenso. Por eso, en tan solo 30 minutos, te ofrecemos una sesión informativa donde te explicamos lo que hacemos. A través de herramientas comprobadas y un proceso de autodescubrimiento, podrás realizar un sizing de tus requerimientos. Finalmente, te recomendamos preguntar qué metodologías pueden adaptarse mejor a tu organización para maximizar los resultados.',
  '¿Por qué el robo de identidad digital sigue siendo el delito con mayor índice de crecimiento?': 'El ciudadano común es especialmente vulnerable al robo de identidad debido a la creciente digitalización de la vida cotidiana y la falta de conciencia sobre la seguridad en línea. Este delito, que consiste en obtener, utilizar o asumir la identidad de otra persona sin su consentimiento para cometer fraudes o delitos, puede implicar el acceso a información personal como nombres, números de identificación, contraseñas, datos bancarios o números de tarjetas de crédito, con el objetivo principal de obtener beneficios financieros, realizar compras, abrir cuentas bancarias o solicitar préstamos en nombre de la víctima, dañando su reputación y su historial crediticio, y generando graves problemas legales y financieros. En la era digital, donde los datos personales están frecuentemente expuestos en línea, este delito se ha convertido en una preocupación creciente tanto para individuos como para empresas; por ello, es esencial protegerse realizando transacciones en sitios seguros y previamente validados, utilizando contraseñas fuertes o sistemas de administración de tokens, aprendiendo sobre ciberseguridad, evitando caer en engaños de delincuentes que se aprovechan de las emociones, manejando redes sociales con precaución y evitando compartir información que no se divulgaría en persona, y minimizando el riesgo de fugas de datos masivas.'
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
