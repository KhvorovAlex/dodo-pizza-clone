import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import './scss/app.scss'

import App from './App'

ReactDOM.render( 
	<BrowserRouter>	
		<Provider store={store}>
			<App />	
		</Provider>
	</BrowserRouter>,
  document.getElementById('root'),
)
