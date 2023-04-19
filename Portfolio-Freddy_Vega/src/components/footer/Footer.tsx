import { Box, Button, Container, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
  return (
    <div>
      <Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
                marginTop:'50px',
			
				gap: '20px',
			}}
		>
			<Typography variant="body1" color='white'>
            ©️ {new Date().getFullYear()} - Freddy vegas,  All rights reserved.{' '}
			</Typography>
			<Box>
			<Button href='mailto:vegasfalexis@gmail.com' target='_blank'>
				<MailOutlineIcon sx={{color:'white'}}/>
			</Button>
			<Button href='https://www.linkedin.com/in/freddy-vegas/' target='_blank'>
				<LinkedInIcon sx={{color:'white'}}/>
			</Button>
			<Button href='https://github.com/Reoobot' target='_blank'>
				<GitHubIcon sx={{color:'white'}}/>
			</Button>
			<Button href='https://www.youtube.com/@palabrasalcorazonconfreddy2210' target='_blank'>
				<YouTubeIcon sx={{color:'white'}}/>
			</Button>
			</Box>
		</Container>
    </div>
  )
}

export default Footer
