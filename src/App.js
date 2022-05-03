import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './views/appbar/appbar';
import Home from './views/home/home';
import { Container } from '@mui/material';
import Cart from './views/cart/cart';


function App() {
	return (
		<div className="App">
			<header className="">
				<AppBar />
			</header>
			<main style={{ padding: "1rem", background: '' }}> {/* background: '#f7f7f7' */}
				<Container fixed maxWidth="xl">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Container>
			</main>
		</div>
	);
}

export default App;
