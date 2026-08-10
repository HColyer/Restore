import type { Product } from "../../app/models/Product"
import { useState, useEffect } from "react"
import ProductList from "./ProductList"
import { getProducts } from "../../services/CatalogServices"
import { useNavigate } from "react-router"
import handleApiError from "../../api/handleApiError"

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts()
                setProducts(data);
            } catch (error) {
                handleApiError(error, navigate)
            }
        }
        loadProducts()
    }, [navigate])

    return (
        <>
            <ProductList products={products} />
        </>
    )
}