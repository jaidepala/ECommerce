import React from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

// Context
import { StateContext } from '../context/StateContext';

// Components
import { Layout } from '../components';

export default function App({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}
