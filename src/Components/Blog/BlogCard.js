import { Pagination, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const blogs = [
	{
		img: "/images/pc.webp",
		title: "Technology and AI in Future",
		description:
			"Istanbul – 1 February 2023 – The Coalition for Digital Africa announced another major initiative aimed at strengthening the ",
		admin: "Sary",
	},

	{
		img: "/images/pc2.webp",
		title: "Coalition for Digital Africa",
		description:
			"Istanbul – 1 February 2023 – The Coalition for Digital Africa announced another major initiative aimed at strengthening the ",
		admin: " AHmed",
	},

	{
		img: "/images/pc.webp",
		title: "Technology and AI in Future",
		description:
			"Istanbul – 1 February 2023 – The Coalition for Digital Africa announced another major initiative aimed at strengthening the ",

		admin: " ABED",
	},

	{
		img: "/images/pc2.webp",
		title: "Technology and AI in Future",
		description:
			"Istanbul – 1 February 2023 – The Coalition for Digital Africa announced another major initiative aimed at strengthening the ",

		admin: " osama",
	},

	{
		img: "/images/pc.webp",
		title: "Technology and AI in Future",
		description:
			"Istanbul – 1 February 2023 – The Coalition for Digital Africa announced another major initiative aimed at strengthening the ",

		admin: " Mohammed",
	},
	{
		img: "/images/pc.webp",
		title: "Technology and AI in Future",
		description:
			"Istanbul – 1 February 2023 – The Coalition for Digital Africa announced another major initiative aimed at strengthening the ",

		admin: "Yousef",
	},
];
function BlogCard() {
	return (
		<div>
			<Stack direction={"row"} justifyContent={"center"} gap={2} flexWrap="wrap">
				{blogs.map((e) => (
					<Paper elevation={3}>
						<Card
							sx={{
								maxWidth: 240,
								maxHeight: 450,
								borderRadius: 2,
								boxShadow: "none",
							}}
						>
							<CardMedia
								component="img"
								alt="green iguana"
								height="200"
								image={e.img}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
									sx={{ fontWeight: 700 }}
								>
									{e.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{e.description}
								</Typography>
							</CardContent>
							<CardActions>
								<Typography> {e.admin}</Typography>
							</CardActions>
						</Card>
					</Paper>
				))}
			</Stack>
			<Stack direction={"row"} mt={3} justifyContent={"center"}>
				<Pagination count={4} />
			</Stack>
		</div>
	);
}

export default BlogCard;
