import {
	Container,
	Divider,
	Grid,
} from "@mui/material";
import React from "react";
import SliderProd from "./SliderProd";
import "./ProductDetails.css";

import DetailsSec from "./DetailsSec";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
function ProductDetail() {
	return (
		<Container sx={{ my: 4 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<SliderProd />
				</Grid>
				<Grid item xs={12} lg={6}>
				<DetailsSec />  
				</Grid>
			</Grid>
      <Grid container mt={3} spacing={2}>
				<Grid item xs={12} lg={6}>
          <Reviews />
         
				</Grid>
				<Grid item xs={12} lg={6}>
    <AddReview />
				</Grid>
			</Grid>
		</Container>
	);
}

export default ProductDetail;
