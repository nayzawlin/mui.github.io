import * as React from 'react';
import { Grid, Pagination, Stack } from '@mui/material';
import { image } from './poster';
import { HomeCard } from './list';

const style = {
 	mx: 'auto',
	mt: 3,
	// minWidth: 200
}

export default function RecipeReviewCard() {
	return (<>
		<Grid container spacing={1}>
			{
				image.map((i, index) => {
					return(
						<HomeCard key={index} image={i.url} />
					)
				})
			}
		</Grid>

		<Stack spacing={2} sx={style}>
			<Pagination count={10} variant="outlined" color="primary" />
		</Stack>
	</>);
}
