import { Box, Modal, Typography } from '@mui/material'
import palabras from '../../assets/palabras.png'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
      <Typography variant='h4'
                     marginTop='30px'
                     color='white'
                     textAlign='center'
                     marginBottom='20px'
                     data-aos="flip-left">
                     About me
        </Typography>

        <div className='About'>


        <Box>
          <Typography variant='h6'color='white' marginBottom='30px' marginTop='30px' data-aos="fade-right">
          I am a junior developer passionate about constant learning,
          for designing digital products, web applications and, above all, researching
          in the user experience to innovate in new products.
          </Typography>

          <Typography variant='h6' color='white' marginBottom='30px' marginTop='30px' data-aos="fade-left">
          I like locution and the radio 📻 🎙🎚🎛, as well as playing musical instruments
          🎹🎸
          </Typography>
          <Typography variant='h6' color='white' data-aos="fade-right" >
          I leave you the link of some of my postcasts, which deal with emotional issues:
          https://spotifyanchor-web.app.link/e/lc1ECYXz7yb
          </Typography>
          <Link to='https://spotifyanchor-web.app.link/e/lc1ECYXz7yb' target='blank'>
              <img className='img_sound' data-aos="fade-left"
              src={palabras} alt="palabras" /></Link>
        </Box>
        </div>

    </div>
  )
}

export default About
