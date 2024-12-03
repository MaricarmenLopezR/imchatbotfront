import { Box, Typography, Paper } from '@mui/material'

// Componente para un solo mensaje
export const Message = ({ text, isUser }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1
      }}
    >
      <Paper
        sx={{
          p: 1,
          maxWidth: '70%',
          backgroundColor: isUser ? '#4CAF50' : '#E0E0E0',
          color: isUser ? 'white' : 'black',
          borderRadius: 2
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  )
}
