import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// if this a time consuming function, we are calling it in jsx
// every time the state of index is changed, it is being rerendered
const calculateMostExpensive = (data) => {
	console.log('hello world')
	return (
		data.reduce((total, item) => {
			const price = item.fields.price
			if (price > total) {
				total = price
			}
			return total
		}, 0) / 100
	)
}

// every time props or state changes, component re-renders
//useState triggers re-render when state changes
// all the components inside the component also get re-rendered
const Index = () => {
	const { products } = useFetch(url)
	const [count, setCount] = useState(0)
	const [cart, setCart] = useState(0)

	// const addToCart = () => {
	// 	setCart(cart + 1)
	// }

	const addToCart = useCallback(() => {
		setCart(cart + 1)
	}, [cart])

	const mostExpensive = useMemo(
		() => calculateMostExpensive(products),
		[products]
	)
	// because we have used useMemo, now this function is called only
	// when productschange, otherwise the value of the last call is
	// memoized(remembered) and returned

	return (
		<>
			<h1>Count : {count}</h1>
			<button className='btn' onClick={() => setCount(count + 1)}>
				click me
			</button>
			<h1 style={{ marginTop: '3rem' }}>cart:{cart}</h1>
			<h1>Most expensive : ${mostExpensive}</h1>
			<BigList products={products} addToCart={addToCart} />
		</>
	)
}

// each time we click the click me button, or add to cart button we change the state of Index,
// which is re-rendered, and the addTo Cart function is recreated
// react assumes that the add to cart function has changed
//  which causes rerendering of Biglist and SingleProduct
// this problem can be solved using useCallback hook

// usecallback is used to memoize the function, which will recreate the function only when the value in the dependency list changes, now even when we change the count, add to cart is not recreated, hence biglist is not rerendered

// memoizing has its own costs in terms of computation power
// we can use React.memo to memoize(remember the state)of a component,
// if the props value does not change, then re-render does not happen
const BigList = React.memo(({ products, addToCart }) => {
	useEffect(() => {
		console.log('big list called')
	})
	return (
		<section className='products'>
			{products.map((product) => {
				return (
					<SingleProduct
						key={product.id}
						{...product}
						addToCart={addToCart}
					></SingleProduct>
				)
			})}
		</section>
	)
})

const SingleProduct = ({ fields, addToCart }) => {
	let { name, price } = fields
	price = price / 100
	const image = fields.image[0].url

	useEffect(() => {
		console.count('single item called')
	})

	return (
		<article className='product'>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>${price}</p>
			<button className='btn' onClick={addToCart}>
				add to cart
			</button>
		</article>
	)
}
export default Index
