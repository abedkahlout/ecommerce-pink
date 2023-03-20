import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Layout.css";
import i18next from "i18next";
import { alpha, InputBase, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ["Home", "About", "Product", "Blog", "Contact"];
const settings = ["AR", "En"];

function Navbar() {
	function changeLanugage(lang) {
		i18next.changeLanguage(lang);
		if (lang === "ar") {
			document.body.dir = "rtl";
		} else {
			document.body.dir = "ltr";
		}
	}
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const styling = {
		bgcolor: "white",
		boxShadow: "none",
	};
	return (
		<AppBar position="static" sx={styling}>
			<Container>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
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
					</Typography>

					<Box
						sx={{ color: "black", flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="black"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
								color: "black",
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Steam
					</Typography>
					<Box
						sx={{ color: "black", flexGrow: 1, display: { xs: "none", md: "flex" } }}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ m: 2, color: "black", display: "block" }}
							>
								<Link to={page}>{page}</Link>
							</Button>
						))}
					</Box>

					<Box sx={{ color: "black", flexGrow: 0 }}>
						<Tooltip title="Language">
							<Box
								onClick={handleOpenUserMenu}
								sx={{
									color: "white",
									bgcolor: "#F46B5B ",
									py: 0.3,
									px: 1,
									borderRadius: 1,
								}}
							>
								Language
							</Box>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleCloseUserMenu}>
								<Stack direction={"column"} gap={2}>
									<Button onClick={() => changeLanugage("ar")} variant="outlined">
										AR
									</Button>
									<Button onClick={() => changeLanugage("en")} variant="outlined">
										EN
									</Button>
								</Stack>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
