import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/people'>People</Link>
				</li>
			</ul>
		</nav>
	)
}

// Link from react-router-dom is used to link to internal routes

export default Navbar
