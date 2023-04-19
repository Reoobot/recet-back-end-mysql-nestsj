import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div className='Contac'  data-aos="zoom-in">
      
      <Card style={{maxWidth:450, margin:'0 auto', padding:'20px 5px'}}>
        <CardContent>
          <Typography gutterBottom variant='h5'>Contact Us</Typography>
          <Typography gutterBottom color='secondary' variant='body2'component='p'>Fill up the form and our team will get back
          to you within 24 hours</Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label='First Name' placeholder='Enter first name' variant='outlined' fullWidth required/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='Last Name' placeholder='Enter Last name' variant='outlined' fullWidth required/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type='email' placeholder='Enter email' variant='outlined' fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                <TextField label='Message' multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth required/>
              </Grid>
              <Grid xs={12} item>
               <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
              </Grid>
              
            </Grid>
          </form>
        </CardContent>

      </Card>
    </div>
  )
}

export default Contact
