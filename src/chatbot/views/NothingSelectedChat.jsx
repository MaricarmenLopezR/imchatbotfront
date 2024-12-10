import { QuestionMark } from '@mui/icons-material'
import { Chip, Grid2, Typography } from '@mui/material'
/*
import { Link } from 'react-router-dom'
import { Alert, Chip, Grid2, Typography } from '@mui/material'
import { CheckCircleOutline, QuestionAnswer , QuestionMark } from '@mui/icons-material'
 */

export const NothingSelectedChat = ({ handleClick }) => {
  return (
    <Grid2
      container
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 15px)',
        backgroundColor: 'secondary.main'
      }}
    >

      <Grid2>
        <Typography color='white' pb='10px' sx={{
          fontSize: { xs: '1.5rem', sm: '2.1rem', md: '2.5rem', lg: '2.8rem' }
        }}>¡Hola! soy Anita</Typography>
      </Grid2>

      <Grid2>
        <Typography color='white' pb='50px' sx={{
          fontSize: { xs: '1.5rem', sm: '2.1rem', md: '2.5rem', lg: '2.8rem' }
        }}>¿Con qué puedo ayudarte?</Typography>
      </Grid2>

      <Grid2 item xs={ 1 } sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: { xs: '100%', sm: '90%', md: '90%', lg: '55%' }
      }} >
        <Chip
          icon={<QuestionMark color='primary' />}
          label="Respuestas a las preguntas frecuentes"
          onClick={() => handleClick('Faqs')}
          variant="outlined"
          sx={{
            marginBottom: '15px',
            color: 'white',
            width: { sm: '80%', xs: '85%' },
            height: '5.2vh',
            fontSize: { xs: '0.75rem', sm: '1.1rem', md: '1.5rem', lg: '1.7rem' }
          }}
        />
        {/* <Chip
          icon={<QuestionAnswer color='primary' />}
          label="Chatbot de Inside Out"
          onClick={() => handleClick('ChatComponent')}
          variant="outlined"
          disabled
 // Quitar para habilitar la barra lateral
          sx={{
            marginBottom: '15px',
            color: 'white',
            width: { sm: '80%', xs: '85%' },
            height: '5.2vh',
            fontSize: { xs: '0.8rem', sm: '1.3rem', md: '1.8rem', lg: '1.9rem' }
          }}
        /> */}

          {/* <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity="success"
            sx={{
              backgroundColor: 'transparent',
              borderRadius: '30px',
              width: { sm: '80%', xs: '85%' },
              justifyContent: 'center',
              color: 'white'
            }}>
            Al enviar un mensaje, aceptas nuestros
            <Link onClick={() => handleClick('Terms')} style={{ color: '#6b8d2e', textDecoration: 'underline' }}> Términos </Link>
            y reconoces que leíste nuestra
            <Link onClick={() => handleClick('PrivacyPolicy')} style={{ color: '#6b8d2e', textDecoration: 'underline' }}> Política de privacidad</Link>
          </Alert> */}
      </Grid2>

    </Grid2>
  )
}
