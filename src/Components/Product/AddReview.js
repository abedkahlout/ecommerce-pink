import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};

function getLabelText(value) {
	return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function AddReview() {
	const [value, setValue] = React.useState(5);
	const [hover, setHover] = React.useState(-1);

	return (
		<div>
			<Typography variant="h6">Add Review</Typography>
			<Typography variant="caption">
				please share your comment for this device
			</Typography>
			<Stack>
				<Typography my={1}>Name *</Typography>
				<TextField id="outlined-basic" variant="outlined" />
				<Typography my={1}>Email *</Typography>
				<TextField id="outlined-basic" variant="outlined" />
				<Typography my={1}>Review *</Typography>
				<TextField
					id="outlined-multiline-static"
					multiline
					rows={4}
					defaultValue="Default Value"
				/>
				<Box
					sx={{
						width: 200,
						display: "flex",
						alignItems: "center",
						mt: 2,
						gap: 2,
					}}
				>
					<Rating
						name="hover-feedback"
						value={value}
						precision={1}
						getLabelText={getLabelText}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						onChangeActive={(event, newHover) => {
							setHover(newHover);
						}}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
					{value !== null && (
						<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
					)}
				</Box>{" "}
				<Button sx={{ mt: 3, bgcolor: " #f46b5b", color: "white", minWidth: 150 }}>
					Add Review
				</Button>{" "}
			</Stack>
		</div>
	);
}

export default AddReview;
