import type { Product } from "../../../app/models/Product"
import LoadingSpinner from "../../../components/ui/LoadingSpinner"
import useProduct from "../hooks/useProduct"
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
        <ul className="max-w-fit mx-auto pb-18 sm:py-10 lg:mx-0 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map(product => (
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>
            ))}
        </ul>
    )
}