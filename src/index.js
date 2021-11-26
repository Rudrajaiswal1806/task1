import React from 'react';
import ReactDOM from 'react-dom';
import config from 'react-global-configuration';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';


config.set({ 
	dev: {
		api_url: 'https://run.mocky.io/v3/c2bf5ea5-56a8-4826-b682-512b58ac45f3'
	}
});

ReactDOM.render(
	<Provider store={store}>		
		<App />
	</Provider>,
  document.getElementById('App')
);



