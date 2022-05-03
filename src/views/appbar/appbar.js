import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { Button } from '@mui/material';
import Cart from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'



export default function BackToTop(props) {

	const cart = useSelector(state => state.cart)

	const style = {
		
	}

	const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
	right: -3,
	top: 13,
	border: `2px solid ${theme.palette.background.paper}`,
	padding: '0 4px',
	},
	}));

	return (
		<React.Fragment>

			<CssBaseline />
			<AppBar color="inherit" sx={style}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					MOVIESDB
					</Typography>
					{/* <Button color="inherit">
						<Cart />
					</Button> */}
					<IconButton>
						<StyledBadge badgeContent={cart.length} color="secondary">
							<Cart />
						</StyledBadge>
					</IconButton>
				</Toolbar>
			</AppBar>

			<Toolbar id="back-to-top-anchor" />
			
			<ScrollTop {...props}>
				<Fab color="primary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>

		</React.Fragment>
	);
}

function ScrollTop(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor',
		);

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Zoom>
	);
}

ScrollTop.propTypes = {
  	children: PropTypes.element.isRequired,
};
