import { Box, Button, ListItemButton, Typography } from '@mui/material'
import React from 'react'

function Curriculum() {
  return (
    <div>
        <Box marginTop='30px'  display={{ xs:'flex', gap:'1rem' }} justifyContent='center
        '>

        <Button 
            variant="contained"
            sx={{width:'100px', 
            height:'40px', 
            backgroundColor:'#332E30',
            }} href='/Projects'
        > <Typography 
              variant='h6' 
              fontWeight='bold'
        >Project
            </Typography>
        </Button>
            <Button 
                variant="contained"
                sx={{width:'100px', height:'40px', backgroundColor:'#7A726E'}}
                href='/Cv'
            > <Typography 
                variant='h6' 
                fontWeight='bold'
            >CV
                </Typography>
            </Button>
        </Box>

        

     
    </div>
  )
}

export default Curriculum
