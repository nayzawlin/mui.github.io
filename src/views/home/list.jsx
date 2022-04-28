import {
	Box
} from '@mui/material';

import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

export const HomeCard = (props) => {
	return(
		<Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
			<Box sx={{ boxShadow: 3 }}>
				<CardMedia
					component="img"
					height={270}
					image={props.image}
					alt="Paella dish"
				/>
			</Box>
		</Grid>
	)
}