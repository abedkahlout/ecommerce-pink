import React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	Rating,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import "./Products.css";
import StarIcon from "@mui/icons-material/Star";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valueLabelFormat(value) {
	const units = ["Dollar", "Dollar", "Dollar", "Dollar"];
	let unitIndex = 0;
	let scaledValue = value;
	return `${scaledValue} ${units[unitIndex]}`;
}

const categouries = [
	{
		id: 25,
		name: "Computers && Laptops ",
	},
	{
		id: 200,
		name: "Mobile && Ipads",
	},

	{
		id: 21,
		name: "Camera",
	},

	{
		id: 83,
		name: "Tv & Samrt Tv",
	},
	{
		id: 251,
		name: "Home App",
	},

	{
		id: 400,
		name: "Accessories",
	},
	{
		id: 800,
		name: "Other Categories",
	},
];
function Filter() {
	const [value, setValue] = React.useState(10);
	const handleChange = (event, newValue) => {
		if (typeof newValue === "number") {
			setValue(newValue);
		}
	};
	return (
		<Box sx={{ borderRadius: 2, border: "1px solid rgb(196, 196, 196)", p: 2 }}>
			<Typography sx={{ fontWeight: 700 }}>All Categories</Typography>
			{categouries.map((e) => (
				<>
					<Typography variant="body2" my={1}>
						{e.name} {e.id}
					</Typography>
				</>
			))}
			<Divider />
			<Accordion sx={{ boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Filter by price</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<Slider
							value={value}
							min={0}
							step={50}
							max={1000}
							getAriaValueText={valueLabelFormat}
							valueLabelFormat={valueLabelFormat}
							onChange={handleChange}
							valueLabelDisplay="auto"
							aria-labelledby="non-linear-slider"
						/>
						<Typography id="non-linear-slider" gutterBottom>
							Price: {valueLabelFormat(value)}
						</Typography>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Filter by Location</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox defaultChecked />}
							label="Palestine"
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox defaultChecked />}
							label="Jordan"
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox defaultChecked />}
							label="Egypt"
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox defaultChecked />}
							label="Syria"
						/>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Filter by Rating</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox defaultChecked />}
							label={
								<Rating
									name="text-feedback"
									value={1}
									readOnly
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
								/>
							}
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox />}
							label={
								<Rating
									name="text-feedback"
									value={2}
									readOnly
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
								/>
							}
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox />}
							label={
								<Rating
									name="text-feedback"
									value={3}
									readOnly
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
								/>
							}
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox />}
							label={
								<Rating
									name="text-feedback"
									value={4}
									readOnly
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
								/>
							}
						/>
						<FormControlLabel
							sx={{ width: "100%" }}
							control={<Checkbox />}
							label={
								<Rating
									name="text-feedback"
									value={5}
									readOnly
									emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
								/>
							}
						/>
					</Typography>
				</AccordionDetails>{" "}
			</Accordion>

			<Accordion sx={{ boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Filter by Person</Typography>
				</AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>

			<Accordion sx={{ boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Filter by Brand</Typography>
				</AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>

			<Accordion sx={{ boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Filter by Payment</Typography>
				</AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>
		</Box>
	);
}

export default Filter;
