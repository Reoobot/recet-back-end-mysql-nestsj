import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { Padding } from '@mui/icons-material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const navLinks = [
  {
    Contact: 'Contact',
    About_me: 'About me',
    Projects: 'Projects',
    Source:'Source',
    Home:'Home'

  }
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
   
      <Container  sx={{margin:'0 auto', color:'white'}} >
        <Toolbar disableGutters >
          
          <Typography 
            variant="h6"
            noWrap
            component="a"
            
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'white',
              textDecoration: 'none', 
              
            }}
          >
            FREDDY VEGAS
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
              {navLinks.map((navLink, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <ListItemButton href='/'><Typography>{navLink.Home}</Typography></ListItemButton>
                <ListItemButton href='/Projects'><Typography>{navLink.Projects}</Typography></ListItemButton>
                <ListItemButton href='/About me'><Typography>{navLink.About_me}</Typography></ListItemButton>
                <ListItemButton href='/Contact'><Typography>{navLink.Contact}</Typography></ListItemButton>
              
                 
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FREDDY VEGAS
            
          </Typography>
          <Box sx={{ flexShrink: 1, marginLeft:'200px' ,display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((navLink , index) => (
            <>
            <MenuItem key={index}>
            <ListItemButton href='/'><Typography>{navLink.Home}</Typography></ListItemButton>
            <ListItemButton href='/Projects'><Typography>{navLink.Projects}</Typography></ListItemButton>
            <ListItemButton href='/About me'><Typography>{navLink.About_me}</Typography></ListItemButton>
            <ListItemButton href='/Contact'><Typography>{navLink.Contact}</Typography></ListItemButton>
            <ListItemButton href='https://github.com/Reoobot'>
              <Typography textTransform='none'> {navLink.Source}</Typography></ListItemButton>
            </MenuItem>
            </>    
            ))}
          </Box>
        </Toolbar>
      </Container>
  
  );
}
export default ResponsiveAppBar;