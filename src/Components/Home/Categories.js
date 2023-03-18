import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LaptopIcon from "@mui/icons-material/Laptop";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import CameraIcon from "@mui/icons-material/Camera";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import EarbudsBatteryIcon from "@mui/icons-material/EarbudsBattery";

function Categories() {
	return (
		<Container  sx={{my:7}}>
            <Typography variant="h5" sx={{my:3, fontWeight:700}}>Category</Typography>
			<Stack direction={{xs:"column" , md:"row"}} justifyContent={{xs:"start" , md:"space-between"}}>
				<Typography>
					<Link to={"/"} className="links-active">
                        <LaptopIcon />
						Computers && Laptops
					</Link>
				</Typography>
				<Typography>
					<Link to={"/"} className="links">
                        <TabletMacIcon />
						Mobile && Ipads
					</Link>
				</Typography>
				<Typography>
					<Link to={"/"} className="links">
                        <CameraIcon />
						Camera
					</Link>
				</Typography>
				<Typography>
					<Link to={"/"} className="links">
                        <ConnectedTvIcon/>
						Tv & Samrt Tv
					</Link>
				</Typography>
				<Typography>
					<Link to={"/"} className="links">
                        <BroadcastOnHomeIcon />
						Home App
					</Link>
				</Typography>
				<Typography>
					<Link to={"/"} className="links">
                        <EarbudsBatteryIcon />
						Accessories
					</Link>{" "}
				</Typography>
				<Typography>
					<Link to={"/"} className="links">
                        <DevicesOtherIcon />
						Other Categories
					</Link>
				</Typography>
			</Stack>
		</Container>
	);
}

export default Categories;
