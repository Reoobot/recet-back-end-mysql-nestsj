import { Box, Button, ImageListItem, Typography } from '@mui/material'
import cv from '../../assets/CV_Video.mp4'
import Curriculum from '../../assets/curriculum.png'

export default function Cv() {
  return (
    <div>
      <Typography variant='h4'
                     marginTop='30px'
                     color='white'
                     textAlign='center'
                     marginBottom='20px'
                     data-aos="flip-left">
                     Curriculum
        </Typography>
          <div className='video_Button'>
        
            <div className='video'>
              <video className="cv-video" autoPlay muted loop>
                <source src={cv} type="video/mp4"/>
              </video>

                <div className='tex_button' data-aos="fade-right">
                  <Button href='https://youtu.be/OfHpUpm2kwM' target='blank' >https://youtu.be/OfHpUpm2kwM</Button>
                </div>
            </div>
            <div data-aos="fade-left">
              <ImageListItem sx={{ width: '400px', borderRadius:'10px', marginBottom:'20px'}} className='img_cv'>
                                <img style={{borderRadius:'20px'}} src={Curriculum} alt="Biblioteca de les cosas" />
              </ImageListItem>
                      <Button 
                        variant="contained"
                        data-aos="fade-left"
                        sx={{width:'120px', height:'40px', backgroundColor:'#7A726E'}}
                        href="https://drive.google.com/file/d/1UdnqhrMvLe6MmEgqzfmDOGMw7bAIItsK/view?usp=sharing" target="_blank"
                    > <Typography 
                        variant='h6' 
                        fontWeight='bold'
                    >DOWNLOAD
                        </Typography>
                    </Button>
            </div>
          </div>


    </div>
  )
}
