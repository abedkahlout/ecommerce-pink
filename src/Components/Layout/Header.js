import { Container } from "@mui/material";
import { borderBottom, Box, Stack } from "@mui/system";
import React from "react";
import "./Layout.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
	return (
		<Container>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				justifyContent={"space-between"}
				alignItems={"center"}
				className="hed"
				sx={{ height: 45, borderBottom: "1px solid #dfdfdf" }}
			>
				<Box>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
						gap={1}
					>
						<LinkedInIcon fontSize="small" className="Icons-header" />
						<TwitterIcon fontSize="small" className="Icons-header" />
						<FacebookIcon fontSize="small" className="Icons-header" />
						<InstagramIcon fontSize="small" className="Icons-header" />
					</Stack>
				</Box>
				<Box>
					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
						gap={5}
					>
						<Stack direction={'row'} alignItems={'center'} gap={1}>
							{" "}
							<PhoneIcon fontSize="small" className="Icons-header2" />
							+972595855555
						</Stack>
						<Stack direction={'row'} alignItems={'center'} gap={1}>
							{" "}
							<MarkEmailReadIcon fontSize="small" className="Icons-header2" />
							abed@gmail.com
						</Stack>
						<Stack direction={'row'} alignItems={'center'} gap={1}>
							{" "}
							<PersonIcon fontSize="small" className="Icons-header2" />
							account
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}

export default Header;
