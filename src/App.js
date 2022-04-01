import {AppBar, Typography, createTheme, Box, IconButton, Menu, MenuItem, Tooltip, Avatar, Toolbar} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from './assets/funlearn.png'
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import {Link} from 'react-router-dom';

const custTheme = createTheme({
  palette: {
    primary: {
      main: '#acd234',
    },
    gray: {
      main: 'rgb(34,193,195)',
    }
  },
})

const pages = [{
  label: 'Home',
  link: '/'
},{
  label: 'DUMB CHARADE',
  link: '/dumb-charade'
}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function App() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return <ThemeProvider theme={custTheme}> 
  <AppBar position="static" className="app-bar">
    <Toolbar disableGutters>
      <Typography
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        <img alt="funandlearnlogo" src={Logo} height="40" />
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <div key={page.label}><Link className="menu" to={page.link} onClick={handleCloseNavMenu}>{page.label}</Link></div>
          ))}
        </Menu>
      </Box>
            {/* <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page.label}</Typography>
            </MenuItem> */}
      <Typography
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        <img alt="funandlearnlogo" src={Logo} height="40" />
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Link key={page.label} className="menu" onClick={() => handleCloseNavMenu()} to={page.link}>{page.label}</Link>
        ))}
      </Box>{/* 
          <Button
            key={page.label}
            onClick={() => handleCloseNavMenu()}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.label}
          </Button> */}

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
</AppBar>
</ThemeProvider>
}

export default App;
