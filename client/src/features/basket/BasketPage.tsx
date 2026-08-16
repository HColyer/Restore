import useBasket from "../../hooks/useBasketContext";
import BasketItem from "./BasketItem";
import { Link } from "react-router";

export default function BasketPage() {
    const { basket } = useBasket();

    if (!basket || basket.items.length === 0) {
        return (
            <main className="sm:pt-32 flex justify-center items-center px-6">
                <div className="shadow-md rounded-lg bg-zinc-100 dark:bg-zinc-800 min-w-100 flex flex-col justify-center items-center p-10 space-y-5">
                    <p className="">Your basket is empty</p>
                    <Link to="/" className="btn">
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="sm:pt-32 flex justify-center items-center p-6">
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