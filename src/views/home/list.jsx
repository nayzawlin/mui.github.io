import {
	Box, Button, CardActions
} from '@mui/material';

import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../features/cartSlice';
import { useSnackbar } from 'notistack';


export const List = (props) => {

	const { enqueueSnackbar } = useSnackbar();

	const dispatch = useDispatch();
	const post = useSelector(state => state.post)
	const cart = useSelector(state => state.cart)

	const ADD_TO_CART = () => {
		enqueueSnackbar('Successfully added!', { variant: 'success' });
		dispatch(addToCart({ current: props, post, cart }))
	}

	const REMOVE_FROM_CART = () => {
		dispatch(removeFromCart({ current: props, post, cart }))
	}



	return(
		<Grid item xs={6} sm={4} md={3} lg={2}> {/* xl={1} */}
			<Box sx={{ boxShadow: 3 }}>
				<CardMedia
					component="img"
					height={270}
					image={props.url}
					alt="Movie Poster"
				/>
				<CardActions>
					{
						props.status !== "cart"
							?
							<Button size="small" sx={{ mx: 'auto' }} variant="contained" onClick={() => ADD_TO_CART(props)}>
								ADD TO CART
							</Button>
							:
							<Button size="small" sx={{ mx: 'auto' }} variant="contained" onClick={() => REMOVE_FROM_CART(props)}>
								REMOVE FROM CART
							</Button>
					}
				</CardActions>
			</Box>
		</Grid>
	)
}