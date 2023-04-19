import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/ResponsiveAppBar'
import ResponsiveAppBar from '../navigation/ResponsiveAppBar'
import Footer from '../footer/Footer'
import { Box } from '@mui/material'

function Layout() {
  return (
    <div>
      <Box  maxWidth='1920px'>
        <ResponsiveAppBar/>
            <Outlet />
            <Box >
                <Footer />
            </Box>
      </Box>
    </div>
  )
}

export default Layout
