import useBasket from "../../hooks/useBasketContext";
import BasketItem from "./BasketItem";

export default function BasketPage() {
    const { basket } = useBasket();

    if (!basket || basket.items.length === 0) {
        return (
            <main className="pt-32 flex justify-center items-center">
                <p>Your basket is empty</p>
            </main>
        );
    }

    return (
        <main className="pt-32 flex justify-center items-center">
            <ul className="space-y-3">
                {basket.items.map((item) => (
                    <li key={item.productId}>
                        <BasketItem item={item} />
                    </li>
                ))}
            </ul>
        </main>
    );
}