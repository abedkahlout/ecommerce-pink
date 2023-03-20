import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Blog.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const categories = [
	"Computers && Laptops",
	"Mobile && Ipads",
	"Camera",
	"Tv & Samrt Tv",
	"Home App",
];

const Tags = [
	" Technology",
	"Mobiles World",
	"AI",
	"Chat GPT 4 ",
	"Nokia Logo",
];
function BlogFilter() {
	return (
		<div className="BlogsCont">
			<Stack direction={"row"}>
				<TextField
					id="outlined-basic2"
					placeholder="Search Item Here"
					fullWidth
					variant="outlined"
				/>
				<Button className="srch">
					<SearchIcon />
				</Button>
			</Stack>
			<Box
				sx={{
					my: 3,
					borderRadius: 2,
					border: "1px solid rgb(196, 196, 196)",
					p: 2,
				}}
			>
				<Typography
					sx={{
						mx: 3,
						mb: 2,
                        fontWeight:600
					}}
				>
					Categories
				</Typography>
				{categories.map((e) => (
					<Stack direction={"row"} alignItems="center">
						<ArrowRightIcon />
						{e}
					</Stack>
				))}
			</Box>
            <Box
				sx={{
					my: 3,
					borderRadius: 2,
					border: "1px solid rgb(196, 196, 196)",
					p: 2,
				}}
			>
				<Typography
					sx={{
						mx: 3,
						mb: 2,
                        fontWeight:600
					}}
				>
					Tags
				</Typography>
				{Tags.map((e) => (
					<Stack direction={"row"} alignItems="center">
						<ArrowRightIcon />
						{e}
					</Stack>
				))}
			</Box>
		</div>
	);
}

export default BlogFilter;
