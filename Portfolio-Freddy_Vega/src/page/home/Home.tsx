import { Box, ImageListItem, Typography } from '@mui/material'
import logo from '../../assets/Freddyapp.jpeg'
import React from 'react'
import Curriculum from '../../components/cv/Curriculum'

function Home() {
  return (
      <Box margin='2rem'>
            <Box   sx={{
                    mr: 2,
                    display: { xs: 'block', sm:'flex' },
                    flexGrow: 1,
                    alignItems:'center',
                  }}>
              <Box color='white'data-aos="fade-right">
                  <Typography variant='h3'
                              marginTop='30px'>
                                Hola! 👋
                  </Typography>
                  <Typography 
                              variant='h6'
                              textAlign='center'>
                                I'm Freddy, a full-stack developer from Barcelona. nice to me you
                  </Typography>
                          <Curriculum/>
              </Box>
                      <ImageListItem sx={{width:300, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
                        <img style={{borderRadius:'20px'}} src={logo} alt="Biblioteca de les cosas" />
                      </ImageListItem>
              </Box>
        </Box>
  )
}

export default Home
