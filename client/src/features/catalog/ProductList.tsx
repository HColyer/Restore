import type { Product } from "../../app/models/Product"
import LoadingSpinner from "../../components/ui/LoadingSpinner"
import useProduct from "../../hooks/useProductContext"
import ProductItem from "./ProductItem"

type Props = {
    products: Product[]
}

export default function ProductList({ products }: Props) {
    const { state } = useProduct();
    if (state.loading) {
        return (
            <div className="min-h-screen flex justify-center pt-40">
                <LoadingSpinner />
            </div>
        )
    }
    return (
        <ul className="grid grid-cols-3 max-w-fit gap-8">
            {products.map(product => (
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>
            ))}
        </ul>
    )
}