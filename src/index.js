import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store';
import { Provider } from 'react-redux';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Context>
					<App />
				</Context>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);