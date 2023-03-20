import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
function TitleFilter() {
	return (
		<Stack direction={"column"} alignItems={"center"} justifyContent={"center"} className="TitleFilter">
			<Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 2 }}>
				What Are You Looking For :
			</Typography>
			<Stack direction={"row"}>
				<TextField
					id="outlined-basic"
					placeholder="Search Item Here"
					fullWidth
					variant="outlined"
				/>
                <Button className="srch"><SearchIcon /></Button>
			</Stack >
			<Typography my={2}>you are lastest Search :</Typography>
            <Stack direction={"row"}>
				
            <Button className="gry-srch">Laptops</Button>
            <Button className="gry-srch">Camera</Button>
            <Button className="gry-srch">Headphones</Button>
			</Stack >
		</Stack>
	);
}

export default TitleFilter;
