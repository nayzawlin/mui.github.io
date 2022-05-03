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
	const post = useSelector(state => state.post)
	const cart = useSelector(state => state.cart)

	const ADD_TO_CART = (d) => {
		dispatch(addToCart({ current: props, post, cart }))
	}

	return(
		<Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
			<Box sx={{ boxShadow: 3 }}>
				<CardMedia
					component="img"
					height={270}
					image={props.url}
					alt="Paella dish"
				/>
				<CardActions>
					<Button size="small" sx={{ mx: 'auto' }} variant="contained" onClick={() => ADD_TO_CART(props)}>
						ADD TO CART
					</Button>
				</CardActions>
			</Box>
		</Grid>
	)
}