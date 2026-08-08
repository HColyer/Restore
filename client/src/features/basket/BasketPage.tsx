import useBasket from "../../hooks/useBasketContext"
import BasketItem from "./BasketItem";

export default function BasketPage() {
    const { items } = useBasket();

    return (
        <main className="pt-32 flex justify-center items-center">
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item.product.id}>
                        {<BasketItem product={item.product} />}
                    </li>
                ))}
            </ul>
        </main>
    )
}