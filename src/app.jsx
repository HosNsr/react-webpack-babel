import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Users from './Users'
import Slider from './Slider'
import NotMatch from './404'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/panel" component={Home} />
				<Route exact path="/panel/slider" component={Slider} />
				<Route path="*" component={NotMatch} />
			</Switch>
		</Router>
	)
}

export default App
