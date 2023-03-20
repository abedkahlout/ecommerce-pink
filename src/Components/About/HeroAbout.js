import { Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./About.css";
import { Stack } from "@mui/system";
function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}
function HeroAbout() {
	return (
		<Container>
			<div role="presentation" onClick={handleClick}>
				<Breadcrumbs aria-label="breadcrumb" my={4}>
					<Link underline="hover" color="inherit" href="/">
						Home
					</Link>

					<Typography className="pink">About</Typography>
				</Breadcrumbs>
			</div>
			<Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
				<Typography variant="h4" sx={{fontWeight:700}} mb={2}>About Steam</Typography>
				<Typography textAlign={'center'} mb={7} sx={{width:"60%" , color:"gray"}}>
					We hold ourselves and each other accountable for demonstrating the
					Leadership Principles through our actions every day. Our Leadership
					Principles describe how Amazon does business, how leaders lead, and how we
					keep the customer at the center of our decisions.
				</Typography>
                
                <img src="/images/buis.jpg" className="abtImaegs" height={"450px"} width="100%" />
			</Stack>
		</Container>
	);
}

export default HeroAbout;
