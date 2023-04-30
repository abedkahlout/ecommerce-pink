import { Container, Typography, Box } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

function BestSales() {
	return (
		<Container sx={{ my: 5 }}>
			<Typography variant="h5" sx={{ my: 5, fontWeight: 700 }}>
				Best Sales
			</Typography>
			<>
				<Swiper
				  breakpoints={{
					640: {
					  slidesPerView: 1,
					},
					768: {
					  slidesPerView: 3,
					},
				  }}
					spaceBetween={20}
					cssMode={true}
					navigation={true}
					pagination={true}
					modules={[Navigation, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					<SwiperSlide>
						<Link to="/productdetail" sx={{ color: "black" }}>
							<Box className="bg-gray">
								<img src="/images/huawi.png" height={"100px"} />
								<Typography variant="h6" sx={{ fontWeight: 700 }}>
									Huawi Phone
								</Typography>
								<Typography sx={{ fontWeight: 700 }}>999$</Typography>
								<Typography>ADD To Card</Typography>
							</Box>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link to="/productdetail" sx={{ color: "black" }}>
							<Box className="bg-gray">
								<img src="/images/huawi.png" height={"100px"} />
								<Typography variant="h6" sx={{ fontWeight: 700 }}>
									Huawi Phone
								</Typography>
								<Typography sx={{ fontWeight: 700 }}>999$</Typography>
								<Typography>ADD To Card</Typography>
							</Box>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link to="/productdetail" sx={{ color: "black" }}>
							<Box className="bg-gray">
								<img src="/images/huawi.png" height={"100px"} />
								<Typography variant="h6" sx={{ fontWeight: 700 }}>
									Huawi Phone
								</Typography>
								<Typography sx={{ fontWeight: 700 }}>999$</Typography>
								<Typography>ADD To Card</Typography>
							</Box>{" "}
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link to="/productdetail" sx={{ color: "black" }}>
							<Box className="bg-gray">
								<img src="/images/huawi.png" height={"100px"} />
								<Typography variant="h6" sx={{ fontWeight: 700 }}>
									Huawi Phone
								</Typography>
								<Typography sx={{ fontWeight: 700 }}>999$</Typography>
								<Typography>ADD To Card</Typography>
							</Box>{" "}
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link to="/productdetail" sx={{ color: "black" }}>
							<Box className="bg-gray">
								<img src="/images/huawi.png" height={"100px"} />
								<Typography variant="h6" sx={{ fontWeight: 700 }}>
									Huawi Phone
								</Typography>
								<Typography sx={{ fontWeight: 700 }}>999$</Typography>
								<Typography>ADD To Card</Typography>
							</Box>{" "}
						</Link>
					</SwiperSlide>
				</Swiper>
			</>
		</Container>
	);
}

export default BestSales;
