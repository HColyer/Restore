import { Minus, Plus, Trash } from "lucide-react"
import useBasket from "../hook/useBasket"
import type { BasketItem } from "../../../app/models/BasketItem"

type Props = {
    item: BasketItem
}


export default function BasketItem({ item }: Props) {
    const { addItemToBasket, clearBasket } = useBasket();


    return (
        <section className="max-w-150 grid grid-cols-3 sm:flex sm:space-x-2 gap-3 items-center bg-zinc-100 dark:bg-zinc-900 p-4">
            <img className="aspect-square w-24 rounded" src={item.pictureUrl} alt={item.name} />
            <h3 className="col-span-2">{item.name}</h3>
            <p className="justify-self-start">£{(item.price / 100 * item.quantity).toFixed(2)}</p>
            <div className="flex justify-between py-3 px-2 sm:p-4 rounded border-2 border-orange-400 dark:border-purple-700">
                <button className="cursor-pointer" onClick={() => clearBasket(item.productId, 1)}>
                    <Minus />
                </button>
                <p className="sm:px-2">{item.quantity}</p>
                <button className="cursor-pointer" onClick={() => addItemToBasket(item.productId)}>
                    <Plus />
                </button>
            </div>
            <button className="cursor-pointer justify-self-end hover:text-red-500" onClick={() => clearBasket(item.productId, item.quantity)}>
                <Trash />
            </button>
        </section>
    )
}