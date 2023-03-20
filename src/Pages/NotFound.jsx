import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import ContainerL from '../Components/Layout/ContainerL'
import SearchIcon from '@mui/icons-material/Search';
function NotFound() {
  return (
    <ContainerL>
        <Container>
   
            <Stack my={12} direction={'row'} justifyContent={'center'}>
            <Typography variant='h3' sx={{fontWeight:600}}>
            <Typography variant='h3' textAlign={'center'} >
                    <SearchIcon sx={{fontWeight:600, fontSize:50}} />
            </Typography>     
                OOPS , sorry ! 
                
                This page Not Found 
            </Typography>   
            </Stack>
         
        </Container>
    </ContainerL>
  )
}

export default NotFound