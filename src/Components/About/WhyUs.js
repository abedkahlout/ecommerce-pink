import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
function WhyUs() {
	return (
		<Container>
			<Typography
				variant="h4"
				textAlign={"center"}
				my={5}
				sx={{ fontWeight: 700 }}
			>
				Why Steam
			</Typography>
			<Stack
				direction={"row"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Typography textAlign={"center"} mb={7}>
					<Typography>
						<VerifiedIcon className="pink" fontSize="large" />
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 600 }} my={1}>
						45 Brands
					</Typography>
					<Typography sx={{ width: "90%" }}>
						We have +45 company have a Brand for all worlds
					</Typography>
				</Typography>

				<Typography textAlign={"center"} mb={7}>
					<Typography>
						<LocalShippingIcon className="pink" fontSize="large" />
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 600 }} my={1}>
						Fast Delivery
					</Typography>
					<Typography sx={{ width: "90%" }}>
						We have +45 company have a Brand for all worlds
					</Typography>
				</Typography>

				<Typography textAlign={"center"} mb={7}>
					<Typography>
						<MarkunreadMailboxIcon className="pink" fontSize="large" />
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 600 }} my={1}>
						COD Service
					</Typography>
					<Typography sx={{ width: "90%" }}>
						We have +45 company have a Brand for all worlds
					</Typography>
				</Typography>

				<Typography textAlign={"center"} mb={7}>
					<Typography>
						<VerifiedIcon className="pink" fontSize="large" />
					</Typography>
					<Typography variant="h5" sx={{ fontWeight: 600 }} my={1}>
						100% original
					</Typography>
					<Typography sx={{ width: "90%" }}>
						We have +45 company have a Brand for all worlds
					</Typography>
				</Typography>
			</Stack>
		</Container>
	);
}

export default WhyUs;
