import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";


const comments = [{
	name:"AbedElqader KH",
	stars:5,
	comment:"	Now, windows 11 was already installed, but I did have to disable the S mode. Googled some directions on this process. Office only has a trial"
},
{
	name:"Mohammed St",
	stars:5,
	comment:"	Now, windows 11 was already installed, but I did have to disable the S mode. Googled some directions on this process. Office only has a trial"
},
{
	name:"Ahmed Moh",
	stars:5,
	comment:"	Now, windows 11 was already installed, but I did have to disable the S mode. Googled some directions on this process. Office only has a trial"
},
{
	name:"Ramy sd",
	stars:5,
	comment:"	Now, windows 11 was already installed, but I did have to disable the S mode. Googled some directions on this process. Office only has a trial"
}
]


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function Reviews() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Reviews (12)" {...a11yProps(0)} />
					<Tab label="Description" {...a11yProps(1)} />
					<Tab label="Gift Cards" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				{comments.map((e)=><>
					<Box mb={2}>
					<Stack direction={"row"} alignItems={"center"} gap={2}>
						<Avatar alt="Abed Elqader" src="/static/images/avatar/1.jpg" />
						<Stack>
							<Typography>{e.name}</Typography>
							<Typography>
								<StarIcon fontSize="small" className="star-color" />{" "}
								<StarIcon fontSize="small" className="star-color" />{" "}
								<StarIcon fontSize="small" className="star-color" />{" "}
								<StarIcon fontSize="small" className="star-color" />{" "}
								<StarIcon fontSize="small" className="star-color" />{" "}
							</Typography>
						</Stack>
					</Stack>
					<Typography>
					{e.comment}
					</Typography>
				</Box>
				
				</>)}

			</TabPanel>
			<TabPanel value={value} index={1}>
				<Typography>
					Key Features and Benefits: CPU: 11th Gen Intel Core i3-1115G4 Dual-Core
					3.0GHz Processor (6MB Intel Smart Cache, up to 4.10GHz) Memory: Up to 20GB
					DDR4 RAM Hard Drive: Up to 1TB PCIe NVMe M.2 Solid State Drive Operating
					System: Windows 11 Home Display: 15.6" HD Touchscreen Screen Resolution:
					1366 x 768 Backlit Keyboard: No Ports: 2 x USB 3.2 Gen 1 Type-A, 1 x USB
					2.0 Type-A, 1 x HDMI, 1 x Combination Audio Jack Video: Intel UHD Graphics
				</Typography>{" "}
			</TabPanel>
			<TabPanel value={value} index={2}>
                -Bag 
                -Mouse
                -Flash
			</TabPanel>
		</Box>
	);
}
