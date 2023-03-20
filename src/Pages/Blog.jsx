import { Container, Grid } from "@mui/material";
import React from "react";
import BlogCard from "../Components/Blog/BlogCard";
import BlogFilter from "../Components/Blog/BlogFilter";
import TitleBlog from "../Components/Blog/TitleBlog";
import ContainerL from "../Components/Layout/ContainerL";

function Blog() {
	return (
		<ContainerL>
			<Container>
                    <TitleBlog />
                    <Grid container spacing={4} mb={3}>
					<Grid item xs={12} lg={3}>
                    <BlogFilter />

					</Grid>
					<Grid item xs={12} lg={8}>
                    <BlogCard />
					</Grid>
					
				</Grid>
            </Container>
		</ContainerL>
	);
}

export default Blog;
