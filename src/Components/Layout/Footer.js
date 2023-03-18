import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Layout.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
	return (
		<Box sx={{ bgcolor: "#FAF3F2", p: 5 }}>
			<Container>
				<Grid container m={0} p={0}>
					<Grid item xs={6} lg={6}>
						<Stack direction={"column"} gap={1}>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href="/"
								sx={{
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "#F46B5B",
									textDecoration: "none",
								}}
							>
								STEAM
							</Typography>{" "}
							<Typography sx={{ width: "50%" }}>
								Join our newselleter now ! Join our newselleter now !
							</Typography>
							<Stack direction={"row"} gap={1} alignItems={"center"}>
								{" "}
								<LocalPhoneIcon className="IconsFooter" />
								97054111181
							</Stack>
							<Stack direction={"row"} gap={1} alignItems={"center"}>
								{" "}
								<EmailIcon className="IconsFooter" />
								Abedasl@gmail.com
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={6} lg={2}>
						<Stack direction={"column"} gap={1}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									fontFamily: "monospace",
									fontWeight: 700,
									color: "black",
								}}
							>
								Company
							</Typography>
							<Typography>About</Typography>
							<Typography>product</Typography>
							<Typography>blog </Typography>
							<Typography>contact</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} lg={2}>
						<Stack direction={"column"} gap={1}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									fontFamily: "monospace",
									fontWeight: 700,
									color: "black",
								}}
							>
								Information
							</Typography>{" "}
							<Typography>Help Career</Typography>
							<Typography>Payment Methods</Typography>
							<Typography>Returns </Typography>
							<Typography>Privacy && Policy</Typography>
						</Stack>
					</Grid>{" "}
					<Grid item xs={6} lg={2}>
						<Stack direction={"column"} gap={1}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									fontFamily: "monospace",
									fontWeight: 700,
									color: "black",
								}}
							>
								Follow US{" "}
							</Typography>{" "}
							<Stack direction={"row"} gap={2}>
								<Typography>
									<InstagramIcon className="FollowUs" />
								</Typography>
								<Typography>
									{" "}
									<TwitterIcon className="FollowUs" />
								</Typography>
								<Typography>
									{" "}
									<FacebookIcon className="FollowUs" />
								</Typography>
							</Stack>
						</Stack>
					</Grid>{" "}
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;
