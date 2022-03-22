import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
// navbar
import Navbar from './Navbar'
const ReactRouterSetup = () => {
	return (
		<Router>
			<Navbar />
			{/* this navbar is in router, but not inide a route, so shown in all routes   */}
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/people'>
					<People />
				</Route>
				<Route path='/person/:id' children={<Person />}></Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	)
}

// without the prop exact, '/' , '/about' and '/people,allshowhome page, as / is in /about and /people as well

// ifthe url does not match any path, we can show an error page using path='*', but "*" matches all other paths as well, so we need to use switch component, with switch component, only the first one that matches is displayed

// without switch all paths that mach are shown, with switch first path that matches is shown
// if we go to /about, it matches with / , so jome should be shown
// but we have used exact, so, it does not match

export default ReactRouterSetup
