import type { Product } from "../../app/models/Product"
import { Minus, Plus, Trash } from "lucide-react"
import useBasket from "../../hooks/useBasketContext"

type Props = {
    product: Product
}

export default function BasketItem({ product }: Props) {
    const { addItem, decreaseItem, deleteItem, items } = useBasket();
    const basketItem = items.find(
    item => item.product.id === product.id
);

    return (
        <section className="w-150 flex items-center bg-zinc-100 dark:bg-zinc-900 p-4 space-x-5">
            <img className="aspect-square w-24 rounded" src={product.pictureUrl} alt={product.name} />
            <h3 className="flex-1">{product.name}</h3>
            <p>£{(product.price / 100 * basketItem.quantity).toFixed(2)}</p>
            <div className="flex space-x-4 p-3 ml-3 rounded border-2 border-orange-400 dark:border-purple-700">
                <button className="cursor-pointer" onClick={() => decreaseItem(product.id)}>
                    <Minus />
                </button>
                <p>{basketItem.quantity}</p>
                <button className="cursor-pointer" onClick={() => addItem(product)}>
                    <Plus />
                </button>
            </div>
            <button className="cursor-pointer hover:text-red-500" onClick={() => deleteItem(basketItem.product.id)}>
                <Trash />
            </button>
        </section>
    )
}