import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Cookies from "js-cookie";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/ProductDet";
import About from "./Pages/About";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";
import Blog from "./Pages/Blog";

const theme = createTheme({
	direction: "rtl",
});

function App() {
	useEffect(() => {
		const lang = Cookies.get("i18next") || "en";
		if (lang === "ar") {
			document.body.dir = "rtl";
		} else {
			document.body.dir = "ltr";
		}
	}, []);

	const { t } = useTranslation();



	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="productdetail" element={<Product />} />
				<Route path="about" element={<About />} />
				<Route path="products" element={<Products />} />
				<Route path="blog" element={<Blog />} />
				<Route path="*" element={<NotFound />} />
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
