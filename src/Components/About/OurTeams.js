import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

function OurTeams() {
	return (
		<Container elevation={3}>
			<Typography
				variant="h4"
				textAlign={"center"}
				sx={{ fontWeight: 700 }}
				my={2}
			>
				Our Team
			</Typography>
			<Typography textAlign={"center"}>
				We Have best TEAM in middle east (Developers , Marketing , Designer){" "}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"}>
				<Card sx={{ minWidth: 290, my: 3 }}>
					<CardMedia
						sx={{ height: 240 }}
						image="/images/person.webp"
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							ABED KAHLOUT
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Front End DEveloper
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ minWidth: 290, my: 3 }}>
					<CardMedia
						sx={{ height: 240 }}
						image="/images/person.webp"
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							ABED KAHLOUT
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Front End DEveloper
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ minWidth: 290, my: 3 }}>
					<CardMedia
						sx={{ height: 240 }}
						image="/images/person.webp"
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							ABED KAHLOUT
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Front End DEveloper
						</Typography>
					</CardContent>
				</Card>
			</Stack>
		</Container>
	);
}

export default OurTeams;
