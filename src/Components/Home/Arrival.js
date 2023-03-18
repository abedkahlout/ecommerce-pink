import { Container, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
function Arrival() {
	return (
		<Container sx={{ my: 3 }}>
			<Stack direction={"row"} justifyContent="space-between">
				<Typography variant="h5" sx={{ my: 3, fontWeight: 700 }}>
					New Arrival
				</Typography>
				<Typography variant="body1" sx={{ my: 3, color: "#f46b5b" }}>
					View all
				</Typography>
			</Stack>
			<Stack direction={{xs:"column" , md:"row"}} justifyContent="space-between"  gap={2}>
				<Box className="border-box">
					<Box className="newTag"> New</Box>
					<img src="/images/iphone.jpeg" width={250} height={180} />
					<Stack direction={"column"}>
						<Typography variant="h5">Smart Tv</Typography>
						<Typography variant="h5" sx={{ fontWeight: 700 }}>
							450$
						</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 600 , fontSize:"15px" }}>
							<Stack direction={"row"} alignItems={"center"}>
								5/4.5 <StarIcon sx={{ color: "#f38406" , fontSize:"15px"  }} />
							</Stack>{" "}
						</Typography>
					</Stack>
				</Box>
				<Box className="border-box">
					<Box className="newTag"> New</Box>

					<img src="/images/iphone.jpeg" width={250} height={180} />
					<Stack direction={"column"}>
						<Typography variant="h5">Smart TV</Typography>
						<Typography variant="h5" sx={{ fontWeight: 700 }}>
							400$
						</Typography>
						<Typography variant="h5" sx={{ fontWeight: 600 , fontSize:"15px" }}>
							<Stack direction={"row"} alignItems={"center"}>
								5/4.5 <StarIcon sx={{ color: "#f38406" , fontSize:"15px"  }} />
							</Stack>{" "}
						</Typography>
					</Stack>
				</Box>{" "}
				<Box className="border-box">
					<Box className="newTag"> New</Box>

					<img src="/images/iphone.jpeg" width={250} height={180} />
					<Stack direction={"column"}>
						<Typography variant="h5">Smart TV</Typography>
						<Typography variant="h5" sx={{ fontWeight: 700 }}>
							400$
						</Typography>
						<Typography variant="h5" sx={{ fontWeight: 600 , fontSize:"15px" }}>
							<Stack direction={"row"} alignItems={"center"}>
								5/4.5 <StarIcon sx={{ color: "#f38406" , fontSize:"15px"  }} />
							</Stack>{" "}
						</Typography>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}

export default Arrival;
