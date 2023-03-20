import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Layout.css";

function Banner() {
	return (
		<div className="banner">
			<Container>
				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent={{ xs: "center", md: "space-between" }}
					alignItems={{ xs: "center", md: "center" }}
					sx={{ height: "155px", color: "white" }}
					gap={{ xs: "10px", md: "0" }}
				>
					<Box>
						<Typography variant="h4" sx={{ fontSize: {xs:"1.75rem" , lg:"2.75rem"} }}>
							Join our newselleter now !
						</Typography>
						<Typography variant="caption">
							Join our newselleter now ! Join our newselleter now !
						</Typography>
					</Box>
					<Box>
						<Typography variant="h6">
							<Button
								variant="outlined"
								sx={{ border: "1px solid white", width: "200px", color: "white" }}
							>
								Join Now
							</Button>
						</Typography>
					</Box>
				</Stack>
			</Container>
		</div>
	);
}

export default Banner;
