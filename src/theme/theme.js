import { createTheme } from '@mui/material/styles'

// Create a theme instance.
export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#6b8d2e'
    },
    secondary: {
      main: '#1f1e3e'
    },
    error: {
      main: '#bd6c82'
    }
  }
})
