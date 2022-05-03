import React, { useState } from 'react';
import { Grid, Pagination, Stack } from '@mui/material';
// import { poster } from './poster';
import { List } from './list';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { add } from '../../features/postSlice';


const style = {
 	mx: 'auto',
	mt: 3,
	// minWidth: 200
}

const btn = {
	marginLeft: 2
}

export default function RecipeReviewCard() {
	
	const dispatch = useDispatch();
	const [url, setURL] = useState('')
	const poster = useSelector(state => state.post)

	const ADD = () =>{
		dispatch(add(url));
		setURL('');
	}

	return (<>

		<Grid container mt={1}>
			<TextField id="standard-basic" label="Enter POSTER URL" variant="standard" value={url} onChange={(i)=>setURL(i.target.value)}/>
			<Button variant="contained" sx={btn} onClick={ADD}>ADD</Button>
		</Grid>

		<Grid container spacing={1} mt={3}>
			{
				poster.map((i, index) => {
					return(
						<List key={index} image={i.url} id={i.id} />
					)
				})
			}
		</Grid>

		{/* <Stack spacing={2} sx={style}>
			<Pagination count={10} variant="outlined" color="primary" />
		</Stack> */}
	</>);
}
