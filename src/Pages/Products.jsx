import { Container, Grid } from "@mui/material";
import React from "react";
import ContainerL from "../Components/Layout/ContainerL";
import Filter from "../Components/Products/Filter";
import ProductCards from "../Components/Products/ProductCards";
import TitleFilter from "../Components/Products/TitleFilter";

function Products() {
	return (
		<ContainerL>
			<Container>
				<TitleFilter />
				<Grid container spacing={2} my={3}>
					<Grid item xs={12} lg={3}>
                    <Filter />

					</Grid>
					<Grid item xs={12} lg={8}>
                    <ProductCards />

					</Grid>
					
				</Grid>
			</Container>
		</ContainerL>
	);
}

export default Products;
