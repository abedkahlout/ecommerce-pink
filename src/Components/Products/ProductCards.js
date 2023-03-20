import { Button, Checkbox, Grid, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Pagination from '@mui/material/Pagination';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const cards = [
	{
    img:"/images/huawi.png",
		title: "huawi phone best",
		stars: 5,
		descript:
			"ALEXA HAS SKILLS - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.",
		price: 25.99,
	},
  {
    img:"/images/camera.webp",
		title: "Camera kanon Pro",
		stars: 5,
		descript:
			"ALEXA HAS SKILLS - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.",
		price: 66.99,
	},
  {
    img:"/images/comp.webp",
		title: "Laptop MSI 2022",
		stars: 5,
		descript:
			"ALEXA HAS SKILLS - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.",
		price: 80.99,
	},
  {
    img:"/images/iphone.jpeg",
		title: "Iphone 13promax ",
		stars: 5,
		descript:
			"ALEXA HAS SKILLS - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.",
		price: 150.99,
	},
];
function ProductCards() {
	return (
		<div>
			<Typography variant="body2" sx={{ color: "GrayText" }}>
				Viewing 20 of 150 product
			</Typography>
			{cards.map((e) => (
				<>
					<Box>
						<Grid container spacing={2} my={3}>
							<Grid item xs={4}>
								<img
									src={e.img}
									className="b-rdius"
									width={"100%"}
									height={"200px"}
								/>
							</Grid>
							<Grid item xs={8}>
								<Stack direction={"row"} alignItems={"center"}>
									5.0{" "}
									<Rating
										name="text-feedback"
										value={e.stars}
										readOnly
										precision={1}
										emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="small" />}
									/>
								</Stack>
								<Typography sx={{ fontWeight: 700, fontSize: "18px" }} my={1}>
                {e.title}
								</Typography>
								<Stack
									direction={"row"}
									alignItems={"center"}
									justifyContent={"space-between"}
									mt={2}
								>
									<Typography sx={{ fontSize: 14, width: "70%" }}>
										{" "}
									{e.descript}
									</Typography>
									<Typography className="pink" sx={{ fontSize: 32, fontWeight: 700 }}>
										{e.price} $
									</Typography>
								</Stack>

								<Stack
									direction={"row"}
									alignItems={"center"}
									justifyContent={"space-between"}
									mt={3}
								>
									<Button className="pink-btn">ADD To Card</Button>
									<Typography>
										<Checkbox
											{...label}
											icon={<FavoriteBorder />}
											checkedIcon={<Favorite />}
										/>
										Add To Favourite
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</Box>

				</>
			))}
      <Stack direction={'row'} justifyContent={'center'}>
      <Pagination count={4} />

      </Stack>

		</div>
	);
}

export default ProductCards;
