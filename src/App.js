import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import LandingPage from './landingpage/landingpage';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import DashboardApp from './pages/DashboardApp';

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Router>			
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register/>} />
					<Route exact path='/dashboard' element={<DashboardApp />} />
 				</Routes>			
			</Router>
		</div>
	);
};

export default App;
