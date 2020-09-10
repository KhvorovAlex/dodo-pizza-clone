// libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPizzasSuccess } from './redux/reducers/pizzas'
// components
import { Header } from './components/index'
import { Home, Cart } from './pages/index'

function App() {

	const dispatch = useDispatch()

	React.useEffect(()=> {
		axios.get('http://localhost:3001/pizzas')
			.then(response => dispatch(setPizzasSuccess(response.data)))	
	}, [dispatch])

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
