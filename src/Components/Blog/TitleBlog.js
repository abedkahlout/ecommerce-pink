import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";


import { Stack } from "@mui/system";
function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

function TitleBlog() {
	return (
        <Container>
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" my={4}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>

                <Typography className="pink">Blog</Typography>
            </Breadcrumbs>
        </div>
        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant="h4" sx={{fontWeight:700}} mb={2}>Latest Blog</Typography>
            <Typography textAlign={'center'} mb={7} sx={{width:"60%" , color:"gray"}}>
                We hold ourselves and each other accountable for demonstrating the
                Leadership Principles through our actions every day.
            </Typography>
            
        </Stack>
    </Container>
	);
}

export default TitleBlog;
