import { Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import ContainerL from '../Components/Layout/ContainerL'
import SearchIcon from '@mui/icons-material/Search';
function NotFound() {
  return (
    <ContainerL>
        <Container>
        <Typography
						variant="h6"
						noWrap
			
						sx={{
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: "1rem",
                            justifyContent:'center',
							color: "#F46B5B",
							textDecoration: "none",
                            fontSize:"18px"
						}}
					>
						STEAM
					</Typography>
            <Stack my={12} direction={'row'} justifyContent={'center'}>
            <Typography variant='h3' sx={{fontWeight:600}}>
            <Typography variant='h3' textAlign={'center'} >
                    <SearchIcon sx={{fontWeight:600, fontSize:50}} />
            </Typography>     
                OOPS , sorry ! 
                
                This page Not Found 
            </Typography>   
            </Stack>
			<Typography
						variant="h6"
						noWrap
			
						sx={{
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: "1rem",
                            justifyContent:'center',
							color: "#F46B5B",
							textDecoration: "none",
                            fontSize:"18px"
						}}
					>
						STEAM
					</Typography>
        </Container>
    </ContainerL>
  )
}

export default NotFound