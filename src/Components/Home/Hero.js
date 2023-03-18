import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import i18next, { t } from "i18next";
import React from "react";
import ContainerL from "../Layout/ContainerL";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Pagination } from "swiper";
function Hero() {
	return (
		<div>
			{/* <Typography>{t("hello")}</Typography> */}
			<Container sx={{ my: 3 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={8}>
						<>
							<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
					
								<SwiperSlide>
									<Box className="desc-slide">
										<Typography variant="h3" sx={{ width: "80%", fontWeight: 600 }}>
											Better Device For Better Life
										</Typography>
										<Typography variant="h5" sx={{ width: "80%" }}>
											This site The best in middle east
										</Typography>
									</Box>
									<img src="/images/apple2.webp" />
								</SwiperSlide>
								<SwiperSlide>
									<Box className="desc-slide">
										<Typography variant="h3" sx={{ width: "80%", fontWeight: 600 }}>
											Better Device For Better Life
										</Typography>
										<Typography variant="h5" sx={{ width: "80%" }}>
											This site The best in middle east
										</Typography>
									</Box>
									<img src="/images/apple1.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<Box className="desc-slide">
										<Typography variant="h3" sx={{ width: "80%", fontWeight: 600 }}>
											Better Device For Better Life
										</Typography>
										<Typography variant="h5" sx={{ width: "80%" }}>
											This site The best in middle east
										</Typography>
									</Box>
									<img src="/images/apple3.webp" />
								</SwiperSlide>
							</Swiper>
						</>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Stack direction={"column"} alignItems={"center"} gap={7}>
							<>
								<Swiper className="mySwiper">
									<SwiperSlide>
									<Box className="desc-slide2">
										<Typography variant="h5" sx={{ width: "80%", fontWeight: 600 }}>
											PC For Gaming
										</Typography>
										
									</Box>
										<img src="/images/pc.jpg" height={"100px"} />
									</SwiperSlide>

									<SwiperSlide>
										<img src="/images/pc.webp" height={"100px"} />
									</SwiperSlide>

									<SwiperSlide>
										<img src="/images/pc2.webp" height={"100px"} />
									</SwiperSlide>
								</Swiper>
							</>

							<>
								<Swiper className="mySwiper">
									<SwiperSlide>
									<Box className="desc-slide2">
										<Typography variant="h5" sx={{ width: "80%", fontWeight: 600 }}>
											Best Camera 2 Best Moment
										</Typography>
										
									</Box>
										<img src="/images/camera.webp" height={"100px"} />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/images/camera2.webp" height={"100px"} />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/images/apple1.jpg" height={"100px"} />
									</SwiperSlide>
								</Swiper>
							</>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Hero;
