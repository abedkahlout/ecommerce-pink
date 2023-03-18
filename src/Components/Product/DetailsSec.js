import React from "react";
import {
	Breadcrumbs,
	Button,
	Divider,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import "./ProductDetails.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
function DetailsSec() {
	return (
		<div>
			{" "}
			<div role="presentation">
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						Product
					</Link>
					<Typography color="text.primary">Laptop MSI 2022</Typography>
				</Breadcrumbs>
			</div>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Stack my={1} direction={"row"} alignItems={"center"}>
					5.0 <StarIcon fontSize="small" className="star-color" />{" "}
					<StarIcon fontSize="small" className="star-color" />{" "}
					<StarIcon fontSize="small" className="star-color" />{" "}
					<StarIcon fontSize="small" className="star-color" />{" "}
					<StarIcon fontSize="small" className="star-color" />
					preview (22)
				</Stack>
				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<FavoriteIcon className="basic-color" />
					Add To favourite{" "}
				</Stack>
			</Stack>
			<Typography my={1} variant="h5">
				Laptop MSI 2022
			</Typography>
			<Typography variant="h5">999.00$</Typography>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				my={3}
			>
				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<LocalShippingIcon className="basic-color" />{" "}
					<Typography>Fast Delivery</Typography>
				</Stack>
				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<InventoryIcon className="basic-color" />
					<Typography>Best way for shoping</Typography>
				</Stack>
				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<ConfirmationNumberIcon className="basic-color" />
					<Typography>Best way for Ticket</Typography>
				</Stack>
			</Stack>
			<Divider />
			<Typography variant="h5" my={3}>
				Description
			</Typography>
			<Typography my={1} variant="body1">
				- Memory & Storage Memory : is 8GB high-bandwidth RAM to smoothly run
				multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe
				Solid State Drive which allows to fast bootup and data transfer{" "}
			</Typography>
			<Typography my={1} variant="body1">
				- Processor : 11th Gen Intel Core i3-1115G4 Dual-Core 3.0GHz Processor (6MB
				Intel Smart Cache, up to 4.10GHz) Intel UHD Graphics
			</Typography>
			<Typography my={1} variant="body1">
				- Screen : 15.6" HD Touchscreen (1366 x 768) Display
			</Typography>
			<Typography my={1} variant="body1">
				- Operating System : Windows 11 Home
			</Typography>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				my={3}
			>
				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<Typography>Quantity</Typography>
					<Button sx={{ bgcolor: " #f46b5b", color: "white", minWidth: 50 }}>
						+
					</Button>
					<Typography>0</Typography>

					<Button sx={{ bgcolor: " #f46b5b", color: "white", minWidth: 50 }}>
						-
					</Button>
				</Stack>

				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<Button sx={{ bgcolor: " #f46b5b", color: "white", minWidth: 150 }}>
						Add To Card
					</Button>
				</Stack>
			</Stack>
		</div>
	);
}

export default DetailsSec;
