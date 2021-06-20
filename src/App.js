import React from 'react';

import Header from './modules/header/components/Header';
import Body from './modules/body/components/Body';
import Footer from './modules/footer/components/Footer';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
