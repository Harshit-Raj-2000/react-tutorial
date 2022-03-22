import { useState, useEffect, useCallback } from 'react'

// customHooks must start with use
export const useFetch = (url) => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])

	const getProducts = useCallback(async () => {
		const response = await fetch(url)
		const products = await response.json()
		setProducts(products)
		setLoading(false)
	}, [url])

	// we have used useCallback, as we want to add this function
	// to dependency list of useEffect, but without using useCallback
	//when initially in useEffect, getProducts is called, it will, cause the state of component to change, which will trigger rerender, so getproducts()
	//will be recreated,which will trigger useEffect(), which will trigger getProducts, which will trigger rerender

	useEffect(() => {
		getProducts()
	}, [url, getProducts])

	return {
		loading,
		products,
	}
}
