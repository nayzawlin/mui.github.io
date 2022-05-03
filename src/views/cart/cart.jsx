import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
// import { poster } from './poster';
import { useSelector } from "react-redux";
import { List } from '../home/list';
import { useNavigate } from 'react-router-dom';


export default function Cart() {
	const navigate = useNavigate();
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		if(cart.length === 0){
			navigate('/'); 
		}
	}, []);

	return (<>

		<Grid container spacing={1} mt={3}>
			{
				cart.map((i, index) => {
					return (
						<List key={index} url={i.url} id={i.id} />
					)
				})
			}
		</Grid>
	</>);
}
