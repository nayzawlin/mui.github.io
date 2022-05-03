import {
	Box, Button, CardActions
} from '@mui/material';

import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/cartSlice';

export const List = (props) => { 

	const dispatch = useDispatch();
	const list = useSelector(state => state.post)

	const ADD_TO_CART = (id) => {
		dispatch(addToCart({ id, list}))
	}

	return(
		<Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
			<Box sx={{ boxShadow: 3 }}>
				<CardMedia
					component="img"
					height={270}
					image={props.image}
					alt="Paella dish"
				/>
				<CardActions>
					<Button size="small" sx={{ mx: 'auto' }} variant="contained" onClick={() => ADD_TO_CART(props.id)}>
						ADD TO CART
					</Button>
				</CardActions>
			</Box>
		</Grid>
	)
}