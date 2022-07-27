import React, { ComponentType, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const Home = lazy(() => import('@/pages/Home/Home'));

const App: ComponentType = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
