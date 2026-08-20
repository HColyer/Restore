import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";

export default function useBasket() {
    const context = useContext(BasketContext);

    if (!context) {
        throw new Error(
            "useShoppingBasket must be used within a ShoppingBasketProvider"
        );
    }

    return context;
}