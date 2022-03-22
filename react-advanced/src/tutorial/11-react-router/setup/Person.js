import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { Link, useParams } from 'react-router-dom'
const Person = () => {
	const [name, setName] = useState('default name')
	let { id } = useParams()

	useEffect(() => {
		const newPerson = data.find((person) => person.id === parseInt(id))
		setName(newPerson.name)
	}, [])

	return (
		<div>
			<h1>{name}</h1>
			<Link to='/people' className='btn'>
				Back to People
			</Link>
		</div>
	)
}

export default Person

// to access the params passed in via react-router,we need to use the useParams hook
