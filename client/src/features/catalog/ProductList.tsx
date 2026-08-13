import type { Product } from "../../app/models/Product"
import ProductItem from "./ProductItem"

type Props = {
    products: Product[]
}

export default function ProductList({ products }: Props) {
    return (
        <ul className="grid grid-cols-3 max-w-fit gap-8 pt-30 mx-auto">
            {products.map(product => (
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>
            ))}
        </ul>
    )
}