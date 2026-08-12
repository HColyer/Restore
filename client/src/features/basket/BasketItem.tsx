import { Minus, Plus, Trash } from "lucide-react"
import useBasket from "../../hooks/useBasketContext"
import type { BasketItem } from "../../app/models/BasketItem"

type Props = {
    item: BasketItem
}


export default function BasketItem({ item }: Props) {
    const { addItemToBasket, clearBasket } = useBasket();


    return (
        <section className="w-150 flex items-center bg-zinc-100 dark:bg-zinc-900 p-4 space-x-5">
            <img className="aspect-square w-24 rounded" src={item.pictureUrl} alt={item.name} />
            <h3 className="flex-1">{item.name}</h3>
            <p>£{(item.price / 100 * item.quantity).toFixed(2)}</p>
            <div className="flex space-x-4 p-3 ml-3 rounded border-2 border-orange-400 dark:border-purple-700">
                <button className="cursor-pointer" onClick={() => clearBasket(item.productId, 1)}>
                    <Minus />
                </button>
                <p>{item.quantity}</p>
                <button className="cursor-pointer" onClick={() => addItemToBasket(item.productId)}>
                    <Plus />
                </button>
            </div>
            <button className="cursor-pointer hover:text-red-500" onClick={() => clearBasket(item.productId, item.quantity)}>
                <Trash />
            </button>
        </section>
    )
}