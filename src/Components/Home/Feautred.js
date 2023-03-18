import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Home.css";
function Feautred() {
	return (
		<Container sx={{ my: 3 }}>
			<Typography variant="h5" sx={{ my: 5, fontWeight: 700 }}>
				Featured Product
			</Typography>
			<Stack direction={{ xs: "column", md: "row" }} justifyContent={{ xs: "center", md: "space-between" }}  alignItems={{ xs: "center", md: "start" }}>
				<Box className="heighes-card">
					<Typography variant="h5">Laptop MSI 2022</Typography>
					<Stack direction={"row"} gap={2} alignItems={"center"}>
						<Typography className="pre-price">500$</Typography>-
						<Typography className="new-price">400$</Typography>
					</Stack>
					<img src="/images/comp.webp" />
				</Box>
				<Box>
					<Stack gap={2}>
						<Box className="norm-card">
							{" "}
							<Typography variant="h5">TV LG 2022</Typography>
							<Stack direction={"column"} gap={2} alignItems={"center"}>
								<Typography className="pre-price">500$</Typography>-
								<Typography className="new-price">400$</Typography>
							</Stack>
							<img src="/images/Tv.webp" width={240} height={200} />
						</Box>
						<Box className="norm-card">
							<Typography variant="h5">Watch Clock 2022</Typography>
							<Stack direction={"column"} gap={2} alignItems={"center"}>
								<Typography className="pre-price">800$</Typography>-
								<Typography className="new-price">699$</Typography>
							</Stack>
							<img src="/images/watch.jpg" width={200} height={200} />
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}

export default Feautred;
