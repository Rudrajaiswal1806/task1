import React from 'react';
import ReactDOM from 'react-dom';
import config from 'react-global-configuration';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';


config.set({ 
	dev: {
		api_url: 'https://run.mocky.io/v3/3e285883-d974-482e-8ccb-3a7e77a72d62'
	}
});

ReactDOM.render(
	<Provider store={store}>		
		<App />
	</Provider>,
  document.getElementById('App')
);



