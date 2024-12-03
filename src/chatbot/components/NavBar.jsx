import { MenuOutlined } from '@mui/icons-material'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'

export const NavBar = ({ drawerWidth = 280, changeSideBar, handleClick }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>

        <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx={{ flexGrow: 1 }}>

          <IconButton
            color='inherit'
            edge='start'
            sx = {{ mr: 2 }}
            onClick={changeSideBar}
// Quitar para habilitar la barra lateral
          >
            <MenuOutlined />
          </IconButton>

          <Typography variant='h6' noWrap component='div'>Chatbot Inside Out</Typography>

          <IconButton onClick={() => handleClick('NothingSelectedChat')}>
            <SmartToyIcon color='secondary' />
          </IconButton>
        </Grid2>

      </Toolbar>
    </AppBar>
  )
}
