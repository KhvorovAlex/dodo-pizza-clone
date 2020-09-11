// libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'
// components
import { Header } from './components/index'
import { Home, Cart } from './pages/index'

function App() {
  return (	  
		<div className="wrapper">
			<Header />
			<div className="content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={Cart} />	
				</Switch>						
			</div>
		</div>
 	 )
}

export default App
