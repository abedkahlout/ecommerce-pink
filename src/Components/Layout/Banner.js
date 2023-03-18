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
					justifyContent={"space-between"}
					alignItems={{ xs: "start", md: "center" }}
					sx={{ height: "155px", color: "white" }}
				>
					<Box>
						<Typography variant="h4" sx={{ fontSize: "2.7rem" }}>
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
