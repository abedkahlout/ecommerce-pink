import { Container, Typography, Box } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation, Mousewheel, Keyboard } from "swiper";

function BestSales() {
	return (
		<Container sx={{ my: 5 }}>
			<Typography variant="h5" sx={{ my: 5, fontWeight: 700 }}>
				Best Sales
			</Typography>
			<>
				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					cssMode={true}
					navigation={true}
					pagination={true}
					modules={[Navigation, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					<SwiperSlide>
						<Box className="bg-gray">
							<img src="/images/huawi.png" height={"100px"} />
							<Typography variant="h6" sx={{fontWeight:700}}>Huawi Phone</Typography>
							<Typography sx={{fontWeight:700}}>999$</Typography>
							<Typography>ADD To Card</Typography>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
                    <Box className="bg-gray">
							<img src="/images/huawi.png" height={"100px"} />
							<Typography variant="h6" sx={{fontWeight:700}}>Huawi Phone</Typography>
							<Typography sx={{fontWeight:700}}>999$</Typography>
							<Typography>ADD To Card</Typography>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box className="bg-gray">
							<img src="/images/huawi.png" height={"100px"} />
							<Typography variant="h6" sx={{fontWeight:700}}>Huawi Phone</Typography>
							<Typography sx={{fontWeight:700}}>999$</Typography>
							<Typography>ADD To Card</Typography>
						</Box>{" "}
					</SwiperSlide>
					<SwiperSlide>
						<Box className="bg-gray">
							<img src="/images/huawi.png" height={"100px"} />
							<Typography variant="h6" sx={{fontWeight:700}}>Huawi Phone</Typography>
							<Typography sx={{fontWeight:700}}>999$</Typography>
							<Typography>ADD To Card</Typography>
						</Box>{" "}
					</SwiperSlide>
					<SwiperSlide>
						<Box className="bg-gray">
							<img src="/images/huawi.png" height={"100px"} />
							<Typography variant="h6" sx={{fontWeight:700}}>Huawi Phone</Typography>
							<Typography sx={{fontWeight:700}}>999$</Typography>
							<Typography>ADD To Card</Typography>
						</Box>{" "}
					</SwiperSlide>

				
				</Swiper>
			</>
		</Container>
	);
}

export default BestSales;
