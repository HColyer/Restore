import type { Product } from "../../app/models/Product"
import { useState, useEffect } from "react"
import ProductList from "./ProductList"
import { getProducts } from "../../services/CatalogServices"



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts()
            setProducts(data);
        }

        loadProducts()
    }, [])

    return (
        <>
            <ProductList products={products} />
        </>
    )
}